$(document).ready(function () {
    var addButton = document.getElementById('addToListButton');
    var removeButton = document.getElementById('removeFromListButton');
    var session = document.getElementById('session');
    addButton.onclick = function () {
        removeButton.style.display = 'block';
        session.style.display = 'block';
        addButton.style.display = 'none';
    };

    removeButton.onclick = function () {
        addButton.style.display = 'block';
        session.style.display = 'none';
        removeButton.style.display = 'none';
    };

    // var actionButton = document.getElementById("goLive");
    // actionButton.onclick = function () {
    //     location.href = "/videoPage.html";
    // };
})