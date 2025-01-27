document.addEventListener("DOMContentLoaded", () => {
  const cartItems = [];
  const cartList = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");

  const updateCart = () => {
    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartList.appendChild(li);
      total += item.price;
    });

    totalPriceEl.textContent = `Total: $${total}`;
  };

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
      const product = event.target.closest(".product");
      const id = product.dataset.id;
      const name = product.dataset.name;
      const price = parseInt(product.dataset.price);

      cartItems.push({ id, name, price });
      updateCart();
    });
  });
});
