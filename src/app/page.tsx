import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  //const hello = await api.post.hello({ text: "from tRPC" });
  //const exampleMessage = await api.example.greeting();
  //const exampleDb = await api.example.getExample();
  //const session = await getServerAuthSession(); ADD TO EVERY FILE/COMPONENT THAT NEEDS SESSION?

  //void api.post.getLatest.prefetch(); WHAT DOES THE PREFETCH DO?

  // Example Usage:
  /*
  {hello ? hello.greeting : "Loading tRPC query..."}
  {session && <span>Logged in as {session.user?.name}</span>}
  <Link
    href={session ? "/api/auth/signout" : "/api/auth/signin"}
    className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
  >
    {session ? "Sign out" : "Sign in"}
  </Link>
  {exampleMessage ? exampleMessage.greeting : "Loading tRPC query..."}
  {exampleDb?.map((item) => (
    <div key={item.id}>Example: {item.name}</div>
  ))}
  {session?.user && <LatestPost />}
  */

  return (
    <HydrateClient>
      <main>Home</main>
    </HydrateClient>
  );
}
