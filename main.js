"use strict";
{
  const questions = [
    { c: "変わった子だなぁ", a: "生まれてから宇宙人だと言われてます。" },
    { c: "主張が強いなぁ", a: "申し訳ございません！自重します" },
    {
      c: "やる気あるなぁ",
      a: "ありがとうございます！自分、一生懸命勉強させていただいてます！！！"
    },
    { c: "まあ普通でしょ", a: "もっと精進します。" }
  ];
  let currentNum = 0;
  

  const que = document.querySelector("#que");
  const modalText = document.querySelector("#modal-text");
  const modal = document.querySelector("#modal");
  const cover = document.querySelector(".cover");

  questions.forEach((question, i) => {
    let li = document.createElement("li");
    li.textContent = question.c;
    li.classList.add("imp");
    que.appendChild(li);
    li.addEventListener("click", () => {
      console.log(question.a);
      modalText.textContent = question.a;
      modal.classList.add("disable");
      cover.classList.add("disable");
    });
  });

  const hum = document.querySelector(".fa-bars");
  const close = document.querySelector(".fa-times");
  const aside = document.querySelector("aside");
  hum.addEventListener("click", () => {
    aside.classList.remove("open");
  });
  close.addEventListener("click", () => {
    aside.classList.add("open");
  });

  function showElementAnimation() {
    var element = document.getElementsByClassName("js-animation");
    if (!element) return; // 要素がなかったら処理をキャンセル

    var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;

    for (var i = 0; i < element.length; i++) {
      var elemClientRect = element[i].getBoundingClientRect();
      var elemY = scrollY + elemClientRect.top;
      if (scrollY + windowH - showTiming > elemY) {
        element[i].classList.add("is-show");
      } else if (scrollY + windowH < elemY) {
        // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove("is-show");
      }
    }
  }
  showElementAnimation();
  window.addEventListener("scroll", showElementAnimation);
}
