import  'googlemaps';

//Instructions to every other class on how they can be an argument to 'addMarker'
//'Mappable' interface here is a gatekeeper to the 'addMarker' function below.
//User and Company must satisfy this interface to work with 'addMarker' method
export interface Mappable {
    location: {
      lat: number;
      lng: number;
    };

    //popup window content
    markerContent(): string;
    color: string;
  }
  
  export class CustomMap {
    private googleMap: google.maps.Map;
  
    constructor(divId: string) {
      this.googleMap = new google.maps.Map(document.getElementById(divId), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      });
    }
  
    //this makes it scalable for different things you want to see on the map
    addMarker(mappable: Mappable): void {
      const marker = new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng
        }
      });
  
      //popup info window with marker click event.
      marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
          content: mappable.markerContent()
        });
  
        infoWindow.open(this.googleMap, marker);
      });
    }
  }