let todo=[];
let req=prompt("Please enter your request");
while(true){


if(req=="list"){
    console.log("----------------------\n");
    for(let i=0;i<todo.length;i++){
        console.log(i,todo[i]);
    }
    console.log("----------------------\n");
}
else if(req=="add"){
    let new_task=prompt("Enter your task");
    todo.push(new_task);
    console.log("Task Added");
}
else if(req=="delete"){
    let delete_task=prompt("Enter your task index");
    todo.splice(delete_task,1);
    console.log("Task Deleted");
}

else if(req=="quit"){
    console.log("Quitting Todo");
    break;
}
else{
    console.log("Invalid Request");
}
req=prompt("Please enter your request");
}
