var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

/**
 * Получение фотографии с сайта flickr.com
 */
function getPhoto() {
    $.getJSON(flickrAPI, {
        tags: "Кот",
        tagmode: "any",
        format: "json"
    }).done(function (result, status, xhr) {
        $.each(result.items, function (index, item) {
            $("<img>").attr("src", item.media.m).appendTo("#output");
            if (index == 0) return false;

        });

    }).fail(function (xhr, status, error) {
        alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
    });
}