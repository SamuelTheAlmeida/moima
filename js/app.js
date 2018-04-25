document.querySelector(".menu").onclick = function() {
	document.documentElement.classList.add("menu-active");
}

document.querySelector(".menu-close").onclick = function() {
	document.documentElement.classList.remove("menu-active");
}

// Main slides
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .stop()
    .show()
    .next()
    .delay(1000)
    .end()
    .appendTo('#slideshow');
},  7000);



$(".blog-moima li").mouseenter(function(){
  $(this).animate({padding: "2em"});
});
$(".blog-moima li").mouseleave(function(){
  $(this).animate({padding: "0.9em"});
});
