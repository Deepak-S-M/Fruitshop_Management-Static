
function init(){
    var val1=document.getElementById("con-fruits");
    val1.style.display='block';
    populateViewStocks();
    populateMinimumStocks();
    populateBillStocks();
    populateProductDropdown();    
    populateProductDropdown2();
    populateSellingStocks();
    updateTotalAmount();

    // Update date and time every second
    setInterval(updateDateTime, 1000);
}
    function conFruits()
    {    
        var val1=  document.getElementById("con-fruits");
        var val2a=  document.getElementById("add-table");
        var val3a=  document.getElementById("bill-table");
        var val2b=  document.getElementById("con-min");
        var val3b=  document.getElementById("con-bill"); 
        var val4=  document.getElementById("con-all"); 
        var val5=  document.getElementById("con-report");  
        val2a.style.display='none';    
        val3a.style.display='none';  
        val2b.style.display='none';    
        val3b.style.display='none';  
        val4.style.display='none';  
        val1.style.display='block';
        val5.style.display='none';
    }
    function conAdd()
    {  
        var val1=  document.getElementById("con-fruits");
        var val2a=  document.getElementById("add-table");
        var val3a=  document.getElementById("bill-table");
        var val2b=  document.getElementById("con-min");
        var val3b=  document.getElementById("con-bill"); 
        var val4=  document.getElementById("con-all"); 
        var val5=  document.getElementById("con-report");  
        val1.style.display='none';    
        val3a.style.display='none'; 
        val2b.style.display='block';    
        val3b.style.display='none';  
        val4.style.display='none';     
        val2a.style.display='block';
        val5.style.display='none';
        
    }
    function conBill()
    {   
        var val1=  document.getElementById("con-fruits");
        var val2a=  document.getElementById("add-table");
        var val3a=  document.getElementById("bill-table");
        var val2b=  document.getElementById("con-min");
        var val3b=  document.getElementById("con-bill"); 
        var val4=  document.getElementById("con-all"); 
        var val5=  document.getElementById("con-report");  
        val2a.style.display='none';    
        val1.style.display='none';
        val2b.style.display='none';
        val4.style.display='none';      
        val3b.style.display='block';      
        val3a.style.display='block';
        val5.style.display='none';
    }
    function conStack()
    {   
        var val1=  document.getElementById("con-fruits");
        var val2a=  document.getElementById("add-table");
        var val3a=  document.getElementById("bill-table");
        var val2b=  document.getElementById("con-min");
        var val3b=  document.getElementById("con-bill"); 
        var val4=  document.getElementById("con-all"); 
        var val5=  document.getElementById("con-report");  
        val2a.style.display='none';    
        val1.style.display='none';
        val2b.style.display='none';
        val4.style.display='block';      
        val3b.style.display='none';      
        val3a.style.display='none';
        val5.style.display='none';
    }
    function conReport(){
        var val1=  document.getElementById("con-fruits");
        var val2a=  document.getElementById("add-table");
        var val3a=  document.getElementById("bill-table");
        var val2b=  document.getElementById("con-min");
        var val3b=  document.getElementById("con-bill"); 
        var val4=  document.getElementById("con-all");
        var val5=  document.getElementById("con-report");  
        val2a.style.display='none';    
        val1.style.display='none';
        val2b.style.display='none';
        val4.style.display='none';      
        val3b.style.display='none';      
        val3a.style.display='none';
        val5.style.display='block';
    }

