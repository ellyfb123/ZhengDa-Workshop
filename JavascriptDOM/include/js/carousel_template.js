var navIndicator = document.getElementById("navIndicator");
var navContent = document.getElementById("navContent");

var addIndicator = function() {
	var compiled = _.template("<li data-target='#carousel' data-slide-to='<%= index %>' class=''></li>");
	navIndicator.innerHTML += compiled({index: navIndicator.childElementCount});
};

var addContent = function() {
	var compiled = _.template(
		 "<div class='item'>"
		 + "<img src='data:image/gif;base64,R0lGODlhAQABAIAAAFVVVQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='>"
		 + "<div class='container'>"
		 +   "<div class='carousel-caption'>"
		 +     "<h1>New Slide is Here.</h1>"
		 +     "<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>"
		 +     "<p><a class='btn btn-lg btn-primary' href='#' role='button'>Button <%= index%></a></p>"
		 +   "</div>"
		 + "</div>"
		 +"</div>");
    
    navContent.innerHTML += compiled({index: navIndicator.childElementCount});
};

var addSlide = function() {
	addIndicator();
	addContent();
};