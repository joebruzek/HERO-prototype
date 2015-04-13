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
	for (var i = 0; i < robots.length; i++) {
		$('#robots').append('<li><img src="' + robots[i].pic + '"><div><p>' + robots[i].name + '</p></div></li>');
	}
}

function addRobot() {
	$('#modal').modal('toggle');
}

function submitRobot() {
	var index = $("#robot-type option:selected").index()
	var name = $('#robot-name').val();
	var pic = pics[index];

	$('#robots').prepend('<li><img src="' + pic + '"><div><p>' + name + '</p></div></li>');
	$('#modal').modal('toggle');
}