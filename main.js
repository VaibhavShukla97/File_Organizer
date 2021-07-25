let helpObj =require("./command/help");
let organizeObj =require("./command/organise");
let treeObj =require("./command/tree");


let input = process.argv.slice(2);

let path = input[1];
let  command = input[0];


switch(command){
    case "tree":
        treeObj.treekeypath(path); 
        break;
    case "organize":
        organizeObj.organizekeypath(path);
        break;
    case "help":
        helpObj.helpkeypath();
        break;
    default:
        console.log("Please Enter Correct Command");
        break;
}