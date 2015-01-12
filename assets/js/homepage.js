$( document ).ready(function() {

	//Handlebars template
	var source   = $("#project-small-template").html();
 	var template = Handlebars.compile(source);
  	var data = { projects: [
      {url: "/projects/vincere.html", workCategory:"which-uxresearch-item which-coding-item which-uxdesign-item", imageURL: "assets/img/project_thumbnails/vincere.png", styleInfo:"position:relative; top:10px"},
      {url:"/projects/expressway.html", workCategory:"which-uxresearch-item which-needfinding-item which-uxdesign-item", imageURL:"assets/img/project_thumbnails/Expressway.png"},
      {url:"#", workCategory:"which-needfinding-item", imageURL:"assets/img/project_thumbnails/mr-sushi.jpg"},
      {url:"#", workCategory:"which-needfinding-item which-uxresearch-item", imageURL:"assets/img/project_thumbnails/toadette_stool.jpg"},
      {url:"/projects/socialize.html", workCategory:"which-coding-item which-uxdesign-item", imageURL:"assets/img/project_thumbnails/Socialize-upcoming-events.jpg"},
      {url:"#", workCategory:"which-uxresearch-item", imageURL:"assets/img/project_thumbnails/time-lapse-altschool.jpg"},
      {url:"#", workCategory:"which-uxresearch-item", imageURL:"assets/img/project_thumbnails/usability-testing-google.jpg"},
      {url:"#", workCategory:"which-uxresearch-item", imageURL:"assets/img/project_thumbnails/teacher-card-sort.png"},
      {url:"#", workCategory:"which-uxdesign-item", imageURL:"assets/img/project_thumbnails/pen.jpg"}
    ]};
  	$("#content-placeholder").html(template(data));

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

