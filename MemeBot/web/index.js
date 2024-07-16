const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function(req, res){
    res.render("index", {title: "안녕하세요", name: "we"});
});

app.listen(3000, () => {
    console.log("3000포트에서 서버 실행됨");
});