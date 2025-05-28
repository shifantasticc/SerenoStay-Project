// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map', // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/streets-v12', // style URL //for dark mode: dark-v11
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

// Create a new marker.
const marker = new mapboxgl.Marker({ color: 'red' })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`,
    ),
  )
  .addTo(map);


// // Adding Image as Map Marker/Pointer
// map.on('load', () => {
//   // Load an image from an external URL.
//   map.loadImage(
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3D2scJNmPJSRGuJ4-4aY8kVgOA8bmNGMjzQ&s',
//     (error, image) => {
//       if (error) throw error;

//       // Add the image to the map style.
//       map.addImage('cat', image);

//       // Add a data source containing one point feature.
//       map.addSource('point', {
//         type: 'geojson',
//         data: {
//           type: 'FeatureCollection',
//           features: [
//             {
//               type: 'Feature',
//               geometry: {
//                 type: 'Point',
//                 coordinates: listing.geometry.coordinates,
//               },
//             },
//           ],
//         },
//       });

//       // Add a layer to use the image to represent the data.
//       map.addLayer({
//         id: 'points',
//         type: 'symbol',
//         source: 'point', // reference the data source
//         layout: {
//           'icon-image': 'cat', // reference the image
//           'icon-size': 0.25,
//         },
//       });
//     },
//   );
// });