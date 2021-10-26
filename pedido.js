// const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
// addToShoppingCartButtons.forEach(addToCartBtn  => {
//     addToCartBtn.addEventListener('click', addToCartClicked);
// });

// const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

// function addToCartClicked(event){
//     //capturar target del evento
//     const button = event.target; //captura cada boton por separado del 0 al 5 por ej
//     const item = button.closest('.carritoCard');//trae lo mas cercano a esa clase, en mi caso la tarjeta del producto
    
//     const cardTitle = item.querySelector('.card-title').textContent;
//     const cardPrice = item.querySelector('.text-precio').textContent;
// //  const cardImg = item.querySelector('.card-img').src; para cuando ponga un thumbnail

//     addItemToShoppingCart(cardTitle,cardPrice);

// }

// function addItemToShoppingCart(cardTitle,cardPrice){
//  const shoppingCartColumn = document.createElement('div');
//  const shoppingCartContent = `
 
//     <div class="card shoppingCartItem">
//         <p class="card-text">${cardTitle}</p>
//         <h6 class="card-subtitle mb-2 text-muted">$  ${cardPrice}</h6>
//         <button id="${i}" class="btnComprar" onclick="eliminar();" ><i class="fas fa-trash-alt"></i> QUITAR</button>
//     </div>
//  `;

// }