$(document).ready(function() {	
	$(".inner").slideUp();
	
	$(".section").each(function() {
		var sect = $(this);
		$(sect).find("h3").on("click",function() {
			if($(sect).hasClass("highlight")) {
				// Collapse it here.
				$(sect).removeClass("highlight");
				$(".inner").slideUp();
			} else {
				//Hide content
				$(".inner").slideUp();
				$(".highlight").removeClass("highlight");
				
				//Show this content
				$(this).siblings(".inner").slideDown();
				$(sect).addClass("highlight");
			}
		});
	});
});