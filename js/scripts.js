function close_menu(){
if(document.getElementById('sidenav').style.width === "140px"){
  document.getElementById('sidenav').style.width = "0px";
  document.getElementById('close_menu').style.marginLeft = "0px";
  document.getElementById('menu_arrow').style.transform = "rotate(-90deg)";
  document.getElementById('menu_arrow').style.marginLeft = "0px";

} else{
  document.getElementById('sidenav').style.width = "140px";
  document.getElementById('close_menu').style.marginLeft = "140px";
  document.getElementById('menu_arrow').style.transform = "rotate(90deg)";
  document.getElementById('menu_arrow').style.marginLeft = "-5px";

}}


window.onscroll = function show_firma(){
	var x = document.getElementById('show_firma');
	var y = document.body.scrollTop || document.documentElement.scrollTop;

	if( y >= window.innerHeight - (window.innerHeight * 0.9) ){
	x.style.opacity = "1";}

	if( y >= window.innerHeight - (window.innerHeight * 0.4) ){
	document.getElementById('mgal_show').style.opacity = "1";}

	if( y >= window.innerHeight + (window.innerHeight * 0.4 ) ){
	document.getElementById('contact_show').style.opacity = "1";}
}

function scroll1(){
  document.querySelector('.firma').scrollIntoView({
  behavior: 'smooth'
});
}
function scroll2(){
  document.querySelector('.kontakt').scrollIntoView({
  behavior: 'smooth'
});
}
function scroll3(){
  document.querySelector('#top').scrollIntoView({
  behavior: 'smooth'
});
}
function scroll4(){
  document.querySelector('#oprodukty').scrollIntoView({
  behavior: 'smooth'
});
}
function scroll5(){
  document.querySelector('.fcopy').scrollIntoView({
  behavior: 'smooth'
});
}
function scroll_top(n){

	var x = document.getElementsByClassName('container');

	if( n == 1){ window.scrollTo({ top: 0, behavior: 'smooth'});};
	if( n == 2){ window.scrollTo({ top: innerHeight, behavior: 'smooth'});};
}
