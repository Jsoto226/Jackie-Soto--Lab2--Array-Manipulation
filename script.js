// ////////////////////////////////////
// Task .1 Array Manipulation Basics //
// ////////////////////////////////////

let shoppingList = [];
// console.log("started with empty shoppingList", shoppingList);

function addItem(item) {
  const normalizedNewItem = item.toLowerCase();
  const alreadyOnList = shoppingList.some(function (existingItem) {
    return existingItem.toLowerCase() === normalizedNewItem;
  });

  if (!alreadyOnList) {
    shoppingList.push(item);
    console.log("Added:", item);
    console.log("Current list", shoppingList);
  } else {
    console.log("Already on list (skipped):", item);
  }
}

function removeLastItem() {
  const removed = shoppingList.pop();
  // console.log("Removed", removed);
  // console.log("Current list:", shoppingList);
}

function displayList() {
  // console.log("Current list:", shoppingList);
}
// //////////////////////////////////
// Task .2 Filter and Search Array //
// /////////////////////////////////

function filterItems(searchTerm) {
  const term = searchTerm.toLowerCase();
  return shoppingList.filter(function (item) {
    return item.toLowerCase().includes(term);
  });
}

// ///////////////////////////////////
// Task 3. Rendering Browsers List  //
// ///////////////////////////////////

const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const listDisplay = document.getElementById("shoppingList");

function renderList() {
  listDisplay.innerHTML = "";

  for (let i = 0; i < shoppingList.length; i++) {
    const li = document.createElement("li");
    li.textContent = shoppingList[i];
    listDisplay.appendChild(li);
  }
  console.log("Rendered UL with;", shoppingList);
}

addBtn.addEventListener("click", function () {
  const typedValue = itemInput.value.trim();

  if (typedValue) {
    addItem(typedValue);
    itemInput.value = "";
    renderList();
  }
});

removeBtn.addEventListener("click", function() {
    removeLastItem ();
    renderList();
});