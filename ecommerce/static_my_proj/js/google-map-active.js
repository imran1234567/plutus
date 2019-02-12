	//======================================
    //============= Google Map ============= 
    //======================================

    $(window).on('load', function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 23.884012,
                lng: 90.388373
            },
            zoom: 14
        });
    });