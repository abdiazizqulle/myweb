import { createVercelHandlers } from "netlify-cms-oauth-provider-node";

const config = {
  origin: process.env.CMS_ORIGIN,
  completeUrl: process.env.CMS_OAUTH_COMPLETE_URL,
  oauthClientID: process.env.CMS_GITHUB_CLIENT_ID,
  oauthClientSecret: process.env.CMS_GITHUB_CLIENT_SECRET
};

const { complete } = createVercelHandlers(config);

export default function handler(req, res) {
  return complete(req, res);
}
