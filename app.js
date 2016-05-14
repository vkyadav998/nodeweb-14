/**
 * Created by pc on 14-05-2016.
 */
var express = require('express');
var app=express();

app.get('/',function(req,res){
    res.send("Hellow World");
});

app.get("/a/b/b/b/b/b",function (req,res) {
res.send("hhhhhhiiiiiiiiiii......");
});

app.post("/abcd",function (req,res) {
    res.send("post abcd hhhhhh..");
});

app.get("/abcd",function (req,res) {
    res.send("get abcd hhhhhh..");
});

app.get("/a/b",function (req,res) {
    res.send("iii......");
});
app.listen(3000,function () {
    console.log("server started");
});