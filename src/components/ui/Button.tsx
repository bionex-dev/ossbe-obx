import type { AnchorHTMLAttributes, ReactNode } from "react";
import s from "./Button.module.scss";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "light" | "ghost" | "ghostDark";
  size?: "md" | "sm";
  external?: boolean;
  children: ReactNode;
};

export function Button({ variant = "primary", size = "md", external, className, children, ...rest }: Props) {
  const cls = [s.btn, s[variant], size === "sm" && s.sm, className].filter(Boolean).join(" ");
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a className={cls} {...ext} {...rest}>
      {children}
    </a>
  );
}
