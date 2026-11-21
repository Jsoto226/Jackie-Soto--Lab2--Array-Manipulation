// ////////////////////////////////////
// Task .1 Array Manipulation Basics //
// ////////////////////////////////////

let shoppingList = [];
function addItem(item) {
    shoppingList.push();
}
function removeLastItem () {
    shoppingList.pop ();
}
function displayList() {
    console.log(shoppingList)
}

function addItem(item) {
    const normalizedNewItem = item.toLowerCase();
    const alreadyOnList = shoppingList = shoppingList.some(function (existingItem) {
        return existingItem.toLowerCase() === normalizedNewItem;
    });
    if (!alreadyOnList) {
        shoppingList.push(item);
    }
}

