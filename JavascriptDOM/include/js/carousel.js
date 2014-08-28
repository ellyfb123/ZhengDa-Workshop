var navIndicator = document.getElementById("navIndicator");
var navContent = document.getElementById("navContent");

var addIndicator = function() {
	var newNode = document.createElement("li");
	newNode.setAttribute("data-target", "#carousel");
	newNode.setAttribute("data-slide-to", navIndicator.childElementCount + "");
	newNode.setAttribute("class", "");

	navIndicator.appendChild(newNode);
};

var addContent = function() {
	var newNode = document.createElement("div");
	newNode.setAttribute("class", "item");

	var imgNode = document.createElement("img");
	imgNode.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAFVVVQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==");

	var containerNode = document.createElement("div");
	containerNode.setAttribute("class", "container");

	var captionNode = document.createElement("div"); 
	captionNode.setAttribute("class", "carousel-caption");

	var titleNode = document.createElement("h1"); 
	captionNode.innerText = "New Slide is Here";

	var contentNode = document.createElement("p");
	contentNode.innerText = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.";

	var buttonBarNode = document.createElement("p");

	var buttonNode = document.createElement("a");
	buttonNode.setAttribute("class", "btn btn-lg btn-primary");
	buttonNode.setAttribute("href", "#");
	buttonNode.setAttribute("role", "button");
	buttonNode.innerText = "Button";

	buttonBarNode.appendChild(buttonNode);
	captionNode.appendChild(titleNode);
	captionNode.appendChild(contentNode);
	captionNode.appendChild(buttonBarNode);

	containerNode.appendChild(captionNode);
	newNode.appendChild(imgNode);

	newNode.appendChild(containerNode);

	navContent.appendChild(newNode);

};

var addSlide = function() {
	addIndicator();
	addContent();
};