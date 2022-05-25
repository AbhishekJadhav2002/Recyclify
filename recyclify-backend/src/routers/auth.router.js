const authRouter = require("express").Router();
const {
  register,
  login,
  getProfile,
  editProfile,
} = require("../controller/auth");
const { checkToken } = require("../middlewares/JWT");

authRouter.post("/signup", register);
authRouter.post("/login", login);
authRouter.get("/profile", getProfile);
authRouter.post("/editprofile", editProfile);
module.exports = authRouter;

// port = "4000";
// mongoURI =
//   "mongodb+srv://atharva:atharva@pbl-22-database.zgvje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// SaltRounds = 10;
// Secret = "231313131313212jskfjlskjf";
