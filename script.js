const li = document.querySelector(".list");
// const ch=li.children;
const butt = document.querySelector(".button");
const inpu = document.querySelector(".input");
const selecttodo = document.querySelector("#select");
selecttodo.addEventListener("click", filter);
document.addEventListener('DOMContentLoaded',gettodos);
butt.addEventListener("click", function (ev) {
  ev.preventDefault();
  //creating div
  const newdiv = document.createElement("div");
  newdiv.classList.add("dive");
  //creatinf li
  const newitem = document.createElement("li");
  // const newbuttons=document.create
  newitem.classList.add("item");
  newitem.innerText = inpu.value;
  newdiv.appendChild(newitem);
  setlocalstorage(inpu.value);
  //creating del button
  const delbut = document.createElement("button");
  delbut.classList.add("del");
  delbut.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  newdiv.appendChild(delbut);
  //creating mark button
  const markbut = document.createElement("button");
  markbut.classList.add("mark");
  markbut.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  newdiv.appendChild(markbut);
  if (inpu.value != "") {
    li.appendChild(newdiv);
  }
  inpu.value = "";
});
const delitem = document.querySelector(".list");
delitem.addEventListener("click", deleteCheck);
function deleteCheck(e) {
  const selectitem = e.target;
  if (selectitem.classList[0] === "del") {
    // const itemd=document.querySelector('.dive')
    const itemde = selectitem.parentElement;
    itemde.classList.add("animate");
    removeitems(itemde);
    itemde.addEventListener("transitionend", function () {
      itemde.remove();
    });
  }
  if (selectitem.classList[0] === "mark") {
    const itemde = selectitem.parentElement;
    itemde.classList.toggle("completed");
  }
}
function filter(e) {
  const ch = li.childNodes;
  ch.forEach(function (items) {
    console.log(items);
    switch (e.target.value) {
      case "all":
        items.style.display = "flex";
        break;
      case "completed":
        if (items.classList.contains("completed")) {
          items.style.display = "flex";
        } else {
          items.style.display = "none";
        }
        break;

      case "uncompleted":
        if (!items.classList.contains("completed")) {
          items.style.display = "flex";
        } else {
          items.style.display = "none";
        }
        break;
    }
  });
}
function setlocalstorage(todo) {
  let arr;
  if (localStorage.getItem("arr") === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("arr"));
  }
  arr.push(todo);
  localStorage.setItem("arr", JSON.stringify(arr));
}
function removeitems(todo) {
    let arr;
    if (localStorage.getItem("arr") === null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("arr"));
    }
    const tobed=(todo.children[0].innerText);
    arr.splice(arr.indexOf(tobed),1);
    localStorage.setItem("arr", JSON.stringify(arr));
  }
function gettodos() {
  let arr;
  if (localStorage.getItem("arr") === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("arr"));
  }
  arr.forEach(function (ans) {
    const newdiv = document.createElement("div");
    newdiv.classList.add("dive");
    //creatinf li
    const newitem = document.createElement("li");
    newitem.classList.add("item");
    newitem.innerText = ans;
    newdiv.appendChild(newitem);
    //creating del button
    const delbut = document.createElement("button");
    delbut.classList.add("del");
    delbut.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    newdiv.appendChild(delbut);
    //creating mark button
    const markbut = document.createElement("button");
    markbut.classList.add("mark");
    markbut.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    newdiv.appendChild(markbut);
    if (ans.value != "") {
      li.appendChild(newdiv);
    }
  });
}
