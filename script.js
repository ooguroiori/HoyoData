
// 各div要素を取得する
const genshinDiv = document.getElementById('genshinDiv');
const starrailDiv = document.getElementById('starrailDiv');

// 各ボタンの画像要素を取得する
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// 各ボタンがクリックされたときの処理を定義する
button1.addEventListener('click', function() {
    console.log("原神");
    // 既存のアニメーションクラスを削除
    genshinDiv.classList.remove('hidden', 'fade-in-up');
    starrailDiv.classList.add('hidden');

    // 0ms後にアニメーションクラスを追加
    setTimeout(() => {
        genshinDiv.classList.add('fade-in-up');
    }, 0);
});

button2.addEventListener('click', function() {
    console.log("スタレ");

    // 既存のアニメーションクラスを削除
    starrailDiv.classList.remove('hidden', 'fade-in-up');
    genshinDiv.classList.add('hidden');

    // 0ms後にアニメーションクラスを追加
    setTimeout(() => {
        starrailDiv.classList.add('fade-in-up');
    }, 0);
});

/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
    $(this).find('.dropdown-menu2').slideToggle(300);
    $(this).find('.dropdown-menu3').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
$('.dropdown .dropdown-menu2 li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
$('.dropdown .dropdown-menu3 li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

var normal = 0;
var skill = 0;
var ult = 0;

var point;

$('.dropdown-menu li').click(function () {
normal = parseInt($(this).parents('.dropdown').find('input').val());
point = normal + skill + ult;
console.log(point);
}); 
$('.dropdown-menu2 li').click(function () {
skill = parseInt($(this).parents('.dropdown').find('input').val());
point = normal + skill + ult;
console.log(point);
}); 
$('.dropdown-menu3 li').click(function () {
ult = parseInt($(this).parents('.dropdown').find('input').val());
point = normal + skill + ult;
console.log(point);
}); 