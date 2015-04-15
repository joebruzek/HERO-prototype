Parse.initialize("TVTqnPLdNTzQWEFaR8BCRbovQcIuftp5zrTdxJuf", "5hPmN72Dgc5bnZVergXQccqZ3GcFoteZXxcv5BgV");

var current_name = '';
var current_index = 0;

var pics = [
	"http://www1.pcmag.com/media/images/340826-irobot-roomba-880-vacuum-cleaning-robot-angle.jpg", //roomba
	"http://www.techreviewer.co.uk/wp-content/uploads/2014/08/project_ep_quadcopter_01_05.jpg",    //quadcopter
	"http://img.timeinc.net/time/photoessays/2008/10_movies/walle.jpg",							   //Wall-E
	"http://imaginepittsburgh.com/now/wp-content/uploads/2014/02/Rosie-the-Robot.jpg"			   //Rosie the Robot
]

var roomba_tasks = ['Vaccuum', 'Sweep', 'DJ Roomba'];
var quadcopter_tasks = ['Dust', 'Baby Monitor', 'Security Monitor', 'Barrel Roll'];
var walle_tasks = ['Compact Trash', 'Water Plants', 'Watch Hello Dolly', 'Save Humanity'];
var rosie_tasks = ['Wash Dishes', 'Make Bed', 'Cook Dinner', 'Paint Walls'];


var robots = [
	{
		pic: "http://www1.pcmag.com/media/images/340826-irobot-roomba-880-vacuum-cleaning-robot-angle.jpg",
		name: "Sample Roomba",
		type: 0
	},
	{
		pic: "http://www.techreviewer.co.uk/wp-content/uploads/2014/08/project_ep_quadcopter_01_05.jpg",
		name: "Sample Quadcopter",
		type: 1
	},
	{
		pic: "http://img.timeinc.net/time/photoessays/2008/10_movies/walle.jpg",
		name: "Sample Wall-E",
		type: 2
	},
	{
		pic: "http://imaginepittsburgh.com/now/wp-content/uploads/2014/02/Rosie-the-Robot.jpg",
		name: "Sample Rosie the Robot",
		type: 3
	}
]

$(document).ready(function() {
	loadRobots();
});

function loadRobots() {
	$('#robots').empty();
	for (var i = 0; i < robots.length; i++) {
		$('#robots').append('<li><img src="' + robots[i].pic + '"><div><p>' + robots[i].name + '</p><div class="btn-group-vertical robot-buttons" role="group"><button type="button" class="btn robot-button" onclick="removeButton(' + i + ')"><span class="glyphicon glyphicon-remove" style="color:#FF0000;" aria-hidden="true"></span> Remove Robot</button><button type="button" class="btn robot-button" onclick="current(' + i + ')"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add a Task</button></div></div></li>');
	}
}

function addRobot() {
	$('#modal').modal('toggle');
}

function submitRobot() {
	var index = $("#robot-type option:selected").index()
	var name = $('#robot-name').val();
	var pic = pics[index];

	robots.unshift({pic: pic, name: name, type: index});

	loadRobots();

	$('#modal').modal('toggle');
}

function current(num) {
	current_name = robots[num].name;
	current_index = num;
	$('#task-modal').modal('toggle');
	$('#task-type').empty();
	if (robots[num].type == 0) {
		$.each(roomba_tasks, function(key, value) {   
			$('#task-type')
	        .append($("<option></option>")
	        .text(value)); 
		});
	} else if (robots[num].type == 1) {
		$.each(quadcopter_tasks, function(key, value) {   
			$('#task-type')
	        .append($("<option></option>")
	        .text(value)); 
		});
	} else if (robots[num].type == 2) {
		$.each(walle_tasks, function(key, value) {   
			$('#task-type')
	        .append($("<option></option>")
	        .text(value)); 
		});
	} else if (robots[num].type == 3) {
		$.each(rosie_tasks, function(key, value) {   
			$('#task-type')
	        .append($("<option></option>")
	        .text(value)); 
		});
	} 
  	$('#robot-name-task-modal').text(current_name);
}

function addTask(name) {
	$('#task-modal').modal('toggle');
	$('#robot-name-task-modal').text(current_name);
}

function submitTask() {
	var Task = Parse.Object.extend("Task");
	var task = new Task();
	 
	task.set("name", $('#task-name').val());
	task.set("robot", current_name);
	task.set("time", $('#task-time').val());
	 
	task.save(null, {
	  success: function(task) {
	    // Execute any logic that should take place after the object is saved.
	    alert('New object created with objectId: ' + task.id);
	  },
	  error: function(task, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    alert('Failed to create new object, with error code: ' + error.message);
	  }
	});

	$('#task-modal').modal('toggle');
}

function removeButton(num) {
	console.log("REMOVING " + num);
	current_index = num;
	current_name = robots[num].name;
	$('#remove-modal').modal('toggle');
  	$('#robot-name-remove-modal').text(current_name);
}

function removeRobot() {
  	robots.splice(current_index, 1);
  	loadRobots();
	$('#remove-modal').modal('hide');
}