/**
 * Created by Administrator on 2017/7/3.
 */
var navShow=document.getElementById('menu');
var navText=document.getElementById('menu-text');
var nav=document.getElementById('nav');
var mainBg=document.getElementById('main-bg');
var menuL=document.getElementById('menu-line');
var menuL1=document.getElementById('menu-l1');
var menuL2=document.getElementById('menu-l2');
var menuL3=document.getElementById('menu-l3');
var navFlag=true;
navShow.onclick=function(){
    if(navFlag){
        nav.className="nav navShow fixed";
        mainBg.style.display='block';
        menuL1.className='menu-l1';
        menuL2.className='menu-l2';
        menuL3.className='menu-l3';
        navText.innerText='关闭';
        menuL.className='menu-line menu-line2';
    }else{
        nav.className="nav fixed";
        mainBg.style.display='none';
        menuL1.className='';
        menuL2.className='';
        menuL3.className='';
        navText.innerText='菜单';
        menuL.className='menu-line';
    }
    navFlag=!navFlag;
}
