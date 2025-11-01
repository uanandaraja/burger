import index from "../../frontend/src/index.html";

// About page route - serves the React app for client-side routing
export async function GET() {
  return index;
}

