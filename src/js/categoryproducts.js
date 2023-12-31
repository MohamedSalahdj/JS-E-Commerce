const products = JSON.parse(localStorage.getItem('products') || '[]');

function getParameterByName(name, url) {
    // console.log(name)
    // console.log(url)
    if (!url){
        url = window.location.href;
    } 
    console.log(url)
    name = name.replace(/[\[\]]/g, '\\$&');
    // console.log(name)
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    // console.log(regex)
    const results = regex.exec(url);
    // console.log(results)
    // console.log(results[2])
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
const categoryName = getParameterByName('category');

document.title = categoryName

const categoryTitle = document.getElementById('categoryTitle')
categoryTitle.textContent = categoryName

console.log(categoryName)

function getProductsByCategory(categoryName) {
    console.log(categoryName)
    const productsByCategory = products.filter(product => product.category === categoryName);
    dispalyProducts(productsByCategory);
}
getProductsByCategory(categoryName);

function dispalyProducts(products) {
    console.log(products)
    console.log("hhhhh")
    const productCard = document.getElementById('procard');
    productCard.innerHTML = ''
    // console.log(productCard)
    if (products.length === 0) {
        productCard.innerHTML = '<p>No products available for this category.</p>';
    } 
    else {
    products.forEach(product => {
        console.log(product.productImage)
        let cardOfProduct = `
        <div class="box">
            <div class="image">
                <img src="images\\${product.productImage}" alt="">
                <a href="#" class="fas fa-heart"></a>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="#" class="btn">add to cart</a>
                <span class="price">$${product.price}</span>
            </div>
        </div>
        ` 
        productCard.innerHTML +=cardOfProduct });
    }   
}