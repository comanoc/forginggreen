function alert(message, type, alertPlaceholder) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

function validateNewsletter(){
  var email = document.forms["newsletter-form"]["userEmail"].value;
  var alertPlaceholder = document.getElementById('newsletterAlertPlaceholder');
  // If not null, empty or 0 do the following
  if(email){
    /*
      /   /   = regular expression goes between these
      ^       = matches any string with the following at the beginning
      (  )    = Matching with what is inside these
      .       = Match any character
      +?      = Match the proceeding character 1 or more times but as few as possible
      +       = add the next bit to the expression
      @       = Must be in the string with the characters before
      (.+?)   = 1 or more characters
      \.      = . must be in the string (escaped character)
      (.+?)$  = ends with one or more charactes after the .

      => valid email examples include a@a.a etc

    */
    var emailRe = /^(.+?)+@+(.+?)+\.+(.+?)$/
    if(!emailRe.test(email)){
      alert('<i class="bi bi-exclamation-triangle"></i> Please eneter a valid email', 'warning', alertPlaceholder);
      return false;
    }
    alert('Thank you for your response!', 'success', alertPlaceholder);
    return true;
  }else{
    alert('<i class="bi bi-exclamation-triangle"></i> You have not entered an email', 'danger', alertPlaceholder);
    return false;
  }

}
