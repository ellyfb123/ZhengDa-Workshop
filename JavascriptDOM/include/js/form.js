
var email = document.getElementById("email");
var password = document.getElementById("password");
var repeatPassword = document.getElementById("repeatPassword");
var birthday = document.getElementById("birthday");
var gender = document.getElementById("gender");
var hobby = document.getElementById("hobby");
var desc = document.getElementById("desc");

var genders = document.getElementsByName("gender");
var hobbies = document.getElementsByName("hobby");

var validateForm = function() {

	if (email.value === "") {
		setError(email, "请输入用户名");
	} else {
		clearError(email);
	}

	if (password.value === "" || repeatPassword.value === "" || password.value !== repeatPassword.value) {
		setError(repeatPassword, "请核对密码");
	} else {
		clearError(repeatPassword);
	}

	if (birthday.value === "") {
		setError(birthday, "请输入生日");
	} else {
		clearError(birthday);
	}

	//setError(hobby, "请至少选择一项爱好");


	return true;
};

var setError = function(node, message) {
	helpText = node.nextElementSibling;
	container = node.parentElement;

	helpText.innerText = message;
	container.classList.add("error");
};

var clearError = function (node) {
	helpText = node.nextElementSibling;
	container = node.parentElement;
	helpText.innerText = "";
	container.classList.remove("error");
};

var submitForm = function() {
	alert(validateForm() ? "Success" : "Failure");
};