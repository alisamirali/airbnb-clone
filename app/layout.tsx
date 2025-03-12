import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import {
  ClientOnly,
  LoginModal,
  Navbar,
  RegisterModal,
  RentModal,
  SearchModal,
} from "@/app/components";
import { ToasterProvider } from "@/app/providers";
import getCurrentUser from "@/app/actions/getCurrentUser";

const nunitoFont = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb | Vacation rentals, cabins, beach houses, & more",
  description:
    "Get an Airbnb for every kind of trip → 7 million vacation rentals → 2 million Guest Favorites → 220+ countries and regions worldwide.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${nunitoFont.className} antialiased flex flex-col`}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>

        <main className="flex-1 pb-20 pt-28">{children}</main>
      </body>
    </html>
  );
}
