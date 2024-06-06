import { v2 } from "cloudinary";

export const dynamic = "force-dynamic";

export function GET() {
  const url = v2.url("test.jpeg");

  return Response.json({ url });
}
