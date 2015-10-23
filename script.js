
function otherSelect() {
	var other = document.getElementById("otherBox");
		if (document.forms[0].addressType.options[document.forms[0].addressType.selectedIndex].value == "other") {
			other.style.visibility = "visible";
		} else {
			other.style.visibility = "hidden";
                }
}

function validate()
      {
      
         if( document.myForm.Name.value == "" )
         {
            alert( "Please provide your name!" );
            document.myForm.name.focus() ;
            return false;
         }
         
         if( document.myForm.email.value == "" )
         {
            alert( "Please provide your Email!" );
            document.myForm.email.focus() ;
            return false;
         }
         
         if( document.myForm.zipCode.value == "" ||
         isNaN( document.myForm.zipCode.value ) ||
         document.myForm.zipCode.value.length != 5 )
         {
            alert( "Please provide a zip in the format #####." );
            document.myForm.zipCode.focus() ;
            return false;
         }
         
         if( document.myForm.Country.value == "-1" )
         {
            alert( "Please provide your country!" );
            return false;
         }
         return( true );
	  }