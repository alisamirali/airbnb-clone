import {
  Categories,
  Container,
  Logo,
  Search,
  UserMenu,
} from "@/app/components";
import { SafeUser } from "@/app/types";

type Props = {
  currentUser?: SafeUser | null;
};

export function Navbar({ currentUser }: Props) {
  return (
    <header className="fixed z-30 w-full bg-white bg-whit shadow-sme">
      <Container>
        <div className="py-4 border-b-[1px]">
          <nav className="flex flex-row items-center justify-between gap-3 mb-5 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </nav>
        </div>
        <Categories />
      </Container>
    </header>
  );
}
