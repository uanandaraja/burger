import { magicLinkClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

// Get base URL - Since frontend and backend run on same server, use window.location.origin
// Bun exposes BUN_PUBLIC_* env vars via import.meta.env if needed
const getBaseURL = () => {
  if (typeof window !== "undefined") {
    // Use window.location.origin for same-origin requests
    return window.location.origin;
  }
  // SSR/Node context fallback
  return import.meta.env?.BUN_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000";
};

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
  plugins: [magicLinkClient()],
});

export const { signIn, signUp, signOut, useSession } = authClient;
