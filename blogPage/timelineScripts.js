// Jquery functions

// //Regular JS functions
function addEntry(userName, data) {
  // var blogEntries = document.getElementById("blogEntries");
  $("#blogEntries").append("<div class='entry'>" +
    "<h2>" + userName + "</h2>" +
    "<p>" + data + "<p>" + "</div>" );
}

$(function() {
    $(".textBox").keypress(function (e) {
        if(e.which == 13) {
            addEntry("Frank", "Enter Key Logged");
            $(this).val("");
            e.preventDefault();
        }
    });
});
