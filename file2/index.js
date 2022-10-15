const inputfile = document.querySelector(".inputfile");
const loader = document.querySelector(".loader");
const result = document.querySelector(".result");

const deboune = (cb) => {
  let timeout;
  return (...arg) => {
    timeout = clearTimeout(timeout);
    setTimeout(() => {
      cb(...arg);
    }, 1000);
  };
};

inputfile.addEventListener("change", function (event) {
  const reader = new FileReader();

  reader.addEventListener("loadstart", (e) => {
    loader.classList.add("loader-active");
  });

  //   reader.addEventListener(
  //     "load",
  //     deboune(() => {
  //       loader.classList.remove("loader-active");
  //       const uploaded_image = reader.result;
  //     })
  //   );

  reader.addEventListener(
    "loadend",
    deboune(() => {
      loader.classList.remove("loader-active");
      result.innerHTML = `<div class="file">${event.target.files[0].name}</div>`;
    })
  ),
    reader.readAsDataURL(event.target.files[0]);
});
