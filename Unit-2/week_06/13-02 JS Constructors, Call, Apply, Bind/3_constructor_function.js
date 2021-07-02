function Task(title, status) {
    this.title = title;
    this.status = false;
    this.created_date = new Date()
}
var task = new Task("buy milk");
var task1 = new Task("buy grocery");
var task2 = new Task("buy clothes");

console.log(task);
console.log(task1);
console.log(task2);