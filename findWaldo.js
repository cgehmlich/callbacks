var arr = ["Alice", "Bob", "Waldo", "Winston"]
arr.forEach(function(name){
  if (name === "Waldo") {
    cb = arr.indexOf(name);
    actionWhenFound(cb); // execute callback
  }
});
function actionWhenFound() {
  console.log("Found him at index " + cb);
}
