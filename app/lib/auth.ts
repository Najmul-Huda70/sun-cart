import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(`${process.env.AUTH_DB_URI}`);
const db = client.db("jackfruit-db");
// Option 1
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
// Option 2
// import dns from "node:dns/promises";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);
// Option 3
// import dns from "dns";
// dns.setDefaultResultOrder("ipv4first");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
});
