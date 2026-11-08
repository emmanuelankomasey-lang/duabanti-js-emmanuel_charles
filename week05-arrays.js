const students = [
    {name: "Alice", score: 92},
    {name: "Bob", score: 85},
    {name: "Charlie", score: 78},
    {name: "David", score: 41},
    {name: "Eve", score: 31},
    {name: "Frank", score: 53},
    {name: "Grace", score: 25},
    {name: "Hannah", score: 34},
]

function getNames(students) {
    return students.map(student => student.name)
}

function getPassing(students) {
    return students.filter(student => student.score >= 50)
}

function getTotal(students) {
    return students.reduce((total, student) => total + student.score, 0)
}

function getTopScorer(students) {
    return students.reduce((topScorer, student) => {
        return (student.score > topScorer.score) ? student : topScorer;
    }, {name: "", score: -Infinity});
}

function rank(students) {
    return students.slice().sort((a, b) => b.score - a.score);
}

console.log(
    `Class summary: ${students.length} students, ${getPassing(students).length} passed, ` +
    `total score ${getTotal(students)}. Top scorer: ${getTopScorer(students).name} ` +
    `(${getTopScorer(students).score}).`
);