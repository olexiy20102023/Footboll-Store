// function scrollLeft() {
//     document.getElementById('balls').scrollBy({ left: -300, behavior: 'smooth' });
// }

// function scrollRight() {
//     document.getElementById('balls').scrollBy({ left: 300, behavior: 'smooth' });
// }

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('balls');
    const btnPrev = document.getElementById('prevBalls');
    const btnNext = document.getElementById('nextBalls');

    btnNext.onclick = () => {
      container.scrollBy({ left: 1000, behavior: 'smooth' });
    };

    btnPrev.onclick = () => {
      container.scrollBy({ left: -1000, behavior: 'smooth' });
    };
  });

  



// Додавання до кошика (лише якщо є елементи .cart)
document.querySelectorAll('.cart').forEach((btn) => {
  btn.addEventListener('click', () => {
    const product = btn.closest('.tovar');
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));
    const img = product.querySelector('img').getAttribute('src');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, img });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} додано до кошика!`);
  });
});

// Відображення вмісту кошика (лише якщо є #cart-items)
window.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.getElementById('cart-items');
  if (!cartContainer) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Кошик порожній.</p>';
    return;
  }

  let total = 0;
  cart.forEach(item => {
    total += item.price;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <img src="${item.img}" alt="Товар">
      <div>
        <div><strong>${item.name}</strong></div>
        <div>${item.price} грн</div>
      </div>
    `;
    cartContainer.appendChild(itemDiv);
  });

  const totalEl = document.getElementById('cart-total');
  totalEl.textContent = `Загальна сума: ${total} грн`;
});







// Завантаження кошика на сторінці cart.html
document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const clearCartBtn = document.getElementById("clear-cart");

  if (cartItemsContainer) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
      cartItemsContainer.innerHTML = "";
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Кошик порожній</p>";
        return;
      }

      cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <span>${item.name} — ${item.price}</span>
          <button class="remove-btn" data-index="${index}">Видалити</button>
        `;
        cartItemsContainer.appendChild(div);
      });
    }

    renderCart();

    // Видалити окремий товар
    cartItemsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-btn")) {
        const index = e.target.getAttribute("data-index");
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    });

    // Очистити весь кошик
    clearCartBtn.addEventListener("click", () => {
      if (confirm("Ви впевнені, що хочете очистити кошик?")) {
        localStorage.removeItem("cart");
        renderCart();
      }
    });
  }
});










window.onload = function () {
  const img = document.getElementById('myImage');

  const cropTopPercent = 0.1;     // 10% обрізати зверху
  const cropBottomPercent = 0.1;  // 10% обрізати знизу
  const cropLeftPercent = 0;    // 10% обрізати зліва
  const cropRightPercent = 0;   // 10% обрізати справа

  const shiftDownPercent = -0.2;  // зсув вниз 5% від висоти зображення
  const shiftRightPercent = 0.04; // зсув вправо 5% від ширини зображення
  const scaleFactor = 1.3;        // збільшення 120%

  img.onload = function () {
    const displayWidth = img.clientWidth;
    const displayHeight = img.clientHeight;

    const cropTopPx = displayHeight * cropTopPercent;
    const cropBottomPx = displayHeight * cropBottomPercent;
    const cropLeftPx = displayWidth * cropLeftPercent;
    const cropRightPx = displayWidth * cropRightPercent;

    const visibleWidth = displayWidth - cropLeftPx - cropRightPx;
    const visibleHeight = displayHeight - cropTopPx - cropBottomPx;

    const shiftDownPx = displayHeight * shiftDownPercent;
    const shiftRightPx = displayWidth * shiftRightPercent;

    const container = document.createElement('div');

    Object.assign(container.style, {
      overflow: 'hidden',
      width: visibleWidth + 'px',
      height: visibleHeight + 'px',
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'top',
    });

    Object.assign(img.style, {
      display: 'block',
      margin: '0',
      padding: '0',
      border: 'none',
      position: 'relative',
      width: displayWidth * scaleFactor + 'px',
      height: displayHeight * scaleFactor + 'px',
      top: (shiftDownPx - cropTopPx) + 'px',
      left: (shiftRightPx - cropLeftPx) + 'px',
    });

    img.parentNode.insertBefore(container, img);
    container.appendChild(img);
  };

  if (img.complete) img.onload();
};
