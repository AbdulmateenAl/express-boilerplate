import { config } from "dotenv";

export interface GoogleOAuthConfig {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  scope: string;
  authorization_url: string;
  token_url: string;
  userinfo_url: string;
}

config();

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_REDIRECT_URI) {
  throw new Error("Missing Google OAuth environment variables");
}

export const google: GoogleOAuthConfig = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  redirect_uri: process.env.GOOGLE_REDIRECT_URI,
  scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
  authorization_url: "https://accounts.google.com/o/oauth2/v2/auth",
  token_url: "https://oauth2.googleapis.com/token",
  userinfo_url: "https://www.googleapis.com/oauth2/v2/userinfo",
};