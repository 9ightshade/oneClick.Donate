import { userHasWallet } from "@civic/auth-web3";
import { useUser } from "@civic/auth-web3/react";
export const useAfterLogin = () => {
  const userContext = useUser();

  const afterLogin = async () => {
    if (userContext.user && !userHasWallet(userContext)) {
      await userContext.createWallet();
      console.log("Wallet created successfully");
    } else {
      console.log("User already has a wallet");
    }
  };

  return { afterLogin };
};
