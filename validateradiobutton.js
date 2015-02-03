var getCheckedRadiosFor = function(field) {
	return $('input[name="' + field + '"]:checked');
}

var validateFields = function() {
	var fields = ["meetings", "progress", "bestEmployee"];
	return fields.reduce(function(previous, field) {
		return previous && (getCheckedRadiosFor(field).size() === 1);
	}, true);
}

$(function() {
	//Find Send button
	var btn = $("#btnSend");
	
	//Assign function to button
	btn.click(function() {
		if (validateFields()==true) {
			window.location.href = "4.html";
		}
		else {
			alert("Please fill out all fields");
		}
	})
})