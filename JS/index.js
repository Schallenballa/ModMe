//import GoTrue from "gotrue-js";

window.onload = function(){
  console.log("Works");

  const currentUser = netlifyIdentity.currentUser();


  console.log(currentUser);

  //Checks to see if the user is logged in
  if(!currentUser) {
      console.log("Not Logged In");
      document.getElementById('authenticated').style.display = 'block';
      document.getElementById('authenticated2').style.display = 'block';
  } else {
      console.log(currentUser + " is logged in");
      document.getElementById('authenticated').style.display = 'none';
      document.getElementById('authenticated2').style.display = 'none';
  }
}
netlifyIdentity.onload = function(){
  const currentUser = netlifyIdentity.currentUser();


  console.log(currentUser);

  //Checks to see if the user is logged in
  if(!currentUser) {
      console.log("Not Logged In");
      document.getElementById('authenticated').style.display = 'block';
      document.getElementById('authenticated2').style.display = 'block';
  } else {
      console.log(currentUser + " is logged in");
      document.getElementById('authenticated').style.display = 'none';
      document.getElementById('authenticated2').style.display = 'none';
  }
}

loaction.reload();
