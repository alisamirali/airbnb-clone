import { notFound } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";
import { ClientOnly, EmptyState } from "@/app/components";
import { ListingClient } from "@/app/listings/[listingId]/ListingClient";

interface ListingPageProps {
  params: {
    listingId?: string;
  };
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { listingId } = params;

  if (!listingId) {
    return notFound();
  }

  const listing = await getListingById({ listingId });
  const reservations = await getReservations({ listingId });
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
