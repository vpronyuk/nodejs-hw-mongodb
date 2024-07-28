import { User } from '../db/models/users.js';

export const registerUser = async (payload) => {
  return await User.create(payload);
};
