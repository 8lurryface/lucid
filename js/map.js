function loadMap() {
        var mapOptions = {
            center: new google.maps.LatLng(25.7638584, -80.1917582),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map,
            title: 'Company Name'
          });
    }

    
