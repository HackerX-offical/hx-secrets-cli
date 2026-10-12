import { detector as aws_access_key } from './providers/aws-access-key.js';
import { detector as aws_secret_key } from './providers/aws-secret-key.js';
import { detector as github_pat } from './providers/github-pat.js';
import { detector as github_fine } from './providers/github-fine.js';
import { detector as github_oauth } from './providers/github-oauth.js';
import { detector as gitlab_pat } from './providers/gitlab-pat.js';
import { detector as slack_bot } from './providers/slack-bot.js';
import { detector as slack_user } from './providers/slack-user.js';
import { detector as stripe_live } from './providers/stripe-live.js';
import { detector as stripe_test } from './providers/stripe-test.js';
import { detector as openai } from './providers/openai.js';
import { detector as anthropic } from './providers/anthropic.js';
import { detector as sendgrid } from './providers/sendgrid.js';
import { detector as twilio } from './providers/twilio.js';
import { detector as mailgun } from './providers/mailgun.js';
import { detector as heroku } from './providers/heroku.js';
import { detector as npm_token } from './providers/npm-token.js';
import { detector as pypi_token } from './providers/pypi-token.js';
import { detector as docker_hub } from './providers/docker-hub.js';
import { detector as azure_storage } from './providers/azure-storage.js';
import { detector as gcp_api } from './providers/gcp-api.js';
import { detector as firebase } from './providers/firebase.js';
import { detector as private_rsa } from './providers/private-rsa.js';
import { detector as private_openssh } from './providers/private-openssh.js';
import { detector as jwt_embedded } from './providers/jwt-embedded.js';
import { detector as postgres_uri } from './providers/postgres-uri.js';
import { detector as mysql_uri } from './providers/mysql-uri.js';
import { detector as mongodb_uri } from './providers/mongodb-uri.js';
import { detector as redis_uri } from './providers/redis-uri.js';
import { detector as generic_api_key } from './providers/generic-api-key.js';
import { detector as discord_bot } from './providers/discord-bot.js';
import { detector as telegram_bot } from './providers/telegram-bot.js';
import { detector as shopify } from './providers/shopify.js';
import { detector as square } from './providers/square.js';
import { detector as paypal } from './providers/paypal.js';
import { detector as mapbox } from './providers/mapbox.js';
import { detector as algolia } from './providers/algolia.js';
import { detector as cloudflare } from './providers/cloudflare.js';
import { detector as digitalocean } from './providers/digitalocean.js';
import { detector as private_key_pkcs8 } from './providers/private-key-pkcs8.js';

import type { SecretDetector } from './types.js';

export const DETECTORS: SecretDetector[] = [
  aws_access_key,
  aws_secret_key,
  github_pat,
  github_fine,
  github_oauth,
  gitlab_pat,
  slack_bot,
  slack_user,
  stripe_live,
  stripe_test,
  openai,
  anthropic,
  sendgrid,
  twilio,
  mailgun,
  heroku,
  npm_token,
  pypi_token,
  docker_hub,
  azure_storage,
  gcp_api,
  firebase,
  private_rsa,
  private_openssh,
  jwt_embedded,
  postgres_uri,
  mysql_uri,
  mongodb_uri,
  redis_uri,
  generic_api_key,
  discord_bot,
  telegram_bot,
  shopify,
  square,
  paypal,
  mapbox,
  algolia,
  cloudflare,
  digitalocean,
  private_key_pkcs8,
];
