const expenses = [
    {id : 1,
        description : "Groceries",
        amount : 500,
        category : "Food",
        date : "2025-06-01"
    },
    {id : 2,
        description : "Transportation",
        amount : 300,
        category : "Travel",
        date : "2025-06-23"
    },
    {id : 3,
        description : "Toiletries",
        amount : 180,
        category : "Personal Care",
        date : "2025-06-10"
    },
    {id : 4,
        description : "Meals",
        amount : 500,
        category : "Food",
        date : "2025-06-01"
    }
]

function addExpense(expenses, expense){
    expenses.push(expense); 
    return expenses;
}

function getTotalExpenses(expenses){
    let total = 0;
    for (let i = 0; i < expenses.length; i++){
        total += expenses[i].amount;
    }
    return total;
}

function getExpenseByCategory(expenses, category){
    let categoryExpenses = [];
    for (let i = 0; i < expenses.length; i++){
        if (expenses[i].category === category){
            categoryExpenses.push(expenses[i]);
        }
    }
    return categoryExpenses;
}

function removeExpense(expenses, expense){
    const index = expenses.indexOf(expense);
    if (index > -1) {
        expenses.splice(index, 1);
    }
}

function filterExpensesByCategory(expenses, category){
    return expenses.filter(expense => expense.category === category);
}

function getAverageExpense(expenses){
    if (expenses.length === 0) return 0;
    const total = getTotalExpenses(expenses);
    return total / expenses.length;
}

console.log("Total expenses:", `GHs ${getTotalExpenses(expenses)}`);
console.log("Food expenses:", getExpenseByCategory(expenses, "Food"));
console.log("Travel expenses:", filterExpensesByCategory(expenses, "Travel"));
console.log("Average expense:", `GHs ${getAverageExpense(expenses)}`);