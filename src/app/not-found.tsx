import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section style={{ background: "var(--c-ink)", minHeight: "70svh", display: "grid", placeItems: "center", padding: "calc(var(--nav-h) + 48px) 16px 64px", textAlign: "center" }}>
      <div style={{ display: "grid", gap: 20, justifyItems: "center" }}>
        <p className="eyebrow" style={{ color: "#8fb3d9" }}>404</p>
        <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)" }}>Page not found</h1>
        <Button href="/" variant="light">Home</Button>
      </div>
    </section>
  );
}
