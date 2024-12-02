let orders = [
    { customerName: "John Doe", orders: "Product A, Product B", date: "2023-05-01", totalPrice: 150.00 },
    { customerName: "Jane Smith", orders: "Product C", date: "2023-05-02", totalPrice: 75.50 },
    { customerName: "Bob Johnson", orders: "Product A, Product D", date: "2023-05-03", totalPrice: 200.00 },
    { customerName: "Alice Brown", orders: "Product B, Product C", date: "2023-05-04", totalPrice: 125.75 },
];

function populateTable(data) {
    const tableBody = document.getElementById('orderTableBody');
    tableBody.innerHTML = '';

    data.forEach(order => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${order.customerName}</td>
            <td>${order.orders}</td>
            <td>${order.date}</td>
            <td>$${order.totalPrice.toFixed(2)}</td>
        `;
    });
}

function applyFilters() {
    const customerFilter = document.getElementById('customerFilter').value.toLowerCase();
    const dateFilter = document.getElementById('dateFilter').value;

    const filteredOrders = orders.filter(order => {
        const customerMatch = order.customerName.toLowerCase().includes(customerFilter);
        const dateMatch = !dateFilter || order.date === dateFilter;
        return customerMatch && dateMatch;
    });

    populateTable(filteredOrders);
}

document.getElementById('applyFilter').addEventListener('click', applyFilters);
document.getElementById('resetFilter').addEventListener('click', () => {
    document.getElementById('customerFilter').value = '';
    document.getElementById('dateFilter').value = '';
    populateTable(orders);
});

populateTable(orders);