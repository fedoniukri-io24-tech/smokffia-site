const MAX_NAME = 120;
const MAX_PHONE = 40;
const MAX_MESSAGE = 2000;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return Response.json(
      { error: "Telegram is not configured" },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid payload" }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const name = String(payload.name ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!name || !phone) {
    return Response.json(
      { error: "Name and phone are required" },
      { status: 400 },
    );
  }

  if (!isValidPhone(phone)) {
    return Response.json({ error: "Invalid phone" }, { status: 400 });
  }

  if (
    name.length > MAX_NAME ||
    phone.length > MAX_PHONE ||
    message.length > MAX_MESSAGE
  ) {
    return Response.json({ error: "Payload too long" }, { status: 400 });
  }

  const text = [
    "<b>Нова заявка з сайту SMOKFFIA</b>",
    "",
    `<b>Імʼя:</b> ${escapeHtml(name)}`,
    `<b>Телефон:</b> ${escapeHtml(phone)}`,
    `<b>Запит:</b> ${escapeHtml(message || "—")}`,
  ].join("\n");

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      },
    );

    const telegramData = (await telegramRes.json()) as {
      ok?: boolean;
      description?: string;
    };

    if (!telegramRes.ok || !telegramData.ok) {
      console.error("Telegram send failed:", telegramData.description);
      return Response.json(
        { error: "Failed to send message" },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Telegram request error:", error);
    return Response.json({ error: "Failed to send message" }, { status: 502 });
  }
}
