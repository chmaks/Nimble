$(function() {
	var $form = $(".cForm_js"),
		$input = $form.find('input');
		
		
	var validateEmail = function(inputValue) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var isValid = regex.test(inputValue);
		if (!isValid) {
			$(".emailError_js").html("email is wrong");
			validateInput = false;
		} 
	};

	var validatePass = function() {
		var regex = /^.*(?=.{6,10})(?=.*[a-zA-Z])(?=.*\d).*$/;
		var isValid = regex.test(inputValue);
		if (!isValid) {
			$(".passError_js").html('password must contains at least one digit from 0-9 one lowercase charactersand one uppercase characters');
			validateInput = false;
		}
	};

	var validateName = function() {
		var regex = /^.*(?=.{4,})(?=.*[a-zA-Z]).*$/;
		var isValid = regex.test(inputValue);
		if (!isValid) {
			$(".nameError_js").html('name must contain at least one lowercase characters and one uppercase characters and at least four characters');
			validateInput = false;
		}
	};

	var validatePhone = function() {
		var regex = /^.*(?=.{10})(?=.*\d).*$/;
		var isValid = regex.test(inputValue);
		if (!isValid) {
			$(".phoneError_js").html('phone must have only numbers and 10 characters');	
			validateInput = false;
		}
	};

	var validateZip = function() {
		var regex = /^.*(?=.{5})(?=.*\d).*$/;
		var isValid = regex.test(inputValue);
		if (!isValid){
			$(".zipError_js").html('zip should be five characters');	
			validateInput = false;
		} 
	};

	
	$form.on("submit", function(e){
		var validateInput = true;
		e.preventDefault();
		
		$.each( $input, function() {
			var self = $(this);
				inputValue = self.val();
				
			if ($.trim(inputValue)){
				if (self.attr("name") == "email") validateEmail();
				if (self.attr("name") == "name") validateName();
				if (self.attr("name") == "pass") validatePass();
				if (self.attr("name") == "phone") validatePhone();
				if (self.attr("name") == "zip") validateZip();				
			} else {
				self.closest('.cInputWrap_js').find(".c-error").html("please fill in the field");
			} 
		});
		if (validateInput)	alert("thank you for comleting the form")
	});
	
	$input.on("focus", function(){
		$(this).closest('.cInputWrap_js').find(".c-error").html("");
	})
});

