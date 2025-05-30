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