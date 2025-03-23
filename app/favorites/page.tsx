import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";
import { ClientOnly, EmptyState } from "@/app/components";
import { FavoritesClient } from "@/app/favorites/FavoritesClient";

export default async function FavoritesPage() {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings?.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings!} currentUser={currentUser} />
    </ClientOnly>
  );
}
