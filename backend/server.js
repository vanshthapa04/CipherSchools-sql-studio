import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
import express from "express";
import cors from "cors";




import assignmentRoutes from "./routes/assignmentRoute.js";
import queryRoutes from "./routes/queryRoute.js";
import hintRoutes from "./routes/hintRoute.js";



console.log("ENV TEST:", process.env.POSTGRES_URL);
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/assignments", assignmentRoutes);
app.use("/api/query", queryRoutes);
app.use("/api/hint", hintRoutes);

app.get("/test", (req,res) => {
    res.send("API working");
});
const PORT = process.env.PORT || 9000;

app.listen(process.env.PORT , () => {
    console.log("Server running on port", process.env.PORT);
});


