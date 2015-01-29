$( document ).ready(function() {

	//Handlebars template
	var source   = $("#project-small-template").html();
	var isMobile = null;
 	var template = Handlebars.compile(source);
  	var data = { projects: [
      {title:"Vincere", flipperID: "myFlipper1", url: "/projects/1-vincere.html", workCategory:"which-uxresearch-item which-coding-item which-uxdesign-item", imageURL: "assets/img/project_thumbnails/vincere.png", styleInfo:"position:relative; top:10px", description:"A site designed to anonymously connect survivors of sexual assault. They would connect over an audio stream and a shared drawing canvas, so they could doodle and create something together while they talk."},
      {title:"Expressway", flipperID: "myFlipper2", url:"/projects/3-expressway.html", workCategory:"which-uxresearch-item which-needfinding-item which-uxdesign-item", imageURL:"assets/img/project_thumbnails/Expressway.png", description:"A series of mobile app games, designed to get kids talking about and telling stories about emotions. Ultimately, this will help with their emotional development."},
      {title:"Rolls of the World", flipperID:"myFlipper3", url:"/projects/4-rollsoftheworld.html", workCategory:"which-needfinding-item", imageURL:"assets/img/project_thumbnails/mr-sushi.jpg", description:"A series of stuffed toys. Each toy is a rolled-up blanket in the style of a food roll from its home country. These toys allow for multiple types of play and learning."},
      {title:"Toadette", flipperID:"myFlipper4", url:"/projects/7-toadette.html", workCategory:"which-needfinding-item which-uxresearch-item", imageURL:"assets/img/project_thumbnails/toadette_stool.jpg", description:"My undergraduate senior thesis. An ergonomic stool with the benefits of a yoga ball and the flexibiliy/mobility of an office chair."},
      {title:"Emoticon Chat", flipperID:"myFlipper10", url:"/projects/5-emoticonvideo.html", workCategory:"which-uxresearch-item which-coding-item which-uxdesign-item", imageURL:"assets/img/project_thumbnails/emoticon-thumb.png", description:"We reimagined a way to express emotions in online communication. After brainstorming and selecting two ideas, we built working prototypes."},
      {title:"Socialize", flipperID:"myFlipper5", url:"/projects/2-socialize.html", workCategory:"which-coding-item which-uxdesign-item", imageURL:"assets/img/project_thumbnails/Socialize-upcoming-events.jpg", description:"A mobile web app where you can broadcast upcoming plans to dormmates. If desired, friends can RSVP, so others can see who's going."},
      {title:"Teacher Time Study at AltSchool", flipperID:"myFlipper6",url:"#", workCategory:"which-uxresearch-item", imageURL:"assets/img/project_thumbnails/time-lapse-altschool.jpg", description:"Observed individual and group classroom activities to explain to broader team what goes on in classroom."},
      {title:"Usability Testing at Google", flipperID:"myFlipper7",url:"#", workCategory:"which-uxresearch-item", imageURL:"assets/img/project_thumbnails/usability-testing-google.jpg", description:"Designed, recruited for, and conducted usability testing for select Google products."},
      {title:"Teacher Planning Study", flipperID:"myFlipper8",url:"#", workCategory:"which-uxresearch-item", imageURL:"assets/img/project_thumbnails/teacher-card-sort.png", description:"Interviewed five teachers. Analyzed to understand and make recommendations for the Personal Learning Plan (PLP), Learner Profile (LP), and general planning."},
      {title:"A Pen in the Style of Ross Lovegrove", flipperID:"myFlipper9",url:"/projects/6-pen.html", workCategory:"which-uxdesign-item", imageURL:"assets/img/project_thumbnails/pen.jpg", description:"Industrial design project to design a pen in the style of a designer."},
      {title:"Who are your students?", flipperID:"myFlipper11", url:"/projects/8-personas.html", workCategory:"which-needfinding-item", imageURL:"assets/img/project_thumbnails/personas-thumbnail.png", description:"Consulting project with a foregin language school for adults in NYC. I send out a survey and interviewed past, current, and non-students to understand what types of students attended Fluent City. At the end, I also worked with the school to understand what sorts of next steps could be taken with these personas, as it related to product offerings."},
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
	$('#myFlipper10').flipper();
	$('#myFlipper11').flipper();

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
		putBackToDefaultState();

		var newlySelectedServiceItem = $(this);
		selectNewService(newlySelectedServiceItem);
		var classArray = this.classList;
		changePortfolioItems(classArray.item(2));
		hideMobileServicePicked(classArray.item(2));
			
	});

	$(".mobile-services").click(function() {
		putBackToDefaultState();

		var serviceItem = "";
		var classArray = this.classList;
		serviceItem = classArray.item(1);
		var length = serviceItem.length;
		serviceItem = serviceItem.substring(0, length - 7);
		serviceItemClass = "." + serviceItem;
		var picked = $("#services").find(serviceItemClass);

		selectNewService(picked);
		
		changePortfolioItems(serviceItem);
		hideMobileServicePicked(serviceItem);
	});

	function selectNewService(serviceSelected) {
		$(serviceSelected).removeClass("notSelected");
		$(serviceSelected).removeClass("col-md-2");
		$(serviceSelected).addClass("selected");
		$(serviceSelected).show();
		$(serviceSelected).addClass("col-md-6")
		$(serviceSelected).find(".small-image").hide();
		$(serviceSelected).find(".service-desc").show();
		$(serviceSelected).find(".big-image").show();
		$("#portfolio").show();
		if(!isMobile) {
			if(isMobile.any()) {
				$('html, body').animate({
    				scrollTop: $("#services").offset().top
				}, 500);
			}
		}
		
	}

	function putBackToDefaultState() {

		if (isMobile === null) {
			console.log("not set yet");
			isMobile = {
				Android: function() {
				    return navigator.userAgent.match(/Android/i);
				},
				BlackBerry: function() {
				    return navigator.userAgent.match(/BlackBerry/i);
				},
				iOS: function() {
				    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
				},
				Opera: function() {
				    return navigator.userAgent.match(/Opera Mini/i);
				},
				Windows: function() {
				    return navigator.userAgent.match(/IEMobile/i);
				},
				any: function() {
				    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				}
			};
			if(isMobile.any()) {
				$("#other-services-mobile").show();
				$(".mobile-services").show();
				$(".service-item").hide();
			}
			console.log("now ismobile is set1");
		} 

		$(".service-item").removeClass("selected");
		$(".service-item").removeClass("col-md-6");
		$(".service-item").removeClass("col-md-3");
		$(".service-item").addClass("col-md-2");
		$(".service-item").addClass("notSelected");
		$(".small-image").show();
		$(".service-desc").hide();
		$(".big-image").hide();
	}

	function hideMobileServicePicked(skillType) {
		skillType = "." + skillType + "-mobile";
		$(skillType).hide();
	}

	function changePortfolioItems(skillType) {
		$(".portfolio-thumbnail").hide();
		skillType = "." + skillType + "-item";
		$(skillType).show();
	}
});

