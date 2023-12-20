
class Category {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

// module.exports = Category;

console.log("KIK")
// Retrive categories From LS
let categories = JSON.parse(localStorage.getItem("categories")) || [] ;

function createCategory(){
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
}

function getCategories() {
    return JSON.parse(localStorage.getItem("categories")) || [];
}

function displayCategories() {
    const categories = getCategories();
    const tableBody = document.getElementById("categoryTableBody");

    categories.forEach((category)=>{
        const row = tableBody.insertRow();
        const checkboxCell = row.insertCell(0);
        const categoryCell = row.insertCell(1);
        categoryCell.classList.add('cat-80')
        checkboxCell.innerHTML = `<input type='checkbox' name='categoryCheckbox' id="checkbox${category.id}">`;
        categoryCell.innerHTML = `<a href='updatecategory.html' id='categoryname' data-animal-type="${category.name}">${category.name}</a>`;
        const checkbox = document.getElementById(`checkbox${category.id}`);

        checkbox.addEventListener('change', (event) => {
            deleteCategory(event, category.id); // Handle checkbox change event
        });
    });
}

displayCategories();

function deleteCategory(event, categoryId) {
    if (event.target.checked) {
      const updatedCategories = getCategories().filter(category => category.id !== categoryId);
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
        location.reload();
    }
}
