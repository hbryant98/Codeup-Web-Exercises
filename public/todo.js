
function deleteItem(itemToDelete) {		
	$.post("todo-json.php?id="+itemToDelete+"&action=delete",function(item){		
		console.log(item);
		$('#thingsToDo').empty();
		$.get("todo-json.php", function(items) {	//enter different address here	
			console.log(items);
		 items.forEach(function(items) {
		 	date = moment().format("ddd, MMM");
		 	var row = "<tr class='data_row_" + items.id+"'>" +
					"<td>"+
						items.content+
					"</td>"+
					"<td>"+
						items.priority+
					"</td>"+
					"<td>"+
						items.due_date+
					"</td>"+
					"<td>" + 
						"<button class='btn btn-danger btn-xs delete' onclick='deleteItem("+items.id+")'>X</button>"+ 
					"</td>"+
					"<td>" +
						"<button class='btn btn-success btn-xs done' onclick='completeItem("+items.id+")'>Complete</button>"+
					"</td"+	
				"</tr>";
            	$('#thingsToDo').append(row);       			
		});
		});
	});
}

function completeItem(itemToComplete) {
	$.post("todo-json.php?id="+itemToComplete+"&action=complete", function(item){
		console.log(item);
	$('.done').addClass('disabled');
	// $('.done').closest('tr').addClass('disabled');
	});
}



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
		$.post("todo-json.php", data, function(items) {		//enter diff address here
			$('#content').val('');
			$('#priority').val('');
			$('#due_date').val('');
		});

	});

	$("#btn-show-items").click(function(event) {
		event.preventDefault(); //prevents page from reloading
		$('#thingsToDo').empty();
		$.get("todo-json.php", function(items) {	//enter different address here	
			console.log(items);
		 items.forEach(function(items) {
		 	date = moment().format("ddd, MMM");
		 	var row = "<tr class='data_row_" + items.id+"'>" +
					"<td>"+
						items.content+
					"</td>"+
					"<td>"+
						items.priority+
					"</td>"+
					"<td>"+
						items.due_date+
					"</td>"+
					"<td>" + 
						"<button class='btn btn-danger btn-xs delete' onclick='deleteItem("+items.id+")'>X</button>"+ 
					"</td>"+
					"<td>" +
						"<button class='btn btn-success btn-xs done' onclick='completeItem("+items.id+")'>Complete</button>"+
					"</td"+	
				"</tr>";
            	$('#thingsToDo').append(row);       			
		});
		});
	});	
	$("#btn-sort-by-priority").click(function(event) {
		event.preventDefault(); //prevents page from reloading
		$('#thingsToDo').empty();
		$.get("todo-json.php?order_by=priority", function(items) {	
			console.log(items);
		 items.forEach(function(items) {
		 	var row = "<tr class='data_row_" + items.id+"'>" +
					"<td>"+
						items.content+
					"</td>"+
					"<td>"+
						items.priority+
					"</td>"+
					"<td>"+
						items.due_date+
					"</td>"+
					"<td>" + 
						"<button class='btn btn-danger btn-xs delete' onclick='deleteItem("+items.id+")'>X</button>"+ 
					"</td>"+
					"<td>" +
						"<button class='btn btn-success btn-xs done' onclick='completeItem("+items.id+")'>Complete</button>"+
					"</td"+	
				"</tr>";
            	$('#thingsToDo').append(row);  	
		});
		});
	});	
	$("#btn-sort-by-due_date").click(function(event) {
		event.preventDefault(); //prevents page from reloading
		$('#thingsToDo').empty();
		$.get("todo-json.php?order_by=due_date", function(items) {	
			console.log(items);
		 items.forEach(function(items) {
		 	var row = "<tr class='data_row_" + items.id+"'>" +
					"<td>"+
						items.content+
					"</td>"+
					"<td>"+
						items.priority+
					"</td>"+
					"<td>"+
						items.due_date+
					"</td>"+
					"<td>" + 
						"<button class='btn btn-danger btn-xs delete' onclick='deleteItem("+items.id+")'>X</button>"+ 
					"</td>"+
					"<td>" +
						"<button class='btn btn-success btn-xs done' onclick='completeItem("+items.id+")'>Complete</button>"+
					"</td"+	
				"</tr>";
            	$('#thingsToDo').append(row);  			
		});
		});
	});
	$("#btn-sort-by-content").click(function(event) {
		event.preventDefault(); //prevents page from reloading
		$('#thingsToDo').empty();
		$.get("todo-json.php?order_by=content", function(items) {	
			console.log(items);
		 items.forEach(function(items) {
			var row = "<tr class='data_row_" + items.id+"'>" +
					"<td>"+
						items.content+
					"</td>"+
					"<td>"+
						items.priority+
					"</td>"+
					"<td>"+
						items.due_date+
					"</td>"+
					"<td>" + 
						"<button class='btn btn-danger btn-xs delete' onclick='deleteItem("+items.id+")'>X</button>"+ 
					"</td>"+
					"<td>" +
						"<button class='btn btn-success btn-xs done' onclick='completeItem("+items.id+")'>Complete</button>"+
					"</td"+	
				"</tr>";
            	$('#thingsToDo').append(row);  			
		});
		});
	});
	$("#btn-sort-by-complete").click(function(event) {
		event.preventDefault(); //prevents page from reloading
		$('#thingsToDo').empty();
		$.get("todo-json.php?complete=true&order_by=priority", function(items) {	
			console.log(items);
		 items.forEach(function(items) {
				var row = "<tr class='data_row_" + items.id+"'>" +
					"<td>"+
						items.content+
					"</td>"+
					"<td>"+
						items.priority+
					"</td>"+
					"<td>"+
						items.due_date+
					"</td>"+
					"<td>" + 
						"<button class='btn btn-danger btn-xs delete' onclick='deleteItem("+items.id+")'>X</button>"+ 
					"</td>"+
					"<td>" +
						"<button class='btn btn-success btn-xs done' onclick='completeItem("+items.id+")'>Complete</button>"+
					"</td"+	
				"</tr>";
            	$('#thingsToDo').append(row);  			
		});
		});
	});
	

	
		
});


