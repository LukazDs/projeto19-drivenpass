import { Credentials, Notes, Users } from "@prisma/client";

export type IUser = Omit<Users, "id">;
export type ICredentials = Omit<Credentials, "id">;
export type ICredentialsBodyReq = Omit<ICredentials, "userId">;
export type ICredentialsFind = Omit<ICredentialsBodyReq, "password">;
export type ICredentialsFindWithUserId = Omit<ICredentials, "password">;

export type INote = Omit<Notes, "id">;
export type INoteBodyReq  = Omit<INote, "userId">;
