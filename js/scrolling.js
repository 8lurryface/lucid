var current = 0;
var blockArr = ["#main-section","#first-section","#second-section","#third-section", "#fourth-section"];
var slideSpeed = 1500;

function slideBlocks(next){
    if(next !== current){
        $(blockArr[next]).css("left","" + $(window).width() + "px");
        $(blockArr[next]).css("opacity","0");
        $(blockArr[next]).css("display","flex");
        $(blockArr[next]).animate({left: '0px',opacity: 1},slideSpeed);
        $(blockArr[current]).animate({left: "-" + $(window).width() + "px",opacity: 0},slideSpeed,function(){
            $(blockArr[current]).css("display","none");
            current = next;    
        });
    } else {
        $(blockArr[0]).css("left","" + $(window).width() + "px");
        $(blockArr[0]).css("opacity","0");
        $(blockArr[0]).css("display","flex");
        $(blockArr[0]).animate({left: '0px',opacity: 1},slideSpeed);
        $(blockArr[current]).animate({left: "-" + $(window).width() + "px",opacity: 0},slideSpeed,function(){
            $(blockArr[current]).css("display","none");
            current = 0;    
        });
    }
};  