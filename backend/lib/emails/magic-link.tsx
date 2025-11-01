import type { ReactElement } from "react";

interface MagicLinkEmailProps {
  url: string;
}

export function MagicLinkEmail({ url }: MagicLinkEmailProps): ReactElement {
  return (
    <div
      style={{ fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: 600,
          color: "#000",
          marginBottom: "16px",
        }}
      >
        Sign in to Burger
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Click the button below to sign in to your account. This link will expire
        in 5 minutes.
      </p>
      <a
        href={url}
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#000",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: 600,
        }}
      >
        Sign in
      </a>
      <p style={{ color: "#999", fontSize: "14px", marginTop: "24px" }}>
        If you didn't request this link, you can safely ignore this email.
      </p>
    </div>
  );
}
