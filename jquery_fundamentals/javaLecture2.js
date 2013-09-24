jquery does three things 

1.)find something: like input button 
2.)manipulate something: like change the text on something 
3.)respond to events: 


What is an event?

<html>   ancestors 
<head>...</head>
	<title></title>
</head>
<body>   parents 
	<form action>   child 
		<label>		siblings
		<input>		siblings 


		<input> 
</body>
</html>


everything in jquery starts with a -->   $

start by looking for something. 

bubling --> if you put an event on an ancestor, any decendent of that will be bubled. example, pop-up alert saying "hello", when you click on anywhere on the page


/////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();

		var todo_item = $("input#todo").val();

		var new_todo_item = $("<li><input type= 'checkbox'/>" + todo_item + "</li>").on("click", function)
			// console.log($(this)); this is an excellent source to debug, like ruby puts
			$(this).toggleClass)("completed");
	});

	$("ul").append(new_todo_item);

	$("input#todo").val("");

	});
});
