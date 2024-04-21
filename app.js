#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the opertors  to perfom action ",
        type: "list",
        name: "operater",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.operater === "addition") {
    console.log(answer.firstnumber + answer.secondNumber);
}
else if (answer.operater === "subtraction") {
    console.log(answer.firstnumber - answer.secondNumber);
}
else if (answer.operater === "multiplication") {
    console.log(answer.firstnumber * answer.secondNumber);
}
else if (answer.operater === "division") {
    console.log(answer.firstnumber / answer.secondNumber);
}
else {
    console.log("please select correct operater ");
}
;
console.log("THE END GOOD BYE");
