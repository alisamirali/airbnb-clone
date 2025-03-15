/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import { ClientOnly, Container, EmptyState } from "@/app/components";
import ListingCard from "@/app/components/listings/ListingCard";

const Home = async ({ searchParams }: { searchParams: any }) => {
  const userId = searchParams?.userId as string | undefined;
  const listings = await getListings({ userId });
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {listings.map((listing) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
