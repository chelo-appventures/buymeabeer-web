"use client";
import {
  useActiveAccount,
  ConnectButton,
  TransactionButton,
  useContractEvents,
  useReadContract,
} from "thirdweb/react";
import { prepareContractCall, toWei } from "thirdweb";
import { useState } from "react";
import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { contract } from "@/app/contract";

export const BuyMeABeer = () => {
  const account = useActiveAccount();
  const [tipAmount, setTipAmount] = useState(0.01);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const { data: totalBeer, refetch: refetchTotalCoffees } = useReadContract({
    contract: contract,
    method: "getTotalBeer",
  });
  const { data: contractEvents, refetch: refetchContractEvents } =
    useContractEvents({
      contract: contract,
    });

  const truncateWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  const convertDate = (timestamp: bigint) => {
    const timestampNumber = Number(timestamp);
    return new Date(timestampNumber * 1000).toLocaleString();
  };
  if (account) {
    return (
      <div>
        <div className="">
          <ConnectButton client={client} chain={chain} />
        </div>
        <div className="flex flex-col p-2">
          <label className="text-lg"> Tip Amount </label>
          <input
            className="bg-black text-white border rounded-lg p-2"
            type="number"
            value={tipAmount}
            onChange={(e) => setTipAmount(Number(e.target.value))}
            step={0.01}
          />
        </div>
        <div className="flex flex-col p-2">
          <label className="text-lg"> Your Name </label>
          <input
            className="bg-black text-white border rounded-lg p-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2">
          <label className="text-lg"> Message </label>
          <input
            className="bg-black text-white border rounded-lg p-2"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          {message.length > 0 && tipAmount > 0 && (
            <TransactionButton
              transaction={() =>
                prepareContractCall({
                  contract: contract,
                  method: "buyBeer",
                  params: [message, name],
                  value: BigInt(toWei(tipAmount.toString())),
                })
              }
              onTransactionConfirmed={() => {
                alert("Thank you for the coffee!");
                setTipAmount(0);
                setName("");
                setMessage("");
                refetchTotalCoffees();
                refetchContractEvents();
              }}
            >
              Buy Me a Beer
            </TransactionButton>
          )}
        </div>

        <div>
          <h3 className="mb-3">Total Coffees: {totalBeer?.toString()}</h3>
          <p className="text-xs"> Recent Beer:</p>
          {contractEvents &&
            contractEvents.length > 0 &&
            [...contractEvents].reverse().map((event, index) => (
              <div
                key={index}
                className="flex flex-col p-2 my-1 mx-0 bg-gray-800 rounded-sm"
              >
                <div className="flex flex-row justify-between">
                  <p className="text-sm text-white mb-1">
                    {/* @ts-ignore */}
                    {event.args.sender}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#888",
                    }}
                  >
                    {/* @ts-ignore */}
                    {convertDate(event.args.timestamp)}
                  </p>
                </div>
                <p
                  style={{
                    color: "#888",
                  }}
                >
                  {/* @ts-ignore */}
                  {event.args.message}
                </p>
              </div>
            ))}
        </div>
      </div>
    );
  }
};
