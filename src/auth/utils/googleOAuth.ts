import { config } from "dotenv";

config();
export interface GoogleOAuthConfig {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  scope: string;
  authorization_url: string;
  token_url: string;
  userinfo_url: string;
};

export const buildUrl = (config: GoogleOAuthConfig) => {
	const state: string = process.env.STATE || "some-state";
	const authUrl = new URL(config.authorization_url);

	authUrl.searchParams.append("client_id", config.client_id);
	authUrl.searchParams.append("redirect_uri", config.redirect_uri);
	authUrl.searchParams.append("scope", config.scope);
	authUrl.searchParams.append("response_type", "code");
	authUrl.searchParams.append("state", state);
	authUrl.searchParams.append("access_type", "offline");
	authUrl.searchParams.append("prompt", "consent");

	return authUrl.toString();
};