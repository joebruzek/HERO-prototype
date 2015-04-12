function addRobot() {
	console.log("add a robot");
	$('#modal').modal('toggle');
}

function submitRobot() {
	$('#robots').append('<li><img src="http://www1.pcmag.com/media/images/340826-irobot-roomba-880-vacuum-cleaning-robot-angle.jpg"><div><p>Robot Name</p></div></li>');
	$('#modal').modal('toggle');
}