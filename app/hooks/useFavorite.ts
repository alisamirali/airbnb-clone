import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "@/app/types";
import { useLoginModal } from "@/app/hooks/useLoginModal";

interface IUseFavorite {
  favoriteId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ favoriteId, currentUser }: IUseFavorite) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(favoriteId);
  }, [currentUser, favoriteId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorite) {
          request = () => axios.delete(`/api/favorites/${favoriteId}`);
        } else {
          request = () => axios.post(`/api/favorites/${favoriteId}`);
        }

        await request();

        router.refresh();

        toast.success("Success!");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },

    [currentUser, hasFavorite, favoriteId, loginModal, router]
  );

  return {
    hasFavorite,
    toggleFavorite,
  };
};

export default useFavorite;
