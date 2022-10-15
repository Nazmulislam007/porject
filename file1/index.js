const dbtn = document.querySelector(".download-btn");
const text = document.querySelector(".download-file p");
const wrapper = document.querySelector(".wrapper");
const file = document.querySelector(".file");
const loader = document.querySelector(".loader");

dbtn.addEventListener("click", () => {
  wrapper.classList.add("wrapper-active");
  dbtn.style.display = "none";

  setTimeout(() => {
    file.style.display = "block";
    text.innerText = "Ready To Download";
    loader.classList.add("loader-active");
  }, 1000);
});

file.addEventListener("click", () => {
  wrapper.classList.remove("wrapper-active");
  dbtn.style.display = "block";
});
