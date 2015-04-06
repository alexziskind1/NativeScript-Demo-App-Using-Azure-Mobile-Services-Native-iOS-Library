var observable = require("data/observable");
var observableArray = require("data/observable-array");
var dialogs = require("ui/dialogs");

var url = "https://nativescript.azure-mobile.net/";
var appKey = "sxkEXetzHmoXqEopwJaHxhydbeOswM38";

var msc = MSClient.clientWithApplicationURLStringWithApplicationKey(url, appKey);

var tasksViewModel = new observable.Observable();
var tasks =  new observableArray.ObservableArray([]);


tasksViewModel.set('tasks', tasks);

tasksViewModel.tapAction = function() {
	var table = msc.tableWithName("TodoItem");
   
    table.readWithCompletion(function(results){
		//console.log(results);
		var items = results.items;
		global.myitems = items;
		console.log('total Count: ' + items.count);
		//console.log('first object ' + items.firstObject);
		
		for (var i = 0; i < items.count; i++) {
			var obj = items.objectAtIndex(i);
			var taskItemText = obj.objectForKey('text');
			console.log(taskItemText);
			tasks.push({name:taskItemText});
		}

    });

};

exports.tasksViewModel = tasksViewModel;