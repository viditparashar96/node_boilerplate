import User, { IUser } from "../models/user-model";

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email });
};

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  const user = new User(userData);
  return await user.save();
};

export const findUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};
