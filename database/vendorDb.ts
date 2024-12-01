import Vendor, { IVendor } from "../models/vendor-model";

export const findVendorByEmail = async (
  email: string
): Promise<IVendor | null> => {
  return await Vendor.findOne({ email });
};

export const createVendor = async (
  vendorData: Partial<IVendor>
): Promise<IVendor> => {
  const vendor = new Vendor(vendorData);
  return await vendor.save();
};
