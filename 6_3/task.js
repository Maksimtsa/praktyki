function createTask(title, completed=false){
    return{
        id: Math.random(),
        title,
        completed,
        createdAt: new Date(),
        toggle(){
            this.completed = !this.completed
        }
    }
}



const task = createTask("Learn JS");
task.toggle();
console.log(task.completed);
