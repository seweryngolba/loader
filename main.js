const btn = document.querySelector("#btn");
const spinner = document.querySelector(".fa-circle-notch");
const icon = document.querySelector(".fa-check");
const btnText = document.querySelector("#btn-text");

const spinTime = () => {
  btnText.textContent = "";
  icon.classList.replace("fa-check", "fa-circle-notch");
  setTimeout(() => {
    icon.classList.replace("fa-circle-notch", "fa-check");
    icon.classList.add("checked");
    btnText.textContent = "CLICKED";
  }, 3000);
};

btn.addEventListener("click", spinTime);
