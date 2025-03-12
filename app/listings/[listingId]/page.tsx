import { NextPage } from "next";
import { notFound } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";
import { ClientOnly, EmptyState } from "@/app/components";
import { ListingClient } from "@/app/listings/[listingId]/ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage: NextPage<{ params: IParams }> = async ({ params }) => {
  if (!params?.listingId) {
    return notFound();
  }

  const listing = await getListingById(params);
  const reservations = await getReservations(params);
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
};

export default ListingPage;
