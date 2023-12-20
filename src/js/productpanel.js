const products = JSON.parse(localStorage.getItem('products') || '[]');
const tableBody = document.getElementById("ProductTableBody");


function showproducts() {
    const productContainer = document.getElementById('producttable');
    products.forEach(product => {
        const row = tableBody.insertRow();
        const radioCell = row.insertCell(0);
        const productCell = row.insertCell(1);
        radioCell.innerHTML = `<input type="radio" id="${product.id}" name="product" value="${product.id}">`
        productCell.classList.add('cat-80')
        productCell.textContent = product.name;
    });
}
showproducts();


let create_btn = document.getElementById("create");
create_btn.addEventListener('click', ()=>{
    location.replace('createproduct.html');
})


let update_btn = document.getElementById("update");
console.log(update_btn)
update_btn.addEventListener('click', ()=>{
    let products = document.querySelectorAll('input[type="radio"]');
    for (let index = 0; index < products.length; index++) {
        if(products[index].checked){
            sessionStorage.setItem("updateproductid", products[index].value)
        }
    }
    location.replace('updateproduct.html');
})


let delete_btn = document.getElementById("delete");
delete_btn.addEventListener('click', ()=>{
    let product_id;
    let products_list = document.querySelectorAll('input[type="radio"]');
    for (let index = 0; index < products_list.length; index++) {
        if(products_list[index].checked){
            product_id = products_list[index].value;
            console.log(product_id);
        };
    };
    let delproduct = products.find(product => product.id === product_id);
    console.log(products.indexOf(delproduct));
    products.splice(products.indexOf(delproduct), 1);
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
});
