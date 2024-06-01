export const contractABI = [
  {
    type: "constructor",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    name: "NewBeer",
    inputs: [
      {
        type: "address",
        name: "from",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "timestamp",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "message",
        indexed: false,
        internalType: "string",
      },
      {
        type: "string",
        name: "name",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "buyBeer",
    inputs: [
      {
        type: "string",
        name: "_message",
        internalType: "string",
      },
      {
        type: "string",
        name: "_name",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getAllBeer",
    inputs: [],
    outputs: [
      {
        type: "tuple[]",
        name: "",
        components: [
          {
            type: "address",
            name: "sender",
            internalType: "address",
          },
          {
            type: "string",
            name: "message",
            internalType: "string",
          },
          {
            type: "string",
            name: "name",
            internalType: "string",
          },
          {
            type: "uint256",
            name: "timestamp",
            internalType: "uint256",
          },
        ],
        internalType: "struct MyContract.Beer[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTotalBeer",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address payable",
      },
    ],
    stateMutability: "view",
  },
] as const;