// Function to populate the table body with fruits data
async function populateViewStocks() {
    const tableBody = document.getElementById('view-stocks');

    // Clear existing table body content
    tableBody.innerHTML = '';

    const response = await fetch('http://localhost:8080/fruits');
    const fruits = await response.json();

    // Loop through the fruits data and generate HTML for each row
    fruits.forEach((fruit, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${fruit.id}</td>
                <td>${fruit.name}</td>
                <td>${fruit.quantity}</td>
                <td>${fruit.buying_price}</td>
                <td>${fruit.selling_price}</td>
            </tr>
        `;
        // Append the generated row HTML to the table body
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

// Function to populate the table body with fruits data
async function populateMinimumStocks() {
    const tableBody = document.getElementById('minimum-stocks');

    // Clear existing table body content
    tableBody.innerHTML = '';

    const response = await fetch('http://localhost:8080/fruits/minimum-quantity');
    const fruits = await response.json();

    // Loop through the fruits data and generate HTML for each row
    fruits.forEach((fruit, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${fruit.id}</td>
                <td>${fruit.name}</td>
                <td>${fruit.quantity}</td>
            </tr>
        `;
        // Append the generated row HTML to the table body
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

// Function to populate the table body with fruits data
async function populateBillStocks() {
    const tableBody = document.getElementById('bill-stocks');

    // Clear existing table body content
    tableBody.innerHTML = '';

    const response = await fetch('http://localhost:8080/fruits/bill-stocks');
    const fruits = await response.json();

    // Loop through the fruits data and generate HTML for each row
    fruits.forEach((fruit, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${fruit.name}</td>
                <td>${fruit.quantity}</td>
                <td>${fruit.price}</td>                
                <td>${fruit.selling_price}</td>
            </tr>
        `;
        // Append the generated row HTML to the table body
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

function populateProductDropdown() {
    // Fetch dropdown options from API endpoint
    fetch('http://localhost:8080/fruits/names')
        .then(response => response.json())
        .then(data => {
            const dropdown = document.getElementById('product-dropdown');
            dropdown.innerHTML = ''; // Clear default option
            data.forEach(productName => {
                const option = document.createElement('option');
                option.textContent = productName; // Set product name as option text
                dropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching product options:', error);
        });
}

function populateProductDropdown2() {
    // Fetch dropdown options from API endpoint
    fetch('http://localhost:8080/fruits/names')
        .then(response => response.json())
        .then(data => {
            const dropdown = document.getElementById('product-dropdown2');
            dropdown.innerHTML = ''; // Clear default option
            data.forEach(productName => {
                const option = document.createElement('option');
                option.textContent = productName; // Set product name as option text
                dropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching product options:', error);
        });
}

function addStocks() {
    // Collect input values
    const name = document.getElementById('product-dropdown').value;
    const quantity = document.getElementById('quantity-input').value;
    const buyingPrice = document.getElementById('buying-price-input').value;
    const sellingPrice = document.getElementById('selling-price-input').value;

    // Send POST request with collected data
    fetch('http://localhost:8080/fruits/update-stock', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            quantity: quantity,
            buying_price: buyingPrice,
            selling_price: sellingPrice
        })
    })
    .then(response => {
        if (response.ok) {
            // Call these functions after successful addition of product
            populateMinimumStocks();
            populateViewStocks();
        } else {
            alert('Failed to add product. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error adding product:', error);
        alert('Error adding product. Please try again.');
    });
}


async function addBillStock() {
    try {
        // Get selected product name and quantity
        const productName = document.getElementById('product-dropdown2').value;
        const quantity = document.getElementById('quantity-input2').value;

        // Validate inputs
        if (!productName) {
            throw new Error('Please select a product.');
        }
        if (!quantity || isNaN(quantity) || parseInt(quantity) <= 0) {
            throw new Error('Please enter a valid quantity.');
        }

        // Send POST request to backend API
        const response = await fetch('http://localhost:8080/fruits/bill-stock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: productName,
                quantity: quantity,
            })
        });

        if (response.ok) {
            // Populate bill stocks after successfully adding a new stock
            populateBillStocks();
            populateMinimumStocks();
            populateViewStocks();
            updateTotalAmount();
            populateSellingStocks();
        } else {
            throw new Error('Failed to add product. Please try again.');
        }
    } catch (error) {
        console.error('Error adding product:', error);
        alert('Error adding product. Please try again.');
    }
}

function updateDateTime() {
    const currentDateTimeElement = document.getElementById('current-date-time');

    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');  
    
    const currentDateTime = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${hours}:${minutes}`;
    currentDateTimeElement.textContent = currentDateTime;
}

async function updateTotalAmount() {
    try {
        const totalAmountElement = document.getElementById('total-amount');

        // Fetch total amount from the server
        const response = await fetch('http://localhost:8080/fruits/bill-amount');
        if (!response.ok) {
            throw new Error('Failed to fetch total amount');
        }
        
        const data = await response.json();
        const totalAmount = parseFloat(data.totalAmount);

        // Update the total amount in the HTML
        if (!isNaN(totalAmount)) {
            totalAmountElement.textContent = totalAmount.toFixed(2); // Format to two decimal places
        } else {
            throw new Error('Invalid total amount received from server');
        }
    } catch (error) {
        console.error('Error updating total amount:', error);
        // Handle error gracefully, such as displaying an error message to the user
    }
}

async function deleteAllBillStocks() {
    try {
        // Send POST request to delete all bill stocks
        const response = await fetch('http://localhost:8080/fruits/bill-stocks/delete-all', {
            method: 'POST'
        });

        if (response.ok) {
            // Populate bill stocks after successfully deleting all stocks            
            await updateTotalAmount();
            populateBillStocks();
            return { message: 'All bill stocks deleted successfully' };
        } else {
            throw new Error('Failed to delete all bill stocks');
        }
    } catch (error) {
        console.error('Error deleting all bill stocks:', error);
        throw error;
    }
}

async function populateSellingStocks() {
    const tableBody = document.getElementById('selling-stocks');

    // Clear existing table body content
    tableBody.innerHTML = '';

    try {
        // Fetch selling stocks data from the server
        const response = await fetch('http://localhost:8080/fruits/selling-stocks');
        const sellingStocks = await response.json();

        // Loop through the selling stocks data and generate HTML for each row
        sellingStocks.forEach((stock, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${stock.id}</td>
                    <td>${stock.name}</td>
                    <td>${stock.quantity}</td>
                    <td>${stock.buying_price}</td>
                    <td>${stock.selling_price}</td>                    
                    <td>${stock.profit}</td>
                </tr>
            `;
            // Append the generated row HTML to the table body
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    } catch (error) {
        console.error('Error populating selling stocks:', error);
        // Handle error gracefully, such as displaying an error message to the user
    }
}

function printBill() {
    deleteAllBillStocks();
    // Open a new window
    const printWindow = window.open('', '_blank');

    // Build the HTML content to be printed
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Print Bill</title>
            <style>
                /* Define your CSS styles here */
                body {
                    font-family: 'open sans', sans-serif; /* Set default font family */
                }
                .con-bill {
                    margin: 0 auto; /* Center the content horizontally */
                    width: 80%; /* Adjust the width of the content */
                }
                .table-box {
                    margin: 0 auto; /* Center the table horizontally */
                    width: 100%; /* Ensure the table occupies the full width */
                }
                .table-top table,
                .table-bottom table {
                    width: 100%; /* Ensure the table occupies the full width */
                    background-color: white;
                    text-align: center;
                    border-collapse: collapse;
                    border-spacing: 0;
                    margin-bottom: 20px; /* Add space between tables */
                }
                .table-top th,
                .table-top td {
                    font-size: 13px;
                    text-align: left;
                    padding: 11px 8px; /* Adjust cell padding */
                }
                .table-bottom th,
                .table-bottom td {
                    font-size: 13px;
                    padding: 11px 8px; /* Adjust cell padding */
                }
                .table-bottom th {
                    background-color: blue;
                    color: white;
                    text-transform: uppercase;
                    font-size: 14px;
                }
                .table-bottom tr:nth-child(odd) {
                    background-color: #eeeeee;
                    color: black;
                }
                .table-bottom tr:nth-child(even) {
                    color: rgb(0, 0, 212);
                }
                .click{
                    display:none;
                }
                .stack-button{
                    display:none;
                }
            </style>
        </head>
        <body>
            <!-- Insert the content of the bill table here -->
            ${document.getElementById('con-bill').innerHTML}
        </body>
        </html>
    `;

    // // Write the HTML content to the new window
    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();

    // Wait for the content to be fully loaded before printing
    printWindow.onload = function() {
        // Print the window content
        printWindow.print();
    };
}

function validateLogin() {
    // Get the username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username is "admin" and the password is "123"
    if (username === "admin" && password === "123") {
        // If the username and password are correct, allow form submission
        return true;
    } else {
        // If the username or password is incorrect, display an error message
        alert("Incorrect username or password.");
        return false;
    }
}