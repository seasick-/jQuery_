function callAfter(firstAction, secondAction, finalize){
	var finishedCount = 0, result1, result2;

	firstAction().done(function(result){
		finishedCount++;
		result1 = result;
		if(finishedCount === 2){
			finalize(result1, result2);
		}
	});

	secondAction().done(function(result){
		finishedCount++;
		result2 = result;
		if(finishedCount === 2){
			finalize(result1, result2);
		}
	});

}


$.when(firstAction(), secondAction()).then(finalize).done(function(){ 
// arguments holds the result returned by the finalize function.
});

//$.when also correctly handles the case in which the value returned by 
//either (or both) of firstAction or secondAction is not a deferred.