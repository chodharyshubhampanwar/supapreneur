import { validateToken } from "../utils/tokenValidation.js";
const auth = async (req, res, next) => {
  try {
    const userId = await validateToken(req.headers.authorization);
    req.user = { userId };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

export default auth;

// export const authorizeProfileOwner = async (req, res, next) => {
//   try {
//     const profile = await Profile.findById(req.params.id);
//     if (profile.userId.toString() !== req.user.id) {
//       return res
//         .status(403)
//         .json({ message: "Forbidden: You do not own this profile" });
//     }
//     next();
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Authorization error", error: error.message });
//   }
// };
