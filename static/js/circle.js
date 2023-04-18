$(document).ready(function() {
    $(function() {
        $("#steps-menu div").click(function(event) {
            //Replaces main content
            event.preventDefault();
            $(this).addClass("is-active");
            $(this).siblings().removeClass("is-active");
            var step = $(this).attr("data-id");
            if($(".pc .main h2").eq(currentNum-1).hasClass(step)) {
                $(".pc .main h2").eq(currentNum-1).addClass('active-text').siblings().removeClass('active-text');
                $(step).fadeToggle();
            }

            currentNum = step.substr(6, 1);
            swap();
            clearInterval(autoSwap);
        });

        //slideshow style interval
        var currentNum = 2;
        var autoSwap = setInterval(swap, 4000);
        
        //pause slideshow and reinstantiate on mouseout
        $('.titles, #steps-menu div').hover(function () {
            clearInterval(autoSwap);
        }, function () {
           autoSwap = setInterval(swap, 4000);
        });

        //swap images function
        function swap() {
            $("#steps-menu div:eq("+ (currentNum-1) +")").addClass("is-active");
            $("#steps-menu div:eq("+ (currentNum-1) +")").siblings().removeClass("is-active");
            var step = $("#steps-menu div:eq("+ (currentNum-1) +")").attr("data-id");

            if($(".pc .main h2").eq(currentNum-1).hasClass(step)) {
                $(".pc .main h2").eq(currentNum-1).addClass('active-text').siblings().removeClass('active-text');
                $(step).fadeToggle();
            }
          
            if(currentNum == 8) {
                currentNum = 0;
            } else {
                currentNum ++;
            }
        }
    });

    $(function() {
        $("#steps-menus div").click(function(event) {
            //Replaces main content
            event.preventDefault();
            $(this).addClass("is-active");
            $(this).siblings().removeClass("is-active");
            var step = $(this).attr("data-id");
            if($(".mob .main h2").eq(currentNum-1).hasClass(step)) {
                $(".mob .main h2").eq(currentNum-1).addClass('active-text').siblings().removeClass('active-text');
                $(step).fadeToggle();
            }

            currentNum = step.substr(6, 1);
            swap();
            clearInterval(autoSwap);
        });

        //slideshow style interval
        var currentNum = 2;
        var autoSwap = setInterval(swap, 4000);
        
        //pause slideshow and reinstantiate on mouseout
        $('.titles, #steps-menus div').hover(function () {
            clearInterval(autoSwap);
        }, function () {
           autoSwap = setInterval(swap, 4000);
        });

        //swap images function
        function swap() {
            $("#steps-menus div:eq("+ (currentNum-1) +")").addClass("is-active");
            $("#steps-menus div:eq("+ (currentNum-1) +")").siblings().removeClass("is-active");
            var step = $("#steps-menus div:eq("+ (currentNum-1) +")").attr("data-id");

            if($(".mob .main h2").eq(currentNum-1).hasClass(step)) {
                $(".mob .main h2").eq(currentNum-1).addClass('active-text').siblings().removeClass('active-text');
                $(step).fadeToggle();
            }
          
            if(currentNum == 8) {
                currentNum = 0;
            } else {
                currentNum ++;
            }
        }
    });

});