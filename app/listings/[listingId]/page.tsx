import { notFound } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";
import { ClientOnly, EmptyState } from "@/app/components";
import { ListingClient } from "@/app/listings/[listingId]/ListingClient";

export default async function ListingPage({
  params,
}: {
  params: { listingId: string };
}) {
  if (!params.listingId) {
    return notFound();
  }

  const listing = await getListingById({ listingId: params.listingId });
  const reservations = await getReservations({ listingId: params.listingId });
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
