import { auth } from "@clerk/nextjs/server";

export { auth };

// Get the current user ID (throws if not authenticated)
export const getUserId = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  return userId;
};

// Get the current user ID (returns null if not authenticated)
export const getUserIdOptional = async () => {
  const { userId } = await auth();
  return userId;
};

// Get the full user object
export const getUser = async () => {
  const { userId } = await auth();

  if (!userId) return null;

  // You can fetch additional user data from your database here
  return {
    userId,
    // Add other user properties as needed
  };
};
