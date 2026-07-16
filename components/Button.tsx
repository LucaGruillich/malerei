import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-3 text-[15px] font-medium transition-all duration-200 ease-[var(--ease-out)] focus-visible:outline-3 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[var(--shadow-sm)] hover:bg-brand-strong hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-brand hover:text-brand hover:-translate-y-0.5",
  ghost: "text-brand hover:bg-brand-tint",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
