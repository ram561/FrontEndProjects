function addExpense() {
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;

    if (description && amount) {
        const tableBody = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
        const newRow = tableBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        
        cell1.textContent = description;
        cell2.textContent = '$'+parseFloat(amount).toFixed(2);
        
        document.getElementById('description').value = '';
        document.getElementById('amount').value = ''; 
    } else {
        alert("Please fill in all fields");
    }
}
