import inquirer from "inquirer";

let todoList = [];
let conditions = true;
console.log("\n\tWelcome to CodewithAsma - todo-List Application\n");
 while(conditions){
   let addTask = await inquirer.prompt([
     {
         name: "task",
         type: "input",
         message: "Enter your next task:"
     }
   ]);
   todoList.push(addTask.task);
 console.log(`${addTask.task} task is added in todo list successfully`);
  let addmoreTask = await inquirer.prompt([
    {
        name: "addmore",
        type: "confirm",
        message: "Do you want to add more task?",
        default: "false"
    }
  ]);

  conditions = addmoreTask.addmore
}
console.log("Your updated Todo-list:" , todoList);