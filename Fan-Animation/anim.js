let wingsImg = document.querySelector(".wings");

let btns = document.querySelectorAll(".buttons p");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let arr = [];
      e.target.parentNode.querySelectorAll("p").forEach((child) => {
        if (child !== e.target) {
          if (e.target.classList.contains("first")) {
            wingsImg.classList.add("one");
            wingsImg.style.animationDuration = `1s`;
            wingsImg.style.animationPlayState = `running`;
          } else if (e.target.classList.contains("second")) {
            wingsImg.classList.add("two");
            wingsImg.style.animationDuration = `0.5s`;
            wingsImg.style.animationPlayState = `running`;
          } else if (e.target.classList.contains("third")) {
            wingsImg.classList.add("third");
            wingsImg.style.animationPlayState = `running`;
            wingsImg.style.animationDuration = `0.1s`;
          } else if (e.target.classList.contains("stop")) {
            wingsImg.classList.add("stop");
            wingsImg.style.animationPlayState = `paused`;
          }
        }
      })
  });
});
