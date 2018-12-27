$(document).ready(function () {
    $('#registrationModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var option = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('form').trigger('reset')
        modal.find('.modal-title').text(option);
        document.getElementById('modal-success-button').innerHTML = option;
        if (option === 'Sign In') {
            document.getElementById('nameForm').style.display = 'none';
        }

        var actionButton = document.getElementById("modal-success-button");
        actionButton.onclick = function () {
            if (actionButton.innerHTML == 'Sign In')
                location.href = "/user.html";
        };
    })
})