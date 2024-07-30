import { HydrateClient } from "~/trpc/server";
import Header from "../_components/header/Header";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <HydrateClient>
      <main>
        <Header />
        {children}
      </main>
    </HydrateClient>
  );
}
