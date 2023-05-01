
function image(imgurl){
    document.getElementById("main").src=imgurl;
}


function ham(){
    var ham = document.getElementById("option");
    if(ham.style.width=="0px"){
        ham.style.width="300px";
    }
    else{
        ham.style.width="0px";
    }
}


function order(item,num){
    var i,but,food,dinner,breakfast,chinese,indian,drink,lunch;
    var l=document.querySelectorAll(".item").length;

    but=document.getElementsByClassName("all");
    food=document.getElementsByClassName("item");
    for(i=0;i < 7;i++){
        but[i].style.color="grey";
    }
    for(i=0;i < l;i++){
        food[i].style.display="none";
    }
    but[num].style.color="red";

    breakfast=document.querySelectorAll("#breakfast");
    lunch=document.querySelectorAll("#lunch");
    dinner=document.querySelectorAll("#dinner");
    drink=document.querySelectorAll("#drink");
    chinese=document.querySelectorAll("#chinese");
    indian=document.querySelectorAll("#indian");
    if(item=="all"){
        for(i=0;i < l;i++){
            food[i].style.display="block";
        }
    }
    if(item=="breakfast"){
        for(i=0;i < l;i++){
            breakfast[i].style.display="block";
        }
    }
    if(item=="lunch"){
        for(i=0;i < l;i++){
            lunch[i].style.display="block";
        }
    }
    if(item=="dinner"){
        for(i=0;i < l;i++){
            dinner[i].style.display="block";
        }
    }
    if(item=="indian"){
        for(i=0;i < l;i++){
            indian[i].style.display="block";
        }
    }
    if(item=="drink"){
        for(i=0;i < l;i++){
            drink[i].style.display="block";
        }
    }
    if(item=="chinese"){
        for(i=0;i < l;i++){
            chinese[i].style.display="block";
        }
    }

}


 $(document).ready(function() {
    $('#date-input').datepicker({
      dateFormat: 'dd-mm-yy',
      minDate: Date();
    });
  });

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(".nav-menu").toggle();
  });
});

function srolling(num){
    var scro=document.getElementById("chepro");
    var but=document.querySelectorAll("#scro button");
    for(var i=0;i<but.length;i++){
        but[i].style.backgroundColor="grey";
    }
    but[num].style.backgroundColor="rgb(255, 72, 0)";

    scro.scrollLeft=scro.offsetWidth*num;
}
