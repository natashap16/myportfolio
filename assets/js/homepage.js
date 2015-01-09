$( document ).ready(function() {

	//image flipper
	$('#myFlipper').flipper();

	// Closes the sidebar menu
	$("#menu-close").click(function(e) {
	    e.preventDefault();
	    $("#sidebar-wrapper").toggleClass("active");
	});

	// Opens the sidebar menu
	$("#menu-toggle").click(function(e) {
	    e.preventDefault();
	    $("#sidebar-wrapper").toggleClass("active");
	});

	// Scrolls to the selected menu item on the page
	$(function() {
	    $('a[href*=#]:not([href=#])').click(function() {
	        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	            if (target.length) {
	                $('html,body').animate({
	                    scrollTop: target.offset().top
	                }, 1000);
	                return false;
	            }
	        }
	    });
	});

	//opens portfolio per skill
	$(".service-item").click(function() {
		$(".service-item").removeClass("selected");
		$(".service-item").addClass("notSelected");
		$(".small-image").show();
		$(".big-image").hide();
		$(this).removeClass("notSelected");
		$(this).addClass("selected");
		$(this).find(".small-image").hide();
		$(this).find(".big-image").show();
		$("#portfolio").show();
		var classArray = this.classList;
		for(i = 0; i < classArray.length; i++) {
			console.log("checking item " + i + ": " + classArray[i]);
			if(classArray[i].indexOf("which") >= 0) {
				changePortfolioItems(classArray[i]);
			}
		}
	});

	function changePortfolioItems(skillType) {
		$(".portfolio-thumbnail").hide();
		skillType = "." + skillType + "-item";
		$(skillType).show();
	}
});

