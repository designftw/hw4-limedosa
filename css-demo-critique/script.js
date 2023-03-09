// Toggles a paragraph! :)
var toggleButton = document.getElementById('toggleButton1');
var paragraphToToggle = document.getElementById('paragraphToToggle');


toggleButton.addEventListener('click', function() {
  if (paragraphToToggle.style.display === 'none') {
    paragraphToToggle.style.display = 'block';
  } else {
    paragraphToToggle.style.display = 'none';
  }
});
function toggleItem(itemId, button) {
  var item = document.getElementById(itemId);
  if (item.style.display === 'none') {
    item.style.display = 'block';
    button.remove();
  } else {
    item.style.display = 'none';
  }
}


// // Toggles a second paragraph! :)
// var toggleButton2 = document.getElementById('toggleButton2');
// var paragraphToToggle2 = document.getElementById('paragraphToToggle2');


// toggleButton2.addEventListener('click', function() {
//   if (paragraphToToggle2.style.display === 'none') {
//     paragraphToToggle2.style.display = 'block';
//   } else {
//     paragraphToToggle2.style.display = 'none';
//   }
// });