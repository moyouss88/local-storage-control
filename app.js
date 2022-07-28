let input = document.querySelector(".input");
let checkItem = document.querySelector(".check");
let addItem = document.querySelector(".add");
let deleteItem = document.querySelector(".delete");
let showItems = document.querySelector(".show");
let results = document.querySelector(".results > span");
// let inputValue = input.value;

checkItem.onclick = function () {
  if (input.value !== "") {
    if (localStorage.getItem(input.value)) {
      results.innerHTML = `Item <span>${input.value}</span> found`;
    } else {
      results.innerHTML = `Item <span>${input.value}</span> not found`;
    }
  } else {
    results.innerHTML = "enter Item first";
  }
};
addItem.onclick = function () {
  if (input.value !== "") {
    localStorage.setItem(input.value, "test");
    results.innerHTML = `Item <span>${input.value}</span> added`;
  } else {
    results.innerHTML = "enter Item first";
  }
};
deleteItem.onclick = function () {
  if (localStorage.getItem(input.value)) {
    localStorage.removeItem(input.value);
    results.innerHTML = `Item <span>${input.value}</span> deleted`;
  } else {
    results.innerHTML = `Item <span>${input.value}</span> is not in Local Storage`;
  }
};
showItems.onclick = function () {
  if (localStorage.length) {
    results.innerHTML = "";
    for (let [keys, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="keys">${keys}</span>`;
    }
  } else {
    results.innerHTML = `Local Storage is empty`;
  }
};
