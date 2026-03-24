const API_URL = `https://harve-js-ecommerce.onrender.com`

const carregarProdutos = (event) => {
    event.preventDefault()
    debugger
    fetch(`${API_URL}/products`)
    .then(res => res.json())
    .then(res => {
        let response = res


})
}
document.addEventListener('DOMContentLoaded', (e) => carregarProdutos(e));




/*

const API_URL = `https://harve-js-ecommerce.onrender.com`

const carregarProdutos = (event) => {
    event.preventDefault()
    debugger
    fetch(`${API_URL}/products`)
        .then(res => res.json())
        .then(res => {
            const productsGrid = document.getElementById('products-grid')
            productsGrid.innerHTML = ``
            let produtos = res

            for (let product of produtos) {
                
                const card = document.createElement('div')
                card.classList.add('product-card')
                card.dataset.id = product.id

                const oldPriceHTML = product.oldPrice
                    ? `<span class="product-card__price-old">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span>`
                    : ''

                card.innerHTML = `
          <div class="product-card__image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-card__body">
            <span class="product-card__category">${product.category}</span>
            <h3 class="product-card__name">${product.name}</h3>
            <p class="product-card__price">
              R$ ${product.price.toFixed(2).replace('.', ',')}
              ${oldPriceHTML}
            </p>
            <div class="product-card__actions">
              <button class="btn btn--primary btn--sm btn-add-cart">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        `
                productsGrid.appendChild(card)
            }

        })
}


document.addEventListener(`DOMContentLoaded`, (e) => carregarProdutos(e))

*/