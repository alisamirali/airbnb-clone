/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "@/app/types";
import { useLoginModal } from "@/app/hooks/useLoginModal";

type IUseFavorite = {
  listingId: string;
  currentUser?: SafeUser | null;
};

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorite) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorite, listingId, loginModal, router]
  );

  return {
    hasFavorite,
    toggleFavorite,
  };
};

export default useFavorite;
