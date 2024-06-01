import { ConnectEmbed } from "thirdweb/react";
import { BuyMeABeer } from "@/app/components/BuyMeABeer";
import { chain } from "@/app/chain";
import { client } from "@/app/client";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />
        <div className="flex justify-center mb-20">
          <ConnectEmbed client={client} chain={chain} />
        </div>
        <BuyMeABeer />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        Buy me
        <span className="text-zinc-300 inline-block mx-1"> a </span>
        <span className="inline-block -skew-x-6 text-blue-500"> BEER </span>
      </h1>

      <p className="text-zinc-300 text-base">
        The site for donate beers to your dev
      </p>
    </header>
  );
}
