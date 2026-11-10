// List Items on Left Panel
function createItemComponent(item_name, quantity){
    const lists = document.createElement("li");
    
    const items_info = document.createElement("div");
    items_info.className = "items-info";
    
    const name_div = document.createElement("div");

    const name = document.createElement("p");
    name.textContent = item_name;

    const quantity_div = document.createElement("div");
    quantity_div.className = "quantity";
    
    const quantity_label = document.createElement("p");
    quantity_label.textContent = "Quantity: ";

    const quantity_value = document.createElement("p");
    quantity_value.textContent = quantity;

    const remove = document.createElement("p");
    remove.className = "remove";
    remove.textContent = "Remove";

    lists.appendChild(items_info);
    
    items_info.appendChild(name_div);
    items_info.appendChild(remove);
    
    name_div.appendChild(name);
    name_div.appendChild(quantity_div);

    quantity_div.appendChild(quantity_label);
    quantity_div.appendChild(quantity_value);

    return lists;
}

const containers = document.getElementById("item-container");

for(let i = 0; i < 3; i++){
    containers.appendChild(createItemComponent(`Sample Item`, 1));    
}

// Options on Right Panel 

const options_container = document.getElementById("options-container");

function createOptions(item, id){
    const options_buttons = document.createElement("button");
    options_buttons.id = id;
    options_buttons.textContent = item; //parameter
    options_buttons.addEventListener("click", ()=>{
        console.log("This btn clicked");
    })

    return options_buttons;
}

for(let i=0; i < 10; i++){
    options_container.appendChild(createOptions("sample", i+1));
}

// Cost

const subtotal = document.getElementById("subtotal");
const discount = document.getElementById("discount");
const tax = document.getElementById("tax")
const total = document.getElementById("total")

// calculator

const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")

const enter = document.getElementById("enter")
const erase = document.getElementById("erase")

// operations

const add = document.getElementById("plus")
const minus = document.getElementById("minus")
const mult = document.getElementById("mult")
const divide = document.getElementById("divide")
