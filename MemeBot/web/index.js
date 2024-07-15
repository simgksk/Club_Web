const express = require("express");
const app = express();

app.get("/buy/:market/:item/:count", function(req, res){
    res.send(`${req.params.market}에서 ${req.params.item}을 ${req.params.count}개 살거임`);
});

app.listen(3000, () => {
    console.log("3000포트에서 서버 실행됨");
});