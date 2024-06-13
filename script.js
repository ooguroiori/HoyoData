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
  $(this).find(".dropdown-menu4").slideToggle(300);
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
$(".dropdown .dropdown-menu4 li").click(function () {
  $(this).parents(".dropdown").find("span").text($(this).text());
  $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id"));
});
/*End Dropdown Menu*/

var normal = 0;
var skill = 0;
var ult = 0;
var giftedpoint = 0;

$(".dropdown-menu li").click(function () {
  normal = parseInt($(this).parents(".dropdown").find("input").val());
  updatePoint();
});
$(".dropdown-menu2 li").click(function () {
  skill = parseInt($(this).parents(".dropdown").find("input").val());
  updatePoint();
});
$(".dropdown-menu3 li").click(function () {
  ult = parseInt($(this).parents(".dropdown").find("input").val());
  updatePoint();
});
$(".dropdown-menu4 li").click(function () {
  giftedpoint = parseInt($(this).parents(".dropdown").find("input").val());
  updatePoint();
});

function updatePoint() {
  fetch("/json/G-gifted.json")
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((gifteddata) => {
      var low =
        parseInt(gifteddata[normal].low) +
        parseInt(gifteddata[skill].low) +
        parseInt(gifteddata[ult].low);
      var mid =
        parseInt(gifteddata[normal].mid) +
        parseInt(gifteddata[skill].mid) +
        parseInt(gifteddata[ult].mid);

      var high =
        parseInt(gifteddata[normal].high) +
        parseInt(gifteddata[skill].high) +
        parseInt(gifteddata[ult].high);
      $(".gift").html(
        `
                <div class="rising">
                    <div class="item">
                        <div class="head">
                            <img src="/img/G-gift1.png">
                            <h3>下位</h3>
                        </div>
                        <a>x` +
          low +
          `</a>
                    </div>
                    <div class="item">
                        <div class="head">
                            <img src="/img/G-gift2.png">
                            <h3>中位</h3>
                        </div>
                        <a>x` +
          mid +
          `</a>
                    </div>
                    <div class="item">
                        <div class="head">
                            <img src="/img/G-gift3.png">
                            <h3>上位</h3>
                        </div>
                        <a>x` +
          high +
          `</a>
                    </div>
                </div>
            `
      );
    });
  fetch("/json/G-monster.json")
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((monsterdata) => {
      var mlow =
      18 +
      parseInt(monsterdata[normal].low) +
      parseInt(monsterdata[skill].low) +
      parseInt(monsterdata[ult].low);
    var mmid =
      30 +
      parseInt(monsterdata[normal].mid) +
      parseInt(monsterdata[skill].mid) +
      parseInt(monsterdata[ult].mid);

    var mhigh =
      36 +
      parseInt(monsterdata[normal].high) +
      parseInt(monsterdata[skill].high) +
      parseInt(monsterdata[ult].high);

    var crown =
    parseInt(monsterdata[normal].crown) +
    parseInt(monsterdata[skill].crown) +
    parseInt(monsterdata[ult].crown);

    var boss =
    parseInt(monsterdata[normal].boss) +
    parseInt(monsterdata[skill].boss) +
    parseInt(monsterdata[ult].boss);
      $(".monster").html(
        `<div class="rising">
            <div class="item">
                <div class="head">
                    <img src="/img/G-mon1.jpg">
                    <h3>下位</h3>
                </div>
                <a>x` + mlow + `</a>
            </div>
            <div class="item">
                <div class="head">
                    <img src="/img/G-mon2.jpg">
                    <h3>中位</h3>
                </div>
                <a>x` + mmid + `</a>
            </div>
            <div class="item">
                <div class="head">
                    <img src="/img/G-mon3.jpg">
                    <h3>上位</h3>
                </div>
                <a>x` + mhigh + `</a>
            </div>
            <div class="item">
              <div class="head">
                  <img src="/img/G-boss2.png">
                  <h3>週ボス</h3>
              </div>
              <a>x` + boss + `</a>
            </div>
            <div class="item">
              <div class="head">
                  <img src="/img/G-crown.png">
                  <h3>知恵の冠</h3>
              </div>
              <a>x` + crown + `</a>
            </div>
        </div>`
      );
    });

    fetch("/json/S-gift.json")
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((giftdata) => {
      var slow =
        6 +
        parseInt(giftdata[normal].attack[0].low) +
        parseInt(giftdata[skill].other[0].low) +
        parseInt(giftdata[ult].other[0].low) +
        parseInt(giftdata[giftedpoint].other[0].low);
      var smid =
        16 +
        parseInt(giftdata[normal].attack[0].mid) +
        parseInt(giftdata[skill].other[0].mid) +
        parseInt(giftdata[ult].other[0].mid) +
        parseInt(giftdata[giftedpoint].other[0].mid);

      var shigh =
        38 +
        parseInt(giftdata[normal].attack[0].high) +
        parseInt(giftdata[skill].other[0].high) +
        parseInt(giftdata[ult].other[0].high) +
        parseInt(giftdata[giftedpoint].other[0].high);
      $(".desteny").html(
        `
                <div class="rising">
                    <div class="item">
                        <div class="head">
                            <img src="/img/S-gift1.jpg">
                            <h3>下位</h3>
                        </div>
                        <a>x` +
          slow +
          `</a>
                    </div>
                    <div class="item">
                        <div class="head">
                            <img src="/img/S-gift2.jpg">
                            <h3>中位</h3>
                        </div>
                        <a>x` +
          smid +
          `</a>
                    </div>
                    <div class="item">
                        <div class="head">
                            <img src="/img/S-gift3.jpg">
                            <h3>上位</h3>
                        </div>
                        <a>x` +
          shigh +
          `</a>
                    </div>
                </div>
            `
      );
    });
  fetch("/json/S-monster.json")
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((smonster) => {
      var smlow =
        8 +
        parseInt(smonster[normal].attack[0].low) +
        parseInt(smonster[skill].other[0].low) +
        parseInt(smonster[ult].other[0].low) +
        parseInt(smonster[giftedpoint].other[0].low);
      var smmid =
        10 +
        parseInt(smonster[normal].attack[0].mid) +
        parseInt(smonster[skill].other[0].mid) +
        parseInt(smonster[ult].other[0].mid) +
        parseInt(smonster[giftedpoint].other[0].mid);

      var smhigh =
        30 +
        parseInt(smonster[normal].attack[0].high) +
        parseInt(smonster[skill].other[0].high) +
        parseInt(smonster[ult].other[0].high) +
        parseInt(smonster[giftedpoint].other[0].high);

      var scrown =
        2 +
        parseInt(smonster[skill].other[0].crown) +
        parseInt(smonster[ult].other[0].crown) +
        parseInt(smonster[giftedpoint].other[0].crown);

      var sboss =
        3 +
        parseInt(smonster[skill].other[0].boss) +
        parseInt(smonster[ult].other[0].boss) +
        parseInt(smonster[giftedpoint].other[0].boss);
      $(".mon").html(
        `
                <div class="rising">
                    <div class="item">
                        <div class="head">
                            <img src="/img/S-mon1.jpg">
                            <h3>下位</h3>
                        </div>
                        <a>x` +
          smlow +
          `</a>
                    </div>
                    <div class="item">
                        <div class="head">
                            <img src="/img/S-mon2.jpg">
                            <h3>中位</h3>
                        </div>
                        <a>x` +
          smmid +
          `</a>
                    </div>
                    <div class="item">
                        <div class="head">
                            <img src="/img/S-mon3.jpg">
                            <h3>上位</h3>
                        </div>
                        <a>x` +
          smhigh +
          `</a>
                    </div>
                    <div class="item">
                        <div class="head">
                            <img src="/img/S-crown.jpg">
                            <h3>週ボス</h3>
                        </div>
                        <a>x` +
          scrown +
          `</a>
                    </div>
                    <div class="item">
                        <div class="head">
                            <img src="/img/S-boss2.jpg">
                            <h3>足跡</h3>
                        </div>
                        <a>x` +
          sboss +
          `</a>
                    </div>
                </div>
            `
    )});
}
