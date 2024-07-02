import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3005;

export const mongoDBUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xuuegcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
