// import admin from "../config/firebaseAdmin.js";

// const auth = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }
//   const token = authHeader.split(" ")[1];
//   try {
//     const decodedToken = await admin.auth().verifyIdToken(token);
//     req.user = { userId: decodedToken.uid };

//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default auth;

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
