// Прокрутка товарів (слайдер)
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('balls');
  const btnPrev = document.getElementById('prevBalls');
  const btnNext = document.getElementById('nextBalls');

  if (btnNext && btnPrev && container) {
    btnNext.onclick = () => {
      container.scrollBy({ left: 1000, behavior: 'smooth' });
    };

    btnPrev.onclick = () => {
      container.scrollBy({ left: -1000, behavior: 'smooth' });
    };
  }
});




document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('kits');
  const btnPrev = document.getElementById('prevBalls2');
  const btnNext = document.getElementById('nextBalls2');

  if (btnNext && btnPrev && container) {
    btnNext.onclick = () => {
      container.scrollBy({ left: 1000, behavior: 'smooth' });
    };

    btnPrev.onclick = () => {
      container.scrollBy({ left: -1000, behavior: 'smooth' });
    };
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('boots');
  const btnPrev = document.getElementById('prevBalls3');
  const btnNext = document.getElementById('nextBalls3');

  if (btnNext && btnPrev && container) {
    btnNext.onclick = () => {
      container.scrollBy({ left: 1000, behavior: 'smooth' });
    };

    btnPrev.onclick = () => {
      container.scrollBy({ left: -1000, behavior: 'smooth' });
    };
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('accessories');
  const btnPrev = document.getElementById('prevBalls4');
  const btnNext = document.getElementById('nextBalls4');

  if (btnNext && btnPrev && container) {
    btnNext.onclick = () => {
      container.scrollBy({ left: 1000, behavior: 'smooth' });
    };

    btnPrev.onclick = () => {
      container.scrollBy({ left: -1000, behavior: 'smooth' });
    };
  }
});








// Додавання до кошика
document.querySelectorAll('.cart').forEach((btn) => {
  btn.addEventListener('click', () => {
    const product = btn.closest('.tovar');
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));
    const img = product.querySelector('img').getAttribute('src');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Уникнення дублювання
    const exists = cart.some(item => item.name === name);
    if (!exists) {
      cart.push({ name, price, img });
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} додано до кошика!`);
    } else {
      alert(`${name} вже у кошику!`);
    }
  });
});

// Відображення кошика на сторінці cart.html
document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const clearCartBtn = document.getElementById("clear-cart");
  const totalEl = document.getElementById("cart-total");

  if (cartItemsContainer) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     function renderCart() {
//       cartItemsContainer.innerHTML = "";
//       if (cart.length === 0) {
//         cartItemsContainer.innerHTML = "<p>Кошик порожній.</p>";
//         if (totalEl) totalEl.textContent = "";
//         return;
//       }

//       let total = 0;

//       cart.forEach((item, index) => {
//         total += item.price;

//         const div = document.createElement("div");
//         div.className = "cart-item";
//         div.innerHTML = `
//   <div style="display: flex; align-items: center; width: 100%;">
//     <img src="${item.img}" alt="${item.name}" style="width: 10%; height: 100%; object-fit: contain; margin-right: 15px;">
    
//     <div style="flex-grow: 1;">
//       <div style="font-weight: bold; font-size: 2em;">${item.name}</div>
//       <div style="font-size: 2em;">${item.price} грн</div>
//     </div>
    
//     <button class="remove-btn" data-index="${index}" style="margin-left: auto; font-size: 1.5em">
//       Видалити
//     </button>
//   </div>
// `;





//         cartItemsContainer.appendChild(div);
//       });

//       if (totalEl) totalEl.textContent = `Загальна сума: ${total} грн`;
//     }






function renderCart() {
  cartItemsContainer.innerHTML = "";
  const cartActions = document.getElementById("cart-actions");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Кошик порожній.</p>";
    if (totalEl) totalEl.textContent = "";
    if (cartActions) cartActions.style.display = "none";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div style="display: flex; align-items: center; width: 100%;">
        <img src="${item.img}" alt="${item.name}" style="width: 10%; height: 100%; object-fit: contain; margin-right: 15px;">
        <div style="flex-grow: 1;">
          <div style="font-weight: bold; font-size: 2em;">${item.name}</div>
          <div style="font-size: 2em;">${item.price} грн</div>
        </div>
        <button class="remove-btn" data-index="${index}" style="margin-left: auto; font-size: 1.5em">
          Видалити
        </button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  if (totalEl) totalEl.textContent = `Загальна сума: ${total} грн`;
  if (cartActions) cartActions.style.display = "block";
}














    // Початкове відображення
    renderCart();

    // Видалення окремого товару
    cartItemsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-btn")) {
        const index = e.target.getAttribute("data-index");
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    });

    // Очистити кошик
    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", () => {
        if (confirm("Ви впевнені, що хочете очистити кошик?")) {
          localStorage.removeItem("cart");
          cart = [];
          renderCart();
        }
      });
    }
  }
});


