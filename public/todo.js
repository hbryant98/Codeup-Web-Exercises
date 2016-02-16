$(document).ready(function() {
console.log("document loaded");
	$("#btn-new-item").click(function(event) {
		event.preventDefault();
		var content = $("#content").val();
		var priority = $("#priority").val();
		var date = $("#due_date").val();
		var data = {
			"content": content,
			"priority": priority,
			"due_date": date
		};
		$.post("todo-json.php", data, function(item) {		
			console.log(item);
		});
	});

	$("#btn-show-items").click(function(event) {
		event.preventDefault(); //prevents page from reloading
		$.get("todo-json.php", function(items) {		
			console.log(items);
		// $("td").html(content);
		// $("td").html(priority);
		 items.forEach(function(items) {
		 	console.log(items);
		 	// date = moment().format("ddd, MMM");
            $('#thingsToDo').append(
                '<tr><td>' + items.content + '</td><td>' + items.priority + '</td><td>' + items.due_date + '</td><td>');		
		});
	});
	});	
});