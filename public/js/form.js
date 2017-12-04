console.log("beginning of form.js")


//pull login function
//	Hides the items with class 'register-form' slowly
//	Shows the login form
var pullLogin = () =>{
  $('.register-form').hide("slow");
  $('.guest-form').toggle(()=>{
    $('.login-form').animate({height: "toggle", opacity: "toggle"}, "slow",()=>{
      console.log("now that effect has finished and callback function served we can move on")
      });

    });
};
//pull registration page function
//	Hides the items with class 'guest-form' slowly
//	Hides the items with class 'register-form-2' slowly
//	Shows the registering form (first one)
var pullRegistration = ()=>{
  console.log("pull registration");
  $('.guest-form').hide('slow');
  $('.login-form').hide('slow');
  $('.guest-menu').animate({height: "600px", top: "-170px"}, "slow")
  $('.register-form').animate({height: "toggle", opacity: "toggle"}, "slow",()=>{
    console.log('produce register form');
  });
};


//back to guest page
//	Hides the items with class 'register-form' slowly
//	Hides the items with class 'register-form-2' slowly
//	Shows the guest form (first one)
var toGuestPage = ()=>{
  $('.login-form').hide('slow');
  $('.register-form').hide('slow');
  $('.guest-menu').animate({height: "300px", top: "0"}, "slow")
  $('.guest-form').animate({height: "toggle", opacity: "toggle"}, "slow",()=>{
    console.log('welcome guest form has been served');
  });
}



//the following are just the listeners
// to pull login page
  $('.login_page').click(()=>{
    pullLogin();
    console.log("login form will be produced")
  });

// to pull registration page
$('.register_page').click(function(){
  console.log("register page listener");
  pullRegistration();
  console.log("registration form should've been produced by now");
});


// back to guest page
$('.guest_page').click(()=>{
  toGuestPage();
  console.log('back to guest page');
})

$(document).ready(()=>{
  if (onLoad == 1) {
    console.log("1")
    pullLogin();

// Sweet alert, account already found popup
    swal({
      title: "You already have an account",
      text: "Please Login",
      button: "Thank you!",
  });
  }else if(onLoad == 2){
    console.log("2")

    // Sweet alert, no account found popup
    swal({
      title: "Attention!",
      text: "You must register first",
      icon: "error",
      button: "Thank you!",
  });
    pullRegistration()
  }
})

//Prevents the user from scrolling.
var scrollEventHandler = function(){
      window.scroll(0, window.pageYOffset)
}
window.addEventListener("scroll", scrollEventHandler, false);
