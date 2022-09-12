import { Cards, Credentials, Notes, Users, Wifis } from "@prisma/client";

export type IUser = Omit<Users, "id">;
export type ICredentials = Omit<Credentials, "id">;
export type ICredentialsBodyReq = Omit<ICredentials, "userId">;
export type ICredentialsFind = Omit<ICredentialsBodyReq, "password">;
export type ICredentialsFindWithUserId = Omit<ICredentials, "password">;

export type INote = Omit<Notes, "id">;
export type INoteBodyReq = Omit<INote, "userId">;

export type ICard = Omit<Cards, "id">;
export type ICardBodyReq = Omit<ICard, "userId">;

export type IWifi = Omit<Wifis, "id">;
export type IWifiBodyReq = Omit<IWifi, "userId">;
