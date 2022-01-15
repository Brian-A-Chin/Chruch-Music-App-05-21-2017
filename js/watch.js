$(window).on('load', function() {
    var WatchID, VideoName = null;

    function SetNextVideo(){
        var random = Math.floor((Math.random() * 3) + 1);
        var video = $("#" + random).attr("src");
        var videoName = $("#" + random).attr("data-name");
        $('.UpNextvideoName').text(videoName);
        $('#upnextvid').attr('src', video + "#t1.0");
        $('#upnextvid').attr('data-name', videoName);
    }

    function SetCurrentVideo(){
        WatchID = URLObject.get('watch');
        VideoName = URLObject.get('name');
        if(WatchID && VideoName != null){
            $('#main-video').attr('src', WatchID);
            $('#main-video-title').text(VideoName);

        }
    }

    function Init(){
        SetNextVideo();
        SetCurrentVideo();
        $('.loader').fadeOut();
        $('#searchList').html( $('#sidebar-vids').html() );

    }


    $('video').on('ended', function() {
        window.location = "watch.html?name=" + VideoName + "&watch=" + WatchID;
    });


    Init();
});