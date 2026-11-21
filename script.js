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
