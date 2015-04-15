Parse.initialize("TVTqnPLdNTzQWEFaR8BCRbovQcIuftp5zrTdxJuf", "5hPmN72Dgc5bnZVergXQccqZ3GcFoteZXxcv5BgV");

var eventsList = [{title: 'Sample Task', description: 'Sample Robot', datetime: new Date(2015, 4, 20, 15)}];

var Task = Parse.Object.extend("Task");
var query = new Parse.Query(Task);
query.find({
  success: function(results) {
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      var date = new Date(object.get('time'));
      var timedate = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate() + 1, date.getHours() - 20, date.getMinutes());
      eventsList.push({title: object.get('name'), description: object.get('robot'), datetime: timedate});
    }
    loadCalendar();
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});


function loadCalendar() {
	for (var i = 0; i < eventsList.length; i++) {
		console.log(eventsList[i].datetime);
	}
	$('#calendar').eCalendar({
	 	weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        textArrows: {previous: '<', next: '>'},
        eventTitle: 'Scheduled Tasks',
        url: '',
        events: eventsList
    });
}