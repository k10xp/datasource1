import dotenv from "dotenv";
import { Connection } from "../models/envvar";

dotenv.config();

export const connection: Connection = {
  host: process.env.HOST || "localhost",
  port: parseInt(process.env.PORT || "8181") || 8181,
};