// Додаєм щоб нормалььно прогортувалось до мячів
// function scrollToBalls(event) {
//   event.preventDefault();
//   const element = document.getElementById("balls");
//   const offset = -80; // або скільки потрібно змістити вгору
//   const top = element.getBoundingClientRect().top + window.pageYOffset + offset;
//   window.scrollTo({ top, behavior: "smooth" });
// }





// document.querySelector('a[href="#balls"]').addEventListener('click', function(e) {
//   e.preventDefault();

//   const target = document.getElementById('balls');
//   const header = document.querySelector('header');

//   const headerHeight = header.offsetHeight;

//   const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

//   window.scrollTo({ top: y, behavior: 'smooth' });
// });

// Регулювання прокрутки
// мячі
document.querySelector('a[href="#balls"]').addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.getElementById('balls');
  const header = document.querySelector('header');
  const sectionTitle = document.querySelector('.section-title2');

  const headerHeight = header.offsetHeight;

  let sectionTitleHeight = 0;
  let marginTop = 0;

  if (sectionTitle) {
    sectionTitleHeight = sectionTitle.offsetHeight;

    const computedStyle = window.getComputedStyle(sectionTitle);
    marginTop = parseFloat(computedStyle.marginTop); // отримуємо margin-top у пікселях
  }

  const totalOffset = headerHeight + sectionTitleHeight + marginTop/3;

  const y = target.getBoundingClientRect().top + window.pageYOffset - totalOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
});

// форми

document.querySelector('a[href="#kits"]').addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.getElementById('kits');
  const header = document.querySelector('header');
  const sectionTitle = document.querySelector('.section-title2');

  const headerHeight = header.offsetHeight;

  let sectionTitleHeight = 0;
  let marginTop = 0;

  if (sectionTitle) {
    sectionTitleHeight = sectionTitle.offsetHeight;

    const computedStyle = window.getComputedStyle(sectionTitle);
    marginTop = parseFloat(computedStyle.marginTop); // отримуємо margin-top у пікселях
  }

  const totalOffset = headerHeight + sectionTitleHeight + marginTop/3;

  const y = target.getBoundingClientRect().top + window.pageYOffset - totalOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
});







// бутси

document.querySelector('a[href="#boots"]').addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.getElementById('boots');
  const header = document.querySelector('header');
  const sectionTitle = document.querySelector('.section-title2');

  const headerHeight = header.offsetHeight;

  let sectionTitleHeight = 0;
  let marginTop = 0;

  if (sectionTitle) {
    sectionTitleHeight = sectionTitle.offsetHeight;

    const computedStyle = window.getComputedStyle(sectionTitle);
    marginTop = parseFloat(computedStyle.marginTop); // отримуємо margin-top у пікселях
  }

  const totalOffset = headerHeight + sectionTitleHeight + marginTop/3;

  const y = target.getBoundingClientRect().top + window.pageYOffset - totalOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
});







// футбольні аксесуари

document.querySelector('a[href="#accessories"]').addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.getElementById('accessories');
  const header = document.querySelector('header');
  const sectionTitle = document.querySelector('.section-title2');

  const headerHeight = header.offsetHeight;

  let sectionTitleHeight = 0;
  let marginTop = 0;

  if (sectionTitle) {
    sectionTitleHeight = sectionTitle.offsetHeight;

    const computedStyle = window.getComputedStyle(sectionTitle);
    marginTop = parseFloat(computedStyle.marginTop); // отримуємо margin-top у пікселях
  }

  const totalOffset = headerHeight + sectionTitleHeight + marginTop/3;

  const y = target.getBoundingClientRect().top + window.pageYOffset - totalOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
});






// Висота блока з мячами
document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll('.tovar');
  let maxHeight = 0;

  products.forEach(el => {
      el.style.height = 'auto'; // скидаємо попередню висоту
      const height = el.offsetHeight;
      if (height > maxHeight) {
          maxHeight = height;
      }
  });

  products.forEach(el => {
      el.style.height = maxHeight + 'px';
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const confirmBtn = document.getElementById("confirm-order");

  if (confirmBtn) {
    confirmBtn.addEventListener("click", function () {
      // Очищаємо кошик
      localStorage.removeItem("cart");

      // Можна показати повідомлення
      alert("Замовлення підтверджено! Кошик очищено.");

      // Перенаправлення назад на головну або сторінку кошика
      window.location.href = "index.html"; // або cart.html
    });
  }
});
