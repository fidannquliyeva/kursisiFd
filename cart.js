const cartItemsContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartUI() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Səbət boşdur.</p>";
    totalPriceEl.textContent = "Ümumi məbləğ: 0 ₼";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="80">
      <div>
        <h4>${item.name}</h4>
        <p>Qiymət: ${item.price} ₼</p>
        <div style="display: flex; align-items: center; gap: 10px; margin: 5px 0;">
          <button onclick="decreaseQuantity(${index})">−</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQuantity(${index})">+</button>
        </div>
        <p>Cəmi: ${item.price * item.quantity} ₼</p>
        <button onclick="removeItem(${index})">Sil</button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
    total += item.price * item.quantity;
  });

  totalPriceEl.textContent = `Ümumi məbləğ: ${total} ₼`;
}

function increaseQuantity(index) {
  cart[index].quantity += 1;
  updateCartStorage();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1); // Miqdar 1 idisə və azaldıldısa sil
  }
  updateCartStorage();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCartStorage();
}

function updateCartStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("cartCount", getTotalCount(cart));
  updateCartUI();
}

function getTotalCount(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function clearCart() {
  if (confirm("Səbəti tamamilə təmizləmək istəyirsiniz?")) {
    cart = [];
    localStorage.removeItem("cart");
    localStorage.setItem("cartCount", 0);
    updateCartUI();
  }
}

// İlk yüklemede səbət UI-ni yenilə
updateCartUI();
