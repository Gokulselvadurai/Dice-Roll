$(document).ready(function(){
  $(".bottom").click(function(){
    var number1 = Math.floor(Math.random() * 6)+1;
    var number2 = Math.floor(Math.random() * 6)+1;
    var src1="image/dice"+number1+".jpg";
    var src2="image/dice"+number2+".jpg";

    document.querySelectorAll("img")[0].setAttribute("src",src1);
    document.querySelectorAll("img")[1].setAttribute("src",src2);
    if(number1<number2){
        document.querySelector(".result").innerHTML="Player 2 wins 🏆";
    }
    else if(number1>number2){
        document.querySelector(".result").innerHTML="🏆 Player 1 wins";
    }
    else {
        document.querySelector(".result").innerHTML="Draw 🤝";
    }
    var bm = new Audio("music/song.mp3");
    bm.play();
  });
});
