//testing user login
var objPeople = [
	{//Object @ 0 index}
		username: "s118385@bggs.qld.edu.au",
		password: "Student1"
	},
	{//Object @ 1 index
		username: "s3119091@terrace.qld.edu.au",
		password: "Student2"
	}
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for (var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if (username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}

//sumbit button and validation

const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
	e.preventDefault();
	const username = document.getElementById('username')
	const password = document.getElementById('password')
	const errorMessage = document.getElementById('error')

	//styles the display and background of the error message to pink
	errorMessage.style.display = 'block';
	errorMessage.style.backgroundColor = 'pink';

	//checks that the username and password fields have been filled out
	if (username.value === "" || password.value === "") {
		errorMessage.innerText = ('Username and password are required');
		return false;
	}

	if (!usernameIsValid(username.value)) {
		errorMessage.innerText = ('Please enter a valid username or email address');
		return false;
	}

	if (!passwordIsValid(password.value)) {
		errorMessage.innerText = ('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
		return false;
	}

	return true; //can submit form data to server
}

const usernameIsValid = username => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username);
}

const passwordIsValid = password => {
	return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);
}

submitBtn.addEventListener('click', (e) => {
	validate(e);
	getInfo();
});
