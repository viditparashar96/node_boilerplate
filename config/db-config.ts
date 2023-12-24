import mongoose, { ConnectOptions } from "mongoose";
import { env_conf } from "./env-config";

export const connect_db = async () => {
  const db_options: ConnectOptions = {};
  try {
    const conn = await mongoose.connect(env_conf.db_uri, db_options);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(`Error: ${error.msg}`);
    process.exit();
  }
};
