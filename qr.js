$(document).ready(function() {
    $('#urlForm').submit(function(event) {
        event.preventDefault();
        var url = $('#urlInput').val();
        if (url.startsWith('https://') || url.startsWith('http://')) {
            generateQRCode(url);
            $('.error').hide();
        } else {
            $('.error').text('يرجى إضافة بروتوكول صحيح (https:// أو http://)').show();
        }
    });

    function generateQRCode(url) {
        var qrCodeDiv = $('#qrCode');
        qrCodeDiv.empty();
        qrCodeDiv.append('<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(url) + '">');
    }
});