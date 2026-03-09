import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: {
        id: string;
        name: string;
      };
      groceryId: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: {
      id: string;
      name: string;
    };
    groceryId: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: {
      id: string;
      name: string;
    };
    groceryId: string
  }
}