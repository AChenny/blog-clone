// Jquery functions

$(document).keypress(entryKeyPress(event));
//Regular JS functions
function addEntry(userName, data) {
  // var blogEntries = document.getElementById("blogEntries");
  $("#blogEntries").append("<div class='entry'>" +
    "<h2>" + userName + "</h2>" +
    "<p>" + data + "<p>" + "</div>" );
}

function entryKeyPress(e) {
  if (e.keyCode == 13) {
    addEntry("Frank", "Keypressed on entry");
  }
}
