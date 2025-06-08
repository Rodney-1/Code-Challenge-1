//calculateChaiIngredients
function calculateChaiIngredients(servings) {
    const ingredients = {
        water: 200, // in ml
        milk: 100, // in ml
        teaLeaves: 10, // in tablespoons
        sugar: 2, // in teaspoons
    };
}
    //Prompt the user
    let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    if (input <= 0) {
    console.log("Please enter a valid number of servings.");
    }
    // Calculate the ingredients needed for the given number of servings
    console.log(`To make ${3} cups of Chai Bora, you will need:`);
    console.log(`water: ${600} ml`);
    console.log(`milk: ${150} ml`);
    console.log(`tea leaves: ${3} tablespoons`);
    console.log(`sugar: ${6} teaspoons`);
    console.log("Enjoy your Chai Bora!");
