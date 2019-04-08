import {Injectable} from '@angular/core';
import {Init} from '../init-markers';

@Injectable()

export class MarkerService extends Init{
    constructor(){
        super();
        this.load();
    }

    getMarkers(){
        var markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    }

    addMark(newMark){
        var markers= JSON.parse(localStorage.getItem('markers'));

        markers.push(newMark);

        localStorage.setItem('markers',JSON.stringify(markers));
    }

    actualizeMarker(marker, newLat, newLng){
        var markers= JSON.parse(localStorage.getItem('markers'));

        for (var i = 0; i < markers.length; i++) {
            if ( marker.lat == markers[i].lat && marker.lng == markers[i].lng ) {
                markers[i].lat=newLat;
                markers[i].lng=newLng;
            }
        }

        localStorage.setItem('markers',JSON.stringify(markers));
    }

    deleteMarkService(marker){
        var markers= JSON.parse(localStorage.getItem('markers'));

        for (var i = 0; i < markers.length; i++) {
            if ( marker.lat == markers[i].lat && marker.lng == markers[i].lng ) {
                markers.splice(i,1);
            }
        }
        
        localStorage.setItem('markers',JSON.stringify(markers));
    }
}
