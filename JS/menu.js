document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("aside-menu").classList.toggle("aside-active");
});

document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("burger").classList.toggle("cross-active");
});

const listItem = document.querySelectorAll(".list-item");

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("mouseover", () => {
    for (let j = 0; j < listItem.length; j++) {
      listItem[j].classList.remove("item-active");
    }
    listItem[i].classList.add("item-active");
  });
}


document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("content-page").classList.toggle("content-page-active");
});