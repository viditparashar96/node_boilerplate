import { IUser } from "../models/User";
import { IVendor } from "../models/Vendor";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: "user" | "vendor";
        data: IUser | IVendor;
      };
    }
  }
}
