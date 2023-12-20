// import { Category } from "./category.js";
class Category {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

let categories = JSON.parse(localStorage.getItem("categories")) || [] ;

const createCategory = document.getElementById('categoryForm');

createCategory.addEventListener('submit',(event)=>{
    event.preventDefault();
    const categoryId = self.crypto.randomUUID();
    const categoryName = document.getElementById("categoryName").value;
    const currentCategory= categories.find((category) => category.name === categoryName);
    if (categoryName === '') {
        alert('Please enter a category name.');
    }
    else if (currentCategory) {
      alert('Category already exists!');
    }
    else {
        const category = new Category(categoryId, categoryName);
        categories.push(category);
        localStorage.setItem("categories",JSON.stringify(categories));
        location.replace('admincategories.html');
    }
});
