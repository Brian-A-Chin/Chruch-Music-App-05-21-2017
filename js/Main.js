    var CurrentURL = new URL(window.location.href);
    var URLObject = CurrentURL.searchParams;
    var URI = window.location.href.split(/[\/\?]+/);

    $('.video-thumb').click(function() {
        var video = $(this).attr('src');
        var videoName = $(this).attr('data-name');
        window.location = 'watch.html?name=' + videoName + '&watch=' + video;
    });
    
    $('#search').keyup(function() {
        $('#cancel').show();
        $('.search-container').show();
        var query = this.value.toLowerCase();
        $('#searchList li').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(query) > -1);
        });
    });

    $('#cancel').click(function() {
        $('#cancel,.search-container').hide();
    });






