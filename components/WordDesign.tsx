type WordDesignProps = {
  children: string;
  className?: string;
};

export default function WordDesign({ children, className }: WordDesignProps) {
  const classes = className ? `word-design ${className}` : "word-design";

  return <span className={classes}>{children}</span>;
}
