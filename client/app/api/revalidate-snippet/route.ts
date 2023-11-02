import { type NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const secret = searchParams.get("secret");

  const body = await req.json();

  if (secret !== process.env.SECRET_REVALIDATE_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
  try {
    if (!body) {
      return new Response("Bad reqeust (no body)", { status: 400 });
    }

    const idToRevalidate = body?.id;

    if (idToRevalidate) {
      revalidatePath(`/snippets/${idToRevalidate}`);
      return NextResponse.json({ revalidated: true });
    }
  } catch (err) {
    return new Response("Error while revalidating", { status: 500 });
  }
}
