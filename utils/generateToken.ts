import jwt from "jsonwebtoken";
import { env_conf } from "../config/env-config";

export const generateToken = (id: string, role: string): string => {
  console.log(env_conf.jwt_secret);

  return jwt.sign({ id, role }, env_conf.jwt_secret as string, {
    expiresIn: env_conf.jwt_expiration,
  });
};
