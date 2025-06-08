//Mobile transaction fee estimator
function calculateFee(amount) {
const input = prompt("Unatuma Ngaapi? (KES):");
const amountToSend = Number(input);
// Validate input
if (isNaN(amountToSend) || amountToSend <= 0) {
    console.error("Please enter a valid number.");
    return;
}
if (amountToSend <=0) {
    console.error("Input should be more than 0");
    return;
}
