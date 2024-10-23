$(document).ready(function () {
      $(document).ready(function () {
        const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
        const cartCount = document.querySelector('.cart-count');

        // Define the product details
        const product = {
          id: 1,
          name: 'Menu Item Name',
          price: 10.00,
          quantity: 1,
        };

        // Add a click event listener to each Add to Cart button
        addToCartBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            // Add the product to the cart
            addToCart(product);

            // Update the cart count
            updateCartCount();
          });
        });

        // Function to add a product to the cart
        function addToCart(product) {
          // Implement the logic to add the product to the cart
          // You can use a JavaScript array or an external library to manage the cart

          // Example: Add the product to an array
          const cart = [];
          cart.push(product);
          

          // Update the cart count
          updateCartCount();
          
        }
      
        // Function to update the cart count
        function updateCartCount() {
          // Calculate the total number of items in the cart
          const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

          // Update the cart count element
          cartCount.textContent = totalItems;
        }
        
      // Add smooth scrolling to all links
      $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            800,
            function () {
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            }
          );
        } // End if
      });
    });
    });