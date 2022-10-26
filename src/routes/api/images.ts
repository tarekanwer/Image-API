import express from "express";
import Callback from "../../handlers/imgHandler";
const images = express.Router();
images.get("/", Callback);
export default images;
