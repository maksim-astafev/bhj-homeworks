const productsBlockClass = "products";
const productCardClass = "product";
const quantityControlsClass = "product__quantity-controls";
const quantityControlClass = "product__quantity-control";
const quantityValueClass = "product__quantity-value";
const quantityIncClass = "product__quantity-control_inc";
const quantityDecClass = "product__quantity-control_dec";
const productAddClass = "product__add";
const cartListClass = "cart__products";
const cartProductClass = "cart__product";
const productImageClass = "product__image";
const cartProductCountClass = "cart__product-count";

function cartProductHtml(productId, imgLink, productCount) {
  return `
    <div class="cart__product" data-id="${productId}">
      <img class="cart__product-image" src="${imgLink}">
      <div class="cart__product-count">${productCount}</div>
    </div>  
  `;
}

const productsBlock = document.querySelector(`.${productsBlockClass}`);
const quantityControls = Array.from(productsBlock.querySelectorAll(`.${quantityControlClass}`));
const productAdds = Array.from(productsBlock.querySelectorAll(`.${productAddClass}`));
const cartList = document.querySelector(`.${cartListClass}`);

function findValueElement(buttonElement) {
  const controlsBlock = buttonElement.closest(`.${quantityControlsClass}`);
  const valueElement = controlsBlock.querySelector(`.${quantityValueClass}`);
  return valueElement;
}

function changeQuantity(clickedButton, valueElement) {
  let currentQuantity = Number(valueElement.innerText);
  if(clickedButton.classList.contains(quantityIncClass)) {
    currentQuantity++;
  } else {
    if(clickedButton.classList.contains(quantityDecClass) && currentQuantity > 1) {
      currentQuantity--;
    }
  }
  valueElement.innerText = currentQuantity;
}

function findProductInCart(addedProductId) {
  const cartProducts = Array.from(cartList.querySelectorAll(`.${cartProductClass}`));
  let foundProduct = undefined;

  cartProducts.forEach( cartProduct => {
    const cartProductId = cartProduct.dataset.id;

    if(cartProductId === addedProductId) {
      return foundProduct = cartProduct;
    }
  });

  return foundProduct;
}

function addProductToCart(productHtml) {
  cartList.insertAdjacentHTML("beforeEnd", productHtml);
}

function updateProductInCart(foundProduct, addedProductCount) {
  const cartProductCount = foundProduct.querySelector(`.${cartProductCountClass}`);

  const cartCount = Number(cartProductCount.innerText);
  cartProductCount.innerText = cartCount + Number(addedProductCount);
}


function productAddToCart(productHtml, productId, addedProductCount) {
  const foundProduct = findProductInCart(productId);

  if(foundProduct === undefined) {
    addProductToCart(productHtml);
  } else {
    updateProductInCart(foundProduct, addedProductCount);
  }
}

function productAddHandler(productCard) {
  const productId = productCard.dataset.id;
  const imgLink = productCard.querySelector(`.${productImageClass}`).src;
  const productCount = productCard.querySelector(`.${quantityValueClass}`).innerText;
  const productHtml = cartProductHtml(productId, imgLink, productCount);
  
  productAddToCart(productHtml, productId, productCount);
}

quantityControls.forEach( controlButton => {
  const valueElement = findValueElement(controlButton);
  controlButton.addEventListener("click", () => changeQuantity(controlButton, valueElement));
});

productAdds.forEach( productAddButton => {
  const productCard = productAddButton.closest(`.${productCardClass}`);
  productAddButton.addEventListener("click", () => productAddHandler(productCard));
});