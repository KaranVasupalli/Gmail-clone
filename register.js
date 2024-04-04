// document.getElementById("submit").addEventListener('click',myfunc);
// document.getElementById("submit").addEventListener("click",loginUser);

// function myfunc(event) {
//     event.preventDefault();

//     var  username = document.getElementById('user').value;
//     var  email = document.getElementById('register-email').value;
//     var  password = document.getElementById('register-pass').value;

//     localStorage.setItem('Is_name',username);
//     localStorage.setItem('Is_email',email);
//     localStorage.setItem('Is_pass',password);
// }

var register = document.getElementById("submit").addEventListener("click",userRegistration);
// var login = document.getElementById("login-submit").addEventListener("click",loginUser);


function userRegistration() {
    
    const userData = {
        name:document.getElementById('user').value,
        email: document.getElementById('register-email').value,
        password: document.getElementById('register-pass').value
    };
    
    localStorage.setItem('UsersLogin', JSON.stringify(userData));
}

// function loginUser() {
//     const loginEmail = document.getElementById('login-email').value
//     const loginPass = document.getElementById('login-pass').value
//     if (localStorage.getItem('UsersLogin')) {
//         const loginDeets = JSON.parse(localStorage.getItem('UsersLogin'))
//         if (loginEmail === loginDeets.email && loginPass === loginDeets.password) {
//             console.log('Login successful')
//         } else {
//             console.log('Wrong credentials')
//         }
//     } else {
//         console.log('Not a registered user')
//     }
// }



// document.getElementById("submit").addEventListener("click",userRegistration);

// function userRegistration() {
    
//     const userData = {
//         name:document.getElementById('user').value,
//         email: document.getElementById('register-email').value,
//         password: document.getElementById('register-pass').value
//     };
    
//     localStorage.setItem('UsersLogin', JSON.stringify(userData));
// }




// Function to hash passwords
// function hashPassword(password) {
//     // Use a proper hashing algorithm (e.g., bcrypt) in a real application
//     return password; // For demonstration purposes, we're just returning the plain password
// }

// function userRegistration() {
//     const name = document.getElementById('user').value;
//     const email = document.getElementById('register-email').value;
//     const password = hashPassword(document.getElementById('register-pass').value);

//     // Form validation
//     if (!name || !email || !password) {
//         console.log('Please fill in all fields');
//         return;
//     }

//     const userData = {
//         name: name,
//         email: email,
//         password: password
//     };

//     // Check if user already exists
//     if (localStorage.getItem('UsersLogin')) {
//         console.log('User already exists');
//         return;
//     }

//     localStorage.setItem('UsersLogin', JSON.stringify(userData));
//     console.log('User registered successfully');
// }

// function loginUser() {
//     const loginEmail = document.getElementById('login-email').value;
//     const loginPass = hashPassword(document.getElementById('login-pass').value);

//     const storedUserData = JSON.parse(localStorage.getItem('UsersLogin'));

//     // Form validation
//     if (!loginEmail || !loginPass) {
//         console.log('Please fill in all fields');
//         return;
//     }

//     if (!storedUserData) {
//         console.log('Not a registered user');
//         return;
//     }

//     if (loginEmail === storedUserData.email && loginPass === storedUserData.password) {
//         console.log('Login successful');
//     } else {
//         console.log('Wrong credentials');
//     }
// }

// document.getElementById("submit").addEventListener("click", userRegistration);
// document.getElementById("login-submit").addEventListener("click", loginUser);
