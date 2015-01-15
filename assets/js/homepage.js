$( document ).ready(function() {

	//Handlebars template
	var source   = $("#project-small-template").html();
 	var template = Handlebars.compile(source);
  	var data = { projects: [
      {title:"Vincere", flipperID: "myFlipper1", url: "/projects/vincere.html", workCategory:"which-uxresearch-item which-coding-item which-uxdesign-item", imageURL: "assets/img/project_thumbnails/vincere.png", styleInfo:"position:relative; top:10px", description:"A site designed to anonymously connect survivors of sexual assault. They would connect over an audio stream and a shared drawing canvas, so they could doodle and create something together while they talk."},
      {title:"Expressway", flipperID: "myFlipper2", url:"/projects/expressway.html", workCategory:"which-uxresearch-item which-needfinding-item which-uxdesign-item", imageURL:"assets/img/project_thumbnails/Expressway.png", description:"A series of mobile app games, designed to get kids talking about and telling stories about emotions. Ultimately, this will help with their emotional development."},
      {title:"Rolls of the World", flipperID:"myFlipper3", url:"#", workCategory:"which-needfinding-item", imageURL:"assets/img/project_thumbnails/mr-sushi.jpg", description:"A series of stuffed toys. Each toy is a rolled-up blanket in the style of a food roll from its home country. These toys allow for multiple types of play and learning."},
      {title:"Toadette", flipperID:"myFlipper4", url:"#", workCategory:"which-needfinding-item which-uxresearch-item", imageURL:"assets/img/project_thumbnails/toadette_stool.jpg", description:"My undergraduate senior thesis. An ergonomic stool with the benefits of a yoga ball and the flexibiliy/mobility of an office chair."},
      {title:"Socialize", flipperID:"myFlipper5", url:"/projects/socialize.html", workCategory:"which-coding-item which-uxdesign-item", imageURL:"assets/img/project_thumbnails/Socialize-upcoming-events.jpg", description:"A mobile web app where you can broadcast upcoming plans to dormmates. If desired, friends can RSVP, so others can see who's going."},
      {title:"Teacher Time Study at AltSchool", flipperID:"myFlipper6",url:"#", workCategory:"which-uxresearch-item", imageURL:"assets/img/project_thumbnails/time-lapse-altschool.jpg", description:"Observed individual and group classroom activities to explain to broader team what goes on in classroom."},
      {title:"Usability Testing at Google", flipperID:"myFlipper7",url:"#", workCategory:"which-uxresearch-item", imageURL:"assets/img/project_thumbnails/usability-testing-google.jpg", description:"Designed, recruited for, and conducted usability testing for select Google products."},
      {title:"Teacher Planning Study", flipperID:"myFlipper8",url:"#", workCategory:"which-uxresearch-item", imageURL:"assets/img/project_thumbnails/teacher-card-sort.png", description:"Interviewed five teachers. Analyzed to understand and make recommendations for the Personal Learning Plan (PLP), Learner Profile (LP), and general planning."},
      {title:"A Pen in the Style of Ross Lovegrove", flipperID:"myFlipper9",url:"#", workCategory:"which-uxdesign-item", imageURL:"assets/img/project_thumbnails/pen.jpg", description:"Industrial design project to design a pen in the style of a designer."}
    ]};
  	$("#content-placeholder").html(template(data));

	//image flipper
	$('#myFlipper1').flipper();
	$('#myFlipper2').flipper();
	$('#myFlipper3').flipper();
	$('#myFlipper4').flipper();
	$('#myFlipper5').flipper();
	$('#myFlipper6').flipper();
	$('#myFlipper7').flipper();
	$('#myFlipper8').flipper();
	$('#myFlipper9').flipper();

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

