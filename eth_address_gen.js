import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";
const randomWallet = ethers.Wallet.createRandom();
console.log(`address: ${randomWallet.address}`);
console.log(`privateKey: ${randomWallet.privateKey}`);
console.log(`publicKey: ${randomWallet.publicKey}`);
