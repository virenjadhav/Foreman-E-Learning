import React from 'react';
// import { Loader } from "@googlemaps/js-api-loader";

const Contact = () =>  {
 
const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}
  return (
    <div>Contact
      <div id="map"></div>
    </div>
  )
}

export default Contact;


 // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // }
  
  // window.initMap = initMap;

  
// or const {Loader} = require('google-maps'); without typescript
 
// const options: LoaderOptions = {/* todo */};
// const loader = new Loader('my-api-key', options);
 
// // const google = await loader.load();
// // const map = new google.maps.Map(document.getElementById('map'), {
// //     center: {lat: -34.397, lng: 150.644},
// //     zoom: 8,
// // });

// const loader = new Loader({
//   apiKey: "YOUR_API_KEY",
//   version: "weekly",
//   ...additionalOptions,
// });

// loader.load().then(() => {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// });



// const loader = new Loader({
//   apiKey: "",
//   version: "weekly",
//   libraries: ["places"]
// });

// const mapOptions = {
//   center: {
//     lat: 0,
//     lng: 0
//   },
//   zoom: 4
// };

// loader
//   .load()
//   .then((google) => {
//     new google.maps.Map(document.getElementById("map"), mapOptions);
//   })
//   .catch(e => {
//     // do something
//   }); 

//   const loadItem =async () => {
//     const google = await loader.load();
//     const map = new google.maps.Map(document.getElementById("map"), mapOptions);
//   }
