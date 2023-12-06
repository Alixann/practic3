const btnReadMore = document.getElementById("read-more-btn");

btnReadMore.addEventListener("click", () => {
  document.getElementById("main-text").classList.toggle("main-text-active");
});

btnReadMore.addEventListener("click", () => {
  if (btnReadMore.innerText === "Читать далее") {
    btnReadMore.innerText = "Скрыть";
  } else {
    btnReadMore.innerText = "Читать далее";
  }
});

const showAll = document.getElementById('show-all');


showAll.addEventListener("click", () => {
  document.getElementsByClassName("swiper-wrapper-brend")[0].classList.toggle("swiper-wrapper-brend-active");
});

showAll.addEventListener("click", () => {
  if (showAll.innerText === "Показать все") {
    showAll.innerText = "Скрыть";
  } else {
    showAll.innerText = "Показать все";
  }
});

const showAllRepair = document.getElementById('show-all-repair');

showAllRepair.addEventListener("click", () => {
  document.getElementsByClassName("swiper-repair-wrapper")[0].classList.toggle("swiper-repair-wrapper-active");
});

showAllRepair.addEventListener("click", () => {
  if (showAllRepair.innerText === "Показать все") {
    showAllRepair.innerText = "Скрыть";
  } else {
    showAllRepair.innerText = "Показать все";
  }
});
