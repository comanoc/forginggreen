function alert(message, type, alertPlaceholder) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}


function validateContact(){
  var name = document.forms["contact-form"]["name"].value;
  var phone = document.forms["contact-form"]["phone"].value;
  var email = document.forms["contact-form"]["userEmail"].value;
  // If not null, empty or 0 do the following
  if(name && phone && email){
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
      var alertPlaceholder = document.getElementById('emailAlertPlaceholder');
      alert('<i class="bi bi-exclamation-triangle"></i> Please eneter a valid email', 'warning', alertPlaceholder);
      return false;
    }
    /*
      Makes sure name starts only with letters a-z or A-Z or letters À to ÿ
      (Unicode leters A-Z comes before a-z with punctuation symbols between that
      we want to ignore. Could go À-ÿ but would include a multiplication sign
      and a divide sign)
      Allows for spaces at end of first name
      Allows for hyphen for double barrel names
      Allows for ' for names like O'Connell
      Can't start or end with a - or '
      Downside min name length 3 valid characters
    */
    var nameRe = /^[À-ÖØ-öø-ÿA-Za-z+?]+[À-ÖØ-öø-ÿA-Za-z '-]+[À-ÖØ-öø-ÿA-Za-z ]$/
    if(!nameRe.test(name)){
      var alertPlaceholder = document.getElementById('nameAlertPlaceholder');
      alert('<i class="bi bi-exclamation-triangle"></i> Please eneter a valid name', 'warning', alertPlaceholder);
      return false;
    }
    var alertPlaceholder = document.getElementById('contactFormAlertPlaceholder');
    alert('Thank you for your response!', 'success', alertPlaceholder);
    return true;
  }else{
    var alertPlaceholder = document.getElementById('contactFormAlertPlaceholder');
    alert('<i class="bi bi-exclamation-triangle"></i> You have not completed the form!', 'danger', alertPlaceholder);
    return false;
  }

}
