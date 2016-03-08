//function formValidation()
//{
	
	//OnBlur function on Username
	function check()
	{
		//alert("hi");
		var useremail = document.registration.email;
		var pass = document.registration.passwd;
		//var pass = document.registration.passwd;
	
		//document.getElementById("passwd").disabled = true;
		var mformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(useremail.value.match(mformat))
		{
		
		
			document.registration.passwd.disabled = false;
			//var pass = document.registration.passwd;
			pass.focus();
			
			
		}
		else
		{
			alert("Please enter valid Email Address");
			useremail.focus();
		}
}

// OnBlur function on Password
function showIt()
{
			var umail = document.registration.email;
            var pass1 = document.registration.passwd;
			var textArea = document.registration.showData;
			
			//alert("You have entered following details :"+"Email: "+umail.value+"     Password: "+pass1.value);
			textArea.value = ("You have entered following details :"+"Email: "+umail.value+"     Password: "+pass1.value);
          //document.registration.showData.write("hi");
            //document.registration.showData.write("<h3>Password : </h3>" + pass1 + "<br>").innerHTML;
}