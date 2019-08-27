class tlist{
    constructor(){
        this.list = [];
    }

    addTask(taskItem){
        this.list.push(taskItem);
    }
}




class titem{
    constructor(name, date, description){
        this.name = name;
        this.date = date;
        this.description = description;
    }
}






module.exports = {
    List: tlist,
    Item: titem
};