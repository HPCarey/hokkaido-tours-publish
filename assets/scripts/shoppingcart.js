document.addEventListener('DOMContentLoaded', function () {
    // Define an array to store items in the shopping cart
    const shoppingCartItems = [];

    // Function to update the shopping cart content
    function updateShoppingCart() {
        const cartBody = document.querySelector('.offcanvas-body');
        // Clear the existing content
        cartBody.innerHTML = '';

        // Calculate the total sum
        let totalSum = 0;

        // Iterate through items and add them to the cart
        shoppingCartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
            cartBody.appendChild(itemElement);

            // Add the price to the total sum
            totalSum += item.price;
            
        });

        // Display the total sum
        const totalSumElement = document.getElementById('sum-prices');
        totalSumElement.textContent = `Total: $${totalSum.toFixed(2)}`;
    }

    // Attach click event listeners to the "Purchase Tour" buttons
    const purchaseButtons = document.querySelectorAll('.btn-purchase-tour');
    purchaseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.card');
            const tourName = card.querySelector('.card-title').textContent;
            const tourPrice = parseFloat(card.querySelector('.priceValue').textContent);

            // Add the item to the shopping cart array
            shoppingCartItems.push({ name: tourName, price: tourPrice });

            // Update the shopping cart content
            updateShoppingCart();
        });
    });
});