import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, context: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = context.params; // جلب listingId من context

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const favoriteIds = [...(currentUser.favoriteIds || []), listingId];

  const user = await prisma.user.update({
    where: { id: currentUser.id },
    data: { favoriteIds },
  });

  return NextResponse.json(user);
}

export async function DELETE(request: Request, context: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = context.params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const favoriteIds = (currentUser.favoriteIds || []).filter(
    (id) => id !== listingId
  );

  const user = await prisma.user.update({
    where: { id: currentUser.id },
    data: { favoriteIds },
  });

  return NextResponse.json(user);
}
