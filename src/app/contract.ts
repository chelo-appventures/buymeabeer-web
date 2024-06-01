import { getContract } from "thirdweb";
import { client } from "@/app/client";
import { chain } from "@/app/chain";
import { contractABI } from "./contractABI";

const contractAddress = "0x4c6Ff2A5F38D6727918387a84AbD2E1D4444571e";

export const contract = getContract({
  client,
  chain,
  address: contractAddress,
  abi: contractABI,
});

/*
  const { data: totalBeer, isLoading: isLoadingTotalBeer } = useReadContract({
    contract,
    method: "getTotalBeer",
  });
  const { data: allBeer, isLoading: isLoadingAllBeer } = useReadContract({
    contract,
    method: "getAllBeer",
  });

*/
