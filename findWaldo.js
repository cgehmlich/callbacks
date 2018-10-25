// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      cb = i;
      found(cb);   // execute callback
    }
  }
}

function actionWhenFound() {

  console.log("Found him at index " + cb);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);