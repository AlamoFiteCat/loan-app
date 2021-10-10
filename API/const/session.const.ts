import session from 'express-session';
import { v4 as uuidv4 } from "uuid";

export default session({
  secret: "sBrSpntpGjL7NqM",
  resave: true,
  saveUninitialized: true,
  name: "cheesedForSure",
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 5,
  },
  genid: () => {
    return uuidv4();
  },
});
