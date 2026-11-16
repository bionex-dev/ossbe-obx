import type { AnchorHTMLAttributes, ReactNode } from "react";
import s from "./Button.module.scss";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "light" | "ghost" | "ghostDark";
  size?: "md" | "sm";
  external?: boolean;
  children: ReactNode;
};

/** Link styled as a button. Magnetic pull on fine pointers comes from <Interactions />. */
export function Button({ variant = "primary", size = "md", external, className, children, ...rest }: Props) {
  const cls = [s.btn, s[variant], size === "sm" && s.sm, className].filter(Boolean).join(" ");
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a className={cls} data-magnetic {...ext} {...rest}>
      <span className={s.label}>{children}</span>
    </a>
  );
}
