const dbtn = document.querySelector(".download-btn");
const downloadPara = document.querySelector(".donwload-para");
const container = document.querySelector(".container");

const deboune = (cb) => {
  let timeout;
  return (...arg) => {
    timeout = clearTimeout(timeout);
    setTimeout(() => {
      cb(...arg);
    }, 2000);
  };
};

function download(filename, textInput) {
  container.classList.remove("show");
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8, " + encodeURIComponent(textInput)
  );
  element.setAttribute("download", filename);
  document.body.appendChild(element);
  element.click();
}

// dbtn.addEventListener("click", () => {
//   wrapper.classList.add("wrapper-active");
//   setTimeout(() => {
//     file.style.display = "block";
//     text.innerText = "Ready To Download";
//     loader.classList.add("loader-active");
//   }, 1000);
// });

// file.addEventListener("click", () => {
//   wrapper.classList.remove("wrapper-active");
// });

// file.addEventListener("click", function () {
//   const text = "Downloading the file";
//   const filename = "output.txt";
//   download(filename, text, file);
// });

const link = document.querySelector(".link");

link.addEventListener("click", () => {
  dbtn.style.display = "block";
  downloadPara.style.display = "none";
});

dbtn.addEventListener("click", () => {
  container.classList.add("show");
  const text = "Downloading the file";
  const filename = "output.txt";
  setTimeout(() => {
    download(filename, text);
  }, 2000);
});

container.addEventListener("click", () => {
  container.classList.remove("show");
});
