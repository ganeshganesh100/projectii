const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", function () {
    title.textContent = "Text Changed Successfully!";
});