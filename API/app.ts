import express, { Request, Response } from "express";
import path from "path";
import { cors } from "./const/const.cors";
import session from "./const/session.const";
import { firebaseApp, firebaseDb } from "./const/firebase.const";
import { collection, getDocs } from "firebase/firestore";
import constRouter from "./const/const.router";

const app = express();
const PORT: number = 3000;

app.use(cors);

// Static files
// app.use(express.static(path.join(__dirname, "static")));
// app.get(/^\/(?!api).*/, function (req, res) {
//   res.sendFile(path.join(__dirname, "static", "index.html"));
// });

app.use(session);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get("/api", async (req: Request, res: Response) => {
//   // const dbData = await getFireData();
//   // res.status(200).json(dbData);
//   res.status(200).json({
//     message: "Message from the API!",
//   });
// });

app.use('/api', constRouter);

// const getFireData = async () => {
//   const data = [];
//   const querySnapshot = await getDocs(collection(firebaseDb, "loans"));
//   querySnapshot.forEach((doc) => {
//     data.push(doc.data());
//   });
//   return data;
// };

app.listen(PORT, () => {
  console.log("Server listening at http://localhost:3000");
});
