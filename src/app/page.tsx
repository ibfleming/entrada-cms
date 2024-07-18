//import Link from "next/link";

//import { LatestPost } from "~/app/_components/post";
//import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

import { db } from "~/server/db/index";

export default async function Home() {
  //const hello = await api.post.hello({ text: "from tRPC" });
  //const session = await getServerAuthSession();
  //void api.post.getLatest.prefetch();

  // Example of fetching data from the database
  const result = db.query.profile.findMany();

  return (
    <HydrateClient>
      <main>
        {(await result).map((item, index) => (
          <div key={index}>{item.firstName}</div>
        ))}
      </main>
    </HydrateClient>
  );
}
