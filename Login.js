function LoginBtn(){
    var email = document.getElementById("emailIdLogin").value;
    var password = document.getElementById("passwordLogin").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorMessage){
        alert(errorMessage);
        }else{
        alert("Logined In");
        }
      });
}
function SignupBtn(){
    var email = document.getElementById("emailIdLogin").value;
    var password = document.getElementById("passwordLogin").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorMessage){
            alert(errorMessage);
            }else{
            alert("Signed Up");
            }
        // ...
      });
}
function SignOut(){
    alert("Signed Out");
    firebase.auth().signOut();
}
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      //var displayName = user.displayName;
      var email = user.email;
      //var emailVerified = user.emailVerified;
      //var photoURL = user.photoURL;
      //var isAnonymous = user.isAnonymous;
      //var uid = user.uid;
      //var providerData = user.providerData;
      alert(user.email+"has Signed In");
      // ...
    } else {
        alert("No User");
      // User is signed out.
      // ...
    }
  });