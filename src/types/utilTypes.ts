import { Credentials, Users } from "@prisma/client";

export type IUser = Omit<Users, "id">;
export type ICredentials = Omit<Credentials, "id">;
