import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Rupesh Now Littele Work start",
  });
});

export { registerUser };
