export class Init{

  load(){
    if (localStorage.getItem('markers') === null || localStorage.getItem('markers')=== undefined) {
      var markers=[
        {
          name: 'CC La Churuata',
          lat: 8.286176,
          lng: -62.722916,
          arrastrable: true
        },
        {
          name: 'Villa Asia',
          lat: 8.283275,
          lng: -62.724944,
          arrastrable: true
        },
        {
          name: 'Uriman',
          lat: 8.291832,
          lng: -62.729064,
          arrastrable: false
        }                
      ];

      localStorage.setItem('markers', JSON.stringify(markers));
    }
  }
}