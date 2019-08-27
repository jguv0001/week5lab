const router = require("express").Router();
const Task = require("./class.js");

let db= new Task.List();

router.get("/", function(req, res){
    res.render("index.html");
});

router.get("/addtask", function(req, res){
    res.render("addTask.html");
});

router.post("/newtask", function(req, res){
    let taskItem = new Task.Item(req.body.taskName, req.body.taskDueDate, req.body.taskDescription);
    db.addTask(taskItem);
    res.render("list.html", {
        taskList: db.list
    });
});

router.get("/listtask", function(req, res){
    res.render("list.html", {
        taskList: db.list
    });
});

module.exports = router;