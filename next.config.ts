import type { NextConfig } from "next";
import { createCivicAuthPlugin } from "@civic/auth-web3/nextjs"
const nextConfig: NextConfig = {
  /* config options here */
};
const withCivicAuth = createCivicAuthPlugin({
  clientId: "fc7eac51-4d5a-488f-a193-1e38635268f7"
});

export default withCivicAuth(nextConfig)
