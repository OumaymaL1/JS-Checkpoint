//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});
const parentcontainer = document.querySelector(".section");
parentcontainer.addEventListener("click", (event) => {
  const current = event.target;
  const isReadMoreBtn = current.className.includes("read-more-btn");
  if (!isReadMoreBtn) return;
  const currentText = event.target.parentNode.querySelector(".read-more-txt");
  currentText.classList.toggle("read-more-txt--show");
  current.textcontent = current.textcontent.includes("Read More")
    ? "Read Less..."
    : "Read More...";
});
