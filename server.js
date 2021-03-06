"use strict";

import express from "express";
import path from "path";
import open from "open";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(port, err => {
	if (err) {
	console.log(err);
	} else {
		open(`http://localhost:${port}`)
	}
});