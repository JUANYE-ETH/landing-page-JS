document.addEventListener("DOMContentLoaded", () => {
	const signupForm = document.querySelector(".signup-form");

	signupForm.addEventListener("submit", (event) => {
		event.preventDefault();
		alert("Thank you for signing up!");
		signupForm.reset();
	});
});
