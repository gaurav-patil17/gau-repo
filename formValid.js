//function formValidation()
//{
	
	
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

function showIt()
{
			var umail = document.registration.email;
            var pass1 = document.registration.passwd;
			
			alert("You have entered following details :"+"Email: "+umail.value+"     Password: "+pass1.value);
			
            //document.write("<h3>Username : </h3>" + umail + "<br>");
            //document.write("<h3>Email : </h3>" + pass1);
}