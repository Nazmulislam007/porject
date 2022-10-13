const dbtn = document.querySelector(".download-btn");
const text = document.querySelector(".download-file p");
const wrapper = document.querySelector(".wrapper");
const files = document.querySelectorAll(".file");
const loader = document.querySelector(".loader");

// const deboune = (cb) => {
//   let timeout;
//   return (...arg) => {
//     timeout = clearTimeout(timeout);
//     setTimeout(() => {
//       cb(...arg);
//     }, 1000);
//   };
// };

dbtn.addEventListener("click", () => {
  wrapper.classList.add("wrapper-active");
  setTimeout(() => {
    files.forEach((file) => {
      file.style.display = "block";
    });
    text.innerText = "Ready To Download";
    loader.classList.add("loader-active");
  }, 1000);
});

files.forEach((file) => {
  file.addEventListener("click", () => {
    wrapper.classList.remove("wrapper-active");
  });
});

// wrapper.addEventListener("click", () => {});
