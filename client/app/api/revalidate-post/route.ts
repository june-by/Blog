import { type NextRequest, type NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  const secret = searchParams.get("secret");

  const body = await req.json();

  if (secret !== process.env.SECRET_REVALIDATE_TOKEN) {
    return Response.json({ message: "Invalid token" }, { status: 401 });
  }
  try {
    if (!body) {
      return new Response("Bad reqeust (no body)", { status: 400 });
    }

    const idToRevalidate = body?.id;

    if (idToRevalidate) {
      revalidatePath(`/post/${idToRevalidate}`);
      return Response.json({ revalidated: true });
    }
  } catch (err) {
    return new Response("Error while revalidating", { status: 500 });
  }
}
