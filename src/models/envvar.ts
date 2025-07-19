import dotenv from "dotenv";

dotenv.config();

interface Connection {
  host: string;
  port: number;
}

export const connection: Connection = {
  host: process.env.HOST || "",
  port: parseInt(process.env.PORT || "8181") || 8181,
};
