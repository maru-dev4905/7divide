$(document).ready(function(){
    var openBtn = $(".menu-open-btn");
    var closeBtn = $(".menu-close-btn");
    var menu = $(".menu");

    openBtn.click(function(){
        menu.addClass("show");
    });
    closeBtn.click(function(){
        menu.removeClass("show");
    });
})