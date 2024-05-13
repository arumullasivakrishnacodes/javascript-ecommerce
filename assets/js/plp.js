const fetchProductsData = async () => {
    let productsData;
    const productTilesContainer = document.getElementById('plp-grid-layout')

    await fetch('https://ecom-api-tau.vercel.app/allproducts').then(res => res.json()).then(data => productsData=data);

    productsData.map((product) => {
        var productResponse = `
        <div class="product-tile-container">
            <a href='pdp.html/${product.id}'><img src='${product.image}' alt='productImage' class='w-100 h-75 product-image'></a>
            <p class='prd-name'>${product.name}</p>
            <p class='prd-price'>₹ ${product.sale_price} <span>₹ ${product.list_price}</span> <span class='discount'>25% Off</span></p>
        </div>
        `
        productTilesContainer.innerHTML = productTilesContainer.innerHTML + productResponse
    })
}

window.onload = fetchProductsData;