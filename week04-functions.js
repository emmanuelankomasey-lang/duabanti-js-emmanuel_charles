const scores = [85, 92, 78, 88, 95];
const amount = 4562;

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    let total = 0;
    for (const n of numbers){
        total += n;
        }
    return total / numbers.length;
}

function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 50) return "D";
    return "F";
}

function formatCedis(amount) {
    return `GHS ${amount.toFixed(2)}`;
}

function isValidScore(score){
    return typeof score === "number" && score >= 0 && score <= 100;
}

function calculateFinalGrade(scores) {
    const validScores = scores.filter(isValidScore);
    if (validScores.length === 0) return "No valid scores provided";
    const averageScore = calculateAverage(validScores);
    return getGrade(averageScore);
}

console.log(`Average Score: ${calculateAverage(scores)}`);
console.log(`Final Grade: ${calculateFinalGrade(scores)}`);
console.log(`Formatted Amount: ${formatCedis(amount)}`);