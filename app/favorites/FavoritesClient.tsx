/* eslint-disable @typescript-eslint/no-explicit-any */
import { SafeListing, SafeUser } from "@/app/types";
import ListingCard from "@/app/components/listings/ListingCard";
import { Container, Heading } from "@/app/components";

type FavoritesClientProps = {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
};

export function FavoritesClient({
  listings,
  currentUser,
}: FavoritesClientProps) {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorite!" />
      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
}
