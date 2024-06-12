// 各div要素を取得する
const genshinDiv = document.getElementById("genshinDiv");
const starrailDiv = document.getElementById("starrailDiv");

// 各ボタンの画像要素を取得する
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// 各ボタンがクリックされたときの処理を定義する
button1.addEventListener("click", function () {
  console.log("原神");
  // 既存のアニメーションクラスを削除
  genshinDiv.classList.remove("hidden", "fade-in-up");
  starrailDiv.classList.add("hidden");

  // 0ms後にアニメーションクラスを追加
  setTimeout(() => {
    genshinDiv.classList.add("fade-in-up");
  }, 0);
});

button2.addEventListener("click", function () {
  console.log("スタレ");

  // 既存のアニメーションクラスを削除
  starrailDiv.classList.remove("hidden", "fade-in-up");
  genshinDiv.classList.add("hidden");

  // 0ms後にアニメーションクラスを追加
  setTimeout(() => {
    starrailDiv.classList.add("fade-in-up");
  }, 0);
});

/*Dropdown Menu*/
$(".dropdown").click(function () {
  $(this).attr("tabindex", 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-menu").slideToggle(300);
  $(this).find(".dropdown-menu2").slideToggle(300);
  $(this).find(".dropdown-menu3").slideToggle(300);
});
$(".dropdown").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-menu").slideUp(300);
});
$(".dropdown .dropdown-menu li").click(function () {
  $(this).parents(".dropdown").find("span").text($(this).text());
  $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id"));
});
$(".dropdown .dropdown-menu2 li").click(function () {
  $(this).parents(".dropdown").find("span").text($(this).text());
  $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id"));
});
$(".dropdown .dropdown-menu3 li").click(function () {
  $(this).parents(".dropdown").find("span").text($(this).text());
  $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id"));
});
/*End Dropdown Menu*/

var normal = 0;
var skill = 0;
var ult = 0;
var point;

var gift1 = 3;
var gift2 = 21;
var gift3 = 10;

$(".dropdown-menu li").click(function () {
  normal = parseInt($(this).parents(".dropdown").find("input").val());
  point = normal + skill + ult;
  console.log(point);
  updatePoint();
});
$(".dropdown-menu2 li").click(function () {
  skill = parseInt($(this).parents(".dropdown").find("input").val());
  point = normal + skill + ult;
  console.log(point);
  updatePoint();
});
$(".dropdown-menu3 li").click(function () {
  ult = parseInt($(this).parents(".dropdown").find("input").val());
  point = normal + skill + ult;
  console.log(point);
  updatePoint();
});

function updatePoint() {
  if (point == 16) {
    gift1 = 6;
    gift2 = 42;
    gift3 = 20;
  } else if (point == 24) {
    gift1 = 9;
    gift2 = 63;
    gift3 = 30;
  } else if (point == 9) {
    gift3 = 22;
  } else if (point == 10) {
    gift3 = 38;
  } else if (point == 17) {
    gift3 = 54;
  }
  $(".monster").html(
    `
        <div class="rising">
            <div class="item">
                <div class="head">
                    <img src="/img/G-mon1.jpg" alt="ボス素材">
                    <h3>下位</h3>
                </div>
                <a>x` +
      point +
      `</a>
            </div>
            <div class="item">
                <div class="head">
                    <img src="/img/G-mon2.jpg" alt="特産品">
                    <h3>中位</h3>
                </div>
                <a>x996</a>
            </div>
            <div class="item">
                <div class="head">
                    <img src="/img/G-mon3.jpg" alt="特産品">
                    <h3>上位</h3>
                </div>
                <a>x996</a>
            </div>
        </div>
    `
  );

  $(".gift").html(
    `
        <div class="rising">
            <div class="item">
                <div class="head">
                    <img src="/img/G-gift1.png">
                    <h3>下位</h3>
                </div>
                <a>x` +
      point +
      `</a>
            </div>
            <div class="item">
                <div class="head">
                    <img src="/img/G-gift2.png">
                    <h3>中位</h3>
                </div>
                <a>x` +
      point +
      `</a>
            </div>
            <div class="item">
                <div class="head">
                    <img src="/img/G-gift3.png">
                    <h3>上位</h3>
                </div>
                <a>x` +
      point +
      `</a>
            </div>
        </div>
    `
  );
}
