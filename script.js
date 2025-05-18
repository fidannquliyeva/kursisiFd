// Məhsullar siyahısı
const products = [
  {
    id: 1,
    name: "Qadın Paltarı",
    category: "qadin",
    price: 79,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 2,
    name: "Kişi Köynəyi",
    category: "kisi",
    price: 45,
    image: "https://assets.adidas.com/images/w_940,f_auto,q_auto/ae3dbafa387a4e768103ae6001235cd9_9366/HD3548_41_detail.jpg"
  },
  {
    id: 3,
    name: "Uşaq Gödəkçəsi",
    category: "usaq",
    price: 59,
    image: "https://i5.walmartimages.com/seo/Eashery-Boys-Winter-Jacket-Baby-and-Toddler-Boys-Zip-Up-Hoodies-Long-Sleeve-Cotton-Pullover-Toddler-Boy-Jackets-Grey-2-3-Years_043b2376-987a-4e5d-a89d-e3aac9c6420b.ae4d33e91398cd49e5bebc861c5381cf.jpeg"
  },
  {
    id: 4,
    name: "Aksesuar Dəsti",
    category: "aksesuar",
    price: 29,
    image: "https://ae01.alicdn.com/kf/Se05521739da44ff284a6c8c45742a887H/Fosil-jrhigh-saat-kay-aksesuarlar-i-in-hakiki-deri-Vintage-tarz-kay-y-ksek-miktar-paslanmaz.jpg"
  },
  {
    id: 5,
    name: "Usaq Ayaqqabısi",
    category: "usaq",
    price: 89,
    image: "https://i5.walmartimages.com/asr/72af5b1e-e412-4553-99bb-73a261f075cd.2373362c05275fc06304aff44b49e8a6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF://images.unsplash.com/photo-1600185364704-e1c3a55a9a1a?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 6,
    name: "Ayaqqabı (Kişi)",
    category: "kisi",
    price: 95,
    image: "https://ae01.alicdn.com/kf/Hfa077f5b23f24769b51d71feb76cec155/Men-Leather-Casual-Shoes-Men-2020-Summer-Brand-Comfortable-Flat-Shoes-for-Men-Trendy-Sneaker-Men.jpg"
  },
  {
    id: 7,
    name: "Ayaqqabısı (Qadin)",
    category: "qadin",
    price: 55,
    image: "https://img.staticdj.com/5f2424bd63e8bb34d651abb19323e4d5.jpeg"
  },
  {
    id: 8,
    name: "Şərf və Papaq",
    category: "aksesuar",
    price: 35,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=250&q=80"
  },
   {
    id: 9,
    name: "Qadın Paltarı",
    category: "qadin",
    price: 79,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 10,
    name: "Kişi Köynəyi",
    category: "kisi",
    price: 45,
    image: "https://assets.adidas.com/images/w_940,f_auto,q_auto/ae3dbafa387a4e768103ae6001235cd9_9366/HD3548_41_detail.jpg"
  },
  {
    id: 11,
    name: "Uşaq Gödəkçəsi",
    category: "usaq",
    price: 59,
    image: "https://i5.walmartimages.com/seo/Eashery-Boys-Winter-Jacket-Baby-and-Toddler-Boys-Zip-Up-Hoodies-Long-Sleeve-Cotton-Pullover-Toddler-Boy-Jackets-Grey-2-3-Years_043b2376-987a-4e5d-a89d-e3aac9c6420b.ae4d33e91398cd49e5bebc861c5381cf.jpeg"
  },
  {
    id: 12,
    name: "Aksesuar Dəsti",
    category: "aksesuar",
    price: 29,
    image: "https://ae01.alicdn.com/kf/Se05521739da44ff284a6c8c45742a887H/Fosil-jrhigh-saat-kay-aksesuarlar-i-in-hakiki-deri-Vintage-tarz-kay-y-ksek-miktar-paslanmaz.jpg"
  },
  {
    id: 13,
    name: "Usaq Ayaqqabısi",
    category: "usaq",
    price: 89,
    image: "https://i5.walmartimages.com/asr/72af5b1e-e412-4553-99bb-73a261f075cd.2373362c05275fc06304aff44b49e8a6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF://images.unsplash.com/photo-1600185364704-e1c3a55a9a1a?auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 14,
    name: "Ayaqqabı (Kişi)",
    category: "kisi",
    price: 95,
    image: "https://ae01.alicdn.com/kf/Hfa077f5b23f24769b51d71feb76cec155/Men-Leather-Casual-Shoes-Men-2020-Summer-Brand-Comfortable-Flat-Shoes-for-Men-Trendy-Sneaker-Men.jpg"
  },
  {
    id: 15,
    name: "Ayaqqabısı (Qadin)",
    category: "qadin",
    price: 55,
    image: "https://img.staticdj.com/5f2424bd63e8bb34d651abb19323e4d5.jpeg"
  }
];

// DOM yükləndikdən sonra
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  // URL-də filter varsa
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  if (category && category !== "all") {
    filterProducts(category);
  } else {
    displayProducts(products);
  }
});

// Məhsulları göstərən funksiya
function displayProducts(productList) {
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="cursor:pointer;" onclick="openModal(${product.id})" />
      <h3 style="cursor:pointer;" onclick="openModal(${product.id})">${product.name}</h3>
      <p>${product.price} AZN</p>
      <button onclick="addToCart(${product.id})">Səbətə əlavə et</button>
    `;
    container.appendChild(card);
  });
}

// Kateqoriyaya görə filtr
function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
    return;
  }
  const filtered = products.filter(p => p.category === category);
  displayProducts(filtered);
}

// Səbətə əlavə et
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Məhsul səbətə əlavə olundu!");
}

// Səbətdəki ümumi məhsul sayını qaytarır
function getTotalCount(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Səbət sayını yenilə
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = getTotalCount(cart);
  const cartCountElem = document.getElementById("cart-count");
  if (cartCountElem) {
    cartCountElem.textContent = count;
  }
}

// Modal açma funksiyası
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  const modalContent = modal.querySelector(".modal-content");

  modalContent.innerHTML = `
    <span class="close" onclick="closeModal()">&times;</span>
    <img src="${product.image}" alt="${product.name}" style="width:100%; max-height:300px; object-fit:cover;"/>
    <h2>${product.name}</h2>
    <p>Qiymət: ${product.price} AZN</p>
    <p>Kateqoriya: ${product.category}</p>
    <button onclick="addToCart(${product.id}); closeModal();">Səbətə əlavə et</button>
  `;

  modal.style.display = "block";
}

// Modal bağlama funksiyası
function closeModal() {
  const modal = document.getElementById("product-modal");
  modal.style.display = "none";
}

// Modal xaricinə kliklə bağlamaq üçün
window.onclick = function(event) {
  const modal = document.getElementById("product-modal");
  if (event.target === modal) {
    closeModal();
  }
};