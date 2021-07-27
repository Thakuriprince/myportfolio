$(document).ready(function () {
  const txt = document.querySelector(".animate-text").children;

  //console.log(txt);
  const txtLen = txt.length;
  let index = 0;
  let $filters = $(".project__button [data-filter]");
  let $datas = $(".project__row--box");

  //  console.log($filters);

  function animateText() {
    for (let i = 0; i < txtLen; i++) {
      txt[i].classList.remove("text-in");
    }
    txt[index].classList.add("text-in");

    if (index == txtLen - 1) {
      index = 0;
    } else {
      index++;
    }

    setTimeout(animateText, 2000);
  }
  window.onload = animateText;

  // project button
  $filters.click(function () {
    let $this = $(this);
    $filters.removeClass("active");
    $this.addClass("active");
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $datas.show("1000");
    } else {
      $datas.not("." + value).hide("1000");
      $datas.filter("." + value).show("1000");
    }
  });

  //popup
  $(".project__row--box .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });
});
