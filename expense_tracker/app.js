// Function to add expense
function addExpense() {
  var expenseName = document.getElementById("expenseName").value;
  var expenseAmount = parseFloat(
    document.getElementById("expenseAmount").value
  );

  if (isNaN(expenseAmount) || expenseAmount <= 0) {
    alert("Please enter a valid expense amount.");
    return;
  }

  var expense = {
    name: expenseName,
    amount: expenseAmount,
  };

  // Retrieve existing expenses from local storage
  var expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Add the new expense
  expenses.push(expense);

  // Save the updated expenses to local storage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  // Refresh the expense list
  displayExpenses();
}

// Function to display expenses
function displayExpenses() {
  var expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";

  // Retrieve expenses from local storage
  var expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Display each expense in the list
  expenses.forEach(function (expense) {
    var listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = expense.name + ": Rs. " + expense.amount.toFixed(2);
    expenseList.appendChild(listItem);
  });
}

// Initial display of expenses when the page loads
displayExpenses();
