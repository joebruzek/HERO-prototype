var current_name = '';
var current_index = 0;

var pics = [
	"http://www1.pcmag.com/media/images/340826-irobot-roomba-880-vacuum-cleaning-robot-angle.jpg", //roomba
	"http://www.techreviewer.co.uk/wp-content/uploads/2014/08/project_ep_quadcopter_01_05.jpg",    //quadcopter
	"http://img.timeinc.net/time/photoessays/2008/10_movies/walle.jpg",							   //Wall-E
	"http://imaginepittsburgh.com/now/wp-content/uploads/2014/02/Rosie-the-Robot.jpg"			   //Rosie the Robot
]


var robots = [
	{
		pic: "http://www1.pcmag.com/media/images/340826-irobot-roomba-880-vacuum-cleaning-robot-angle.jpg",
		name: "Sample Roomba"
	},
	{
		pic: "http://www.techreviewer.co.uk/wp-content/uploads/2014/08/project_ep_quadcopter_01_05.jpg",
		name: "Sample Quadcopter"
	},
	{
		pic: "http://img.timeinc.net/time/photoessays/2008/10_movies/walle.jpg",
		name: "Sample Wall-E"
	},
	{
		pic: "http://imaginepittsburgh.com/now/wp-content/uploads/2014/02/Rosie-the-Robot.jpg",
		name: "Sample Rosie the Robot"
	}
]

$(document).ready(function() {
	loadRobots();
});

function loadRobots() {
	$('#robots').empty();
	for (var i = 0; i < robots.length; i++) {
		$('#robots').append('<li><img src="' + robots[i].pic + '"><div><p>' + robots[i].name + '</p><button class="remove-button" onclick="removeButton(' + i + ')"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Remove Robot</button><button class="task-button" onclick="current(' + i + ')"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add a Task</button></div></li>');
	}
}

function addRobot() {
	$('#modal').modal('toggle');
}

function submitRobot() {
	var index = $("#robot-type option:selected").index()
	var name = $('#robot-name').val();
	var pic = pics[index];

	robots.unshift({pic: pic, name: name});

	loadRobots();

	$('#modal').modal('toggle');
}

function current(num) {
	current_name = robots[num].name;
	$('#task-modal').modal('toggle');
  	$('#robot-name-task-modal').text(current_name);
}

function addTask(name) {
	$('#task-modal').modal('toggle');
	$('#robot-name-task-modal').text(current_name);
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