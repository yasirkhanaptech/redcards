function display_location_enabled() {
    var str = 'geolocation is not supported in this browser'
    if (navigator.geolocation) {
        str = 'geolocation is supported in this browser'
        alert(str)
    } else {
        alert(str)
    }
}

//  Get Location and Error Handling
function getlocation() {

    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(showPosition,errorHandler,opt)

    } else {  
        alert('geolocation is not supported in this browser')
    }


    function errorHandler(error) {

        switch (error.code) {
            
            case error.PERMISSION_DENIED:
                alert('You Have Denied Access')
                break;
            case error.POSITION_UNAVAILABLE:
                alert('There was a Problem getting your position')
                break;
            case error.TIME_OUT:
                alert('The Application Timeout attempting to get your position')
                break;
            default:
                break;
        }
    }
}


function showPosition(position) {
    var lati = position.coords.latitude
    var long = position.coords.longitude
    alert('this is Latittude value ' + lati+'\nThis is Longitude value '+long)
    // var num = new google.maps.LatLng (lati,long)
    var num = new google.maps.LatLng (lati,long)

    var myOptions = {
        zoom: 15,
        center: num,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var mymap = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
    var marker = new google.maps.Marker(
        {
            position:num,
            map: mymap,
            title:"RED CARDS LIMITED"
        }
    );
}

var opt = {
    enableHighAccuracy: true,
    maximumAge: 50000,
    timeout: 60000
};