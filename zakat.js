import inquirer from "inquirer";
let Zakat = 2.5;
let goldValueInTola = 234800;
let goldWeightInTolaReq = 7.5;
const answer = await inquirer.prompt([
    {
        name: "goldWeight",
        message: "enter gold weight",
        type: "number"
    }
]);
let goldWeight = answer.goldWeight;
if (goldWeight >= goldWeightInTolaReq) {
    let calculatedZakat = (goldWeight * goldValueInTola / 100);
    console.log(`the calculated value of gold weighting
    ${goldWeight} tola is ${calculatedZakat}`);
}
else {
    console.log("Zakat not applicable");
}
