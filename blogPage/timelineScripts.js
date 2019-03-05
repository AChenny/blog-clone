// Jquery functions
$(document).ready(function() {

});

//Regular JS functions
function addEntry(userName, data) {
  // var blogEntries = document.getElementById("blogEntries");
  $("#blogEntries").append("<div class='entry'>" +
    "<h2>" + userName + "</h2>" +
    "<p>" + data + "<p>" + "</div>" );
}
