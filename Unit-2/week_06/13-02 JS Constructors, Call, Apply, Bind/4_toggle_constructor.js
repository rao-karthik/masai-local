function Task(title) {
    this.title = title;
    this.status = false;
    this.created_date = new Date()

    // this.toggleTask = function(){
    //     this.status = !this.status
    // }
    // this.toggleTask()
}

this.toggleTask = function(){
    this.status = !this.status
}

var task = new Task("buy milk");
var task1 = new Task("buy grocery");
var task2 = new Task("buy clothes");

this.toggleTask.call(task, true);
this.toggleTask.apply(task1, [true]);
this.toggleTask.call(task2, true);

console.log(task);
console.log(task1);
console.log(task2);