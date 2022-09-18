var name_input = document.getElementById("name");
var profile_input = document.getElementById("profile_url");
var email_input = document.getElementById("email_id");
var password_input = document.getElementById("password_id");

var button = document.getElementById("button_signUp");

var loginContainer = document.getElementById("loginContainer");
var signupContainer = document.getElementById("signUpContainer");
var friend_container = document.getElementById("friendContainer");



// button.addEventListener("click", function (event) {
//   data = {
//     'name': name_input.value,
//     'profile': profile_input.value,
//     'email': email_input.value,
//     'password': password_input.value,
//     'friends': [],
//     'posts':[]
//   };

//   window.localStorage.setItem("dataKey", JSON.stringify(data));
//   a =  JSON.parse(window.localStorage.dataKey);

// Users.push(data);
// console.log(Users);
// window.localStorage.setItem('users_array',JSON.stringify(Users) );
//  b =  JSON.parse(window.localStorage.users_array);
// localStorage.removeItem('users_array');

//console.log(a);

// function data_user(name, email,pass)
// {
//   this.name = name;
//   this.email = email;
//   this.pass = pass;
// }

// var u1 = new data_user(name_input.value, email_input.value, password_input.value);
// Users.push(u1);
// console.log(Users);
// localStorage.setItem('userStorage',JSON.stringify(Users));

// var Users = [];
var data_user;

function displayLogin() {
  data_user = {
    name: name_input.value,
    profile: profile_input.value,
    email: email_input.value,
    password: password_input.value,
    friends: [],
    posts :[]
  };

  var data = JSON.parse(localStorage.getItem('usersName'))
  if (data === null) {
      var users_array = []
      users_array.push(data_user)
      localStorage.setItem('usersName', JSON.stringify(users_array))
  }
  else {

      var users_array = data

      var checking_email;
      data.forEach(e => {
          if (e.email == email_input.value) {
              checking_email = "matched"
          } else {
              // if (checking_email === "checking_email") {
              //     checking_email = "unmatched"
              checking_email = "unmatched";
          }

      });

      if (checking_email == "matched") {
          alert("This Email Has already been used!")
        }
         
      else if (checking_email == "unmatched") {
          users_array.push(data_user)
          localStorage.setItem('usersName', JSON.stringify(users_array))
      }
  }

  
  // Users.push(data_user);
  // console.log(Users);
  // localStorage.setItem("storageArray", JSON.stringify(Users));
  loginContainer.style.display = "block";
  signupContainer.style.display = "none";

  if(name_input.value == "")
    {
        alert("Plz fill the name text field. it is mandatory!!!");
        loginContainer.style.display = "none";
        signupContainer.style.display = "block";
    }
    else if(email_input.value == "")
        {
          alert("Plz fill the email field. it is mandatory!!!");
        loginContainer.style.display = "none";
        signupContainer.style.display = "block";

        }
    else if(password_input.value == "")
    {
      alert("Plz fill the password field. Otherwise you are not allowed to login.");
        loginContainer.style.display = "none";
        signupContainer.style.display = "block";

    }
    else
    {
      alert("Everything is alright. You are ready to login now.");

    }
    // event.preventDefault(); 
}

function displaySignUp() {
  loginContainer.style.display = "none";
  signupContainer.style.display = "block";
}

function simplyLogin()
{
  loginContainer.style.display = "block";
  signupContainer.style.display = "none";
}


// this is log-in page JS:

var user_storage_array;

function checkingCredentails() {
  var loginEmail = document.getElementById("email_loginId");
  var loginPassword = document.getElementById("psw_loginId");
  user_storage_array = JSON.parse(localStorage.getItem("usersName"));
  console.log("Local storage array is given below:");
  console.log(user_storage_array);

  // var verified_person = user_storage_array.find((element) => {
  //   if (
  //     element.email == loginEmail.value &&
  //     element.password == loginPassword.value
  //   ) {
  //     friend_container.style.display = "block";
  //     loginContainer.style.display = "none";
  //     console.log(verified_person);
  //     friendScreen();
  //   } else {
  //     alert("Sorry, something is wrong at somewhere.");
  //   }
  // });

  user_storage_array.forEach(function(e)
  {
    if((e.email == loginEmail.value)  && (e.password == loginPassword.value))
    {
      localStorage.setItem("current_user" , loginEmail.value);
      friend_container.style.display = "block";
      loginContainer.style.display = "none";
      friendScreen();
    } 
    else
    {
      console.log("Error!!!");
    }
  })

  // for (var i = 0; i < user_storage_array.length; i++) {
  //   if (
  //     (user_storage_array[i].email == loginEmail.value) &&
  //     (user_storage_array[i].password == loginPassword.value)
  //   )
  //   {

  //     friend_container.style.display = "block";
  //     loginContainer.style.display = "none";
  //     friendScreen();
  //   } 
  //   else 
  //   {
  //     alert("Sorry in-valid credentials");
  //   }
  // }
}

// Friend's Screen Code:

var p = document.getElementById("friendNames_text");

function friendScreen() {
  var loginEmail = document.getElementById("email_loginId");
  var loginPassword = document.getElementById("psw_loginId");
  for (var i = 0; i < user_storage_array.length; i++) {
    if (
      (user_storage_array[i].email == loginEmail.value) &&
      (user_storage_array[i].password == loginPassword.value)
       )
       
       {  
          var h1 = document.getElementById("friend_heading");
          var h2 = document.getElementById("ymk");
          h1.innerText = "Welcome to " + user_storage_array[i].name + " friends screen.";
          h2.innerText = "You May know them " + user_storage_array[i].name + " .";
        }
  }
}

// function addFriend() {
//   var userName = prompt(" Enter the user name:");
//   var friendName = prompt(" Enter the friend name:");

//   for (var i = 0; i < Users.length; i++) {
//     if (userName == Users[i].name) {
//       Users[i].friends.push(friendName);
//     }
//     var res = Users[i].friends;
//     p.innerHTML = res;
//   }
//   console.log(Users.friends);
// }

// function removeFriend() {
//   var userName = prompt(" Enter the user name:");
//   var friendName = prompt(" Enter the friend name:");

//   for (var i = 0; i < Users.length; i++) {
//     if (userName == Users[i].name) {
//       var friend_index = Users[i].friends.indexOf(friendName); // finding the index of the friend
//       console.log(friend_index);
//       Users[i].friends.splice(friend_index, 1);
//       console.log(Users[i].friends);
//     } else {
//       alert("there is no user with the given name.");
//     }

//     var res = Users[i].friends;
//     p.innerHTML = res;
//   }
//   console.log(Users.friends);
// }

// var btn_click = 0;
// var btn_click_fn = document.getElementsByClassName('.addtheseButton');



// function btn_click()
// {
//   btn_click_count +=1;
//   console.log(btn_click_count);
//   if(btn_click_count > 1)
//   {
//     alert("Sorry.");
//     p.innerHTML = "";
//   }
// }

function addthese(event) {
  var loginEmail = document.getElementById("email_loginId");
  

  var m = event.target;

  var ans = m.parentElement.children[0].innerHTML;

  console.log(" Add friend name is --> " + ans);
  var stored_name = ans;

  for (var i = 0; i < user_storage_array.length; i++) {
    if (user_storage_array[i].email == loginEmail.value) {
      user_storage_array[i].friends.push(ans);
      var res = user_storage_array[i].friends;
      p.innerHTML = res;
    }
  }
  // user_storage_array.friends.forEach(element => {
  //   if(Math.count(element) > 1)
  //   {
  //     alert(" Already added in your friend list.");
  //   }
    
  // });

}



function removethese(event) {
  var loginEmail = document.getElementById("email_loginId");

  var m = event.target;

  var ans = m.parentElement.children[0].innerHTML;

  console.log(" remove friend name was --> " + ans);

  for (var i = 0; i < user_storage_array.length; i++) {
    if (user_storage_array[i].email == loginEmail.value) {
      var index_of_friend = user_storage_array[i].friends.indexOf(ans);
      user_storage_array[i].friends.splice(index_of_friend, 1);
    
    var res = user_storage_array[i].friends;
    p.innerHTML = res;
    }
  }
}

// Post Screen code goes onwards from here:

var post_screen = document.getElementById("post_screen");

function postData() {
  post_screen.style.display = "block";
  friend_container.style.display = "none";

  // var description_text = document.getElementById('description');
  // var file_input = document.getElementById('input_file');
  // var post_array = data.posts.push(description_text.innerHTML, file_input.value);
  // console.log("The post of the user is = \n " + post_array);
}

var description_text = document.getElementById("description");
var posts_div = document.getElementById('posts');

function pushPostdata() {
  var loginEmail = document.getElementById("email_loginId");
  var number_input = document.getElementById("input_number");
  
  for (var i = 0; i < user_storage_array.length; i++) {
    if (user_storage_array[i].email == loginEmail.value) {
   user_storage_array[i].posts.push(description_text.value);
   user_storage_array[i].posts.push(number_input.value);

    }
  }
  posts_div.style.display = "block";
}

function posts()
{
  var posts_text = document.getElementById('posts_p');
  var posts_heading = document.getElementById('posts_h2');
  var loginEmail = document.getElementById("email_loginId");  
  for (var i = 0; i < user_storage_array.length; i++) {
    if (user_storage_array[i].email == loginEmail.value) {
      posts_heading.innerHTML = `This post is created by ${user_storage_array[i].name}
      and the post is given as follows: `;
      posts_div.style.display = "block";
      posts_text.innerHTML = description_text.value;
    }
  }
}
