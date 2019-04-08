import { Component } from '@angular/core';
import { MarkerService } from './services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})

export class AppComponent {

  // Posicion Inicial
  lat: number = 8.286971;
  lng: number = -62.724769;
  zoom:number = 15;

  // Valores para el form
  markName:string;
  markLat:string;
  markLng:string;
  markArrastrable:string;
  
  // Marcadores:
  markers: marker[];

  constructor(private _markerService:MarkerService){
      this.markers=this._markerService.getMarkers();

      this.markers.forEach(marker => {
          console.log(marker.name + marker.arrastrable);
          
      });
  };

  mapClicked($event:any){

      var newMark={
          name: 'New',
          lat: $event.coords.lat,
          lng: $event.coords.lng,
          arrastrable: false
      }
      this.markers.push(newMark);
  }

  markClicked(mark:marker,index:number){

  }

  posicionFinalMarcador(mark:any, $event:any){

      var actualizacion={
          name: mark.name,
          lat: parseFloat(mark.lat),
          lng: parseFloat(mark.lng),
          arrastable: false
      }

      var newLat=$event.coords.lat;
      var newLng=$event.coords.lng;

      this._markerService.actualizeMarker(actualizacion, newLat, newLng);        
  }

  addMarker(){
      if (this.markArrastrable == 'si') {
          var arrastrableM= true;
      } else {
          var arrastrableM= false;
      }

      var newMark={
          name: this.markName,
          lat: parseFloat(this.markLat),
          lng: parseFloat(this.markLng),
          arrastrable: arrastrableM
      }
      this.markers.push(newMark);
      this._markerService.addMark(newMark);
  }

  deleteMarkArray(marker){
      for (var i = 0; i < this.markers.length; i++) {
          if ( marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng ) {
              this.markers.splice(i,1);
          }
      }

      this._markerService.deleteMarkService(marker);
  }
}

// Interfaz del tipo de marcador
interface marker{
  name:string;
  lat:number;
  lng:number;
  arrastrable:boolean;
}