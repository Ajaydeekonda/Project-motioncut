var cart = {};
        function addToCart(productId) {
            if (cart[productId]) {
                cart[productId]++;
            } else {
                cart[productId] = 1;
            }
            document.getElementById('cart').textContent = JSON.stringify(cart);
        }