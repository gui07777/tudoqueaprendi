const products = [{
    id: 1,
    name: "Clarinete",
    category: "Música",
    price: 2000.00,
    image: "data:image/jpeg;base64,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",
    quantity: 2
},
{
    id: 2,
    name: "Sax",
    category: "Música",
    price: 3000.00,
    image: "data:image/jpeg;base64,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",
    quantity: 2
},
{
    id: 3,
    name: "Violão",
    category: "Música",
    price: 600.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzbbGndGXJeqOvvPIypE4TBWNVVLJllv9Ag&s",
    quantity: 2
},
]

function renderCartItems() {
    const cartItemsSection = document.getElementById('cart-items'); //acessa por id, os itens da section cart-items
    const subTotalElement = document.getElementById('subtotal')
    let subtotal = 0;

    cartItemsSection.innerHTML = ''; // innerHTML tem todo o html referente a section, ou seja, o que tiver dentro da sessão está disposto nessa propriedade

    products.forEach(product => { //para cada produto que tiver, precisará ser criada uma nova linha
        const itemTotal = product.price * product.quantity;
        const row = document.createElement('tr'); //tr é o elemento que quer criar no caso (table row ou linha de tabela). Essa constante vai ter a tr criada, então, toda vez que essa funçaõ for chamada, será criada uma linha nova.
        subtotal += itemTotal; //mesma coisa que subtotal = subtotal + itemTotal (pra não precisar repetir)

        row.innerHTML = `
       <td>
       <div class="product">
       <img
       src="${product.image}"
       height="100"
       width="100"
       alt="${product.name}"
       />
       <div class="info">
       <div class="name">${product.name}</div>
       <div class="category">${product.category}</div>
       </div>
       </div>
       </td>
       <td>R$ ${product.price.toFixed(2)}</td>
       <td>
       <div class="quantity">
       <button (click)="decreaseQuantity(${product.id})">
       <i class="bx bx-minus"></i>
       </button>
       <span>${product.quantity}</span>
       <button (click)="increaseQuantity(${product.id})">
       <i class="bx bx-plus"></i>
       </button>
       </div>
       </td>
       <td>
       <button class="remove" onclick="removeProduct(${product.id})">
       <i class="bx bx-x"></i>
       </button>
       </td>
       <td>R$ ${itemTotal.toFixed(2)}</td>
       <td>
       <button class="remove" onclick="removeProduct(${product.id})">
       <i class="bx bx-x"></i>
       </button>
       </td>`;

        cartItemsSection.appendChild(row);
    });

    subTotalElement.textContent = `R$ ${subtotal.toFixed(2)}`
}
function increaseQuantity(productId){
    const product = products.find(x => x.id == productId);

    if(product){
        product.quantity++;
        renderCartItems();
    }
}
function decreaseQuantity(productId){
    const product = products.find(x => x.id == productId);

    if(product){
        product.quantity--;
        renderCartItems();
    }
}
document.addEventListener('DOMContentLoaded', renderCartItems);