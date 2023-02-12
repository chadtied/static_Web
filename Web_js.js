var circle1= document.getElementsByClassName("circle1")[0];
var button= document.getElementById("push");
var mode= document.getElementsByClassName("mode1")[0];
var login= document.getElementsByClassName("login")[0];
var login_user= document.getElementsByClassName("login-user")[0];
var login_way= document.getElementsByClassName("login-way")[0];
var click_img= document.querySelectorAll("div.mode4 img");

var speed= 0.5;
var angle= 0;
var click= 0;
var mode_transX= -40;
var mode_transY= 0;
var mode_width= 80;
var login_scale= 0.1;
var login_opacity= 0;
var mouse_click= 0;
var mouse_step= 0;

circle1.style.rotate= "0deg";

function timer_plus(){
    mode_transX+= 1.6;
    mode_transY-= 1;
    mode_width+= 0.8;
    login_scale+= 0.04;
    login_opacity+= 0.04;
}

function mouseover(){
    speed= 2;
}

function mouseleave(){
    speed= 0.5;
}

function mouseclick(){
    click= 1;
    mouse_step= 0;
    login.style.visibility= "visible";
    if(mode_transX>= 0)
        click= 0;
}

window.addEventListener('click',(event)=>{
    mouse_click= 1;
    mouse_step= 0;
    document.getElementsByClassName("mode4")[0].style.left= event.pageX+ "px";
    document.getElementsByClassName("mode4")[0].style.top= event.pageY+ "px";
})

var click_timer= setInterval(()=>{
    if(mouse_step== 4){
        mouse_click= 0;
        click_img[mouse_step-1].style.visibility= "hidden";
    }
    else if(mouse_click== 1){
        for(var i= 0; i< 4; i++){
            if(click_img[i].style.visibility== "visible")
                click_img[i].style.visibility= "hidden";
        }
        click_img[mouse_step++].style.visibility= "visible";
    }
},60);

var timer= setInterval(function(){
    if(click== 1){
        speed= 4;
        mode.style.transform= "translate("+ mode_transX+ "%,"+ mode_transY+ "%)";
        mode.style.width= mode_width+ "vw";
        login.style.transform= "scale("+login_scale+")";
        login.style.opacity= login_opacity;
        timer_plus();
        if(mode_transX> 0|| mode_transY< -25){
            click= 0;
            login_user.style.visibility= "visible";
            login_way.style.visibility= "visible";
        }
    }

    circle1.style.rotate= angle+"deg";
    angle+= speed;
    if(angle>= 360)
        angle= 0;
},15);