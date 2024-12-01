import dotenv from "dotenv";
dotenv.config();

export const env_conf = {
  port: process.env.PORT || "",
  db_uri: process.env.MONGO_URI || "",
  node_env: process.env.NODE_ENV || "",
  jwt_secret: process.env.JWT_SECRET || "",
  jwt_expiration: process.env.JWT_EXPIRES || "",
  salt_round: process.env.SALT_ROUND || "",
  smtp_host: process.env.SMTP_HOST || "",
  smtp_port: process.env.SMTP_PORT || "",
  smtp_user: process.env.SMTP_USER || "",
  smtp_pass: process.env.SMTP_PASS || "",
  client_url: process.env.FRONTEND_URL || "",
};
