const sampleListings = [
  {
    title: 'Cozy Beachfront Cottage',
    description:
      'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'cozy-beachfront-cottage.jpg',
      url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    location: 'Malibu',
    country: 'United States',
    category: 'Beach',
  },
  {
    title: 'Modern Loft in Downtown',
    description:
      'Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!',
    image: {
      filename: 'modern-loft-in-downtown.jpg',
      url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1200,
    location: 'New York City',
    country: 'United States',
    category: 'Rooms',
  },
  {
    title: 'Mountain Retreat',
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: 'mountain-retreat.jpg',
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 1000,
    location: 'Aspen',
    country: 'United States',
    category: 'Mountains',
  },
  {
    title: 'Historic Villa in Tuscany',
    description:
      'Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.',
    image: {
      filename: 'historic-villa-in-tuscany.jpg',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 2500,
    location: 'Florence',
    country: 'Italy',
    category: 'Castles',
  },
  {
    title: 'Secluded Treehouse Getaway',
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: 'secluded-treehouse-getaway.jpg',
      url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 800,
    location: 'Portland',
    country: 'United States',
    category: 'Camping',
  },
  {
    title: 'Beachfront Paradise',
    description:
      'Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.',
    image: {
      filename: 'beachfront-paradise.jpg',
      url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 2000,
    location: 'Cancun',
    country: 'Mexico',
    category: 'Beach',
  },
  ////////////////////////////////////////////////////////////////
  {
    title: 'Rustic Cabin by the Lake',
    description:
      'Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.',
    image: {
      filename: 'rustic-cabin-by-the-lake.jpg',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 900,
    location: 'Lake Tahoe',
    country: 'United States',
    category: 'Mountains',
  },
  {
    title: 'Luxury Penthouse with City Views',
    description:
      'Indulge in luxury living with panoramic city views from this stunning penthouse apartment.',
    image: {
      filename: 'luxury-penthouse-with-city-views.jpg',
      url: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 3500,
    location: 'Los Angeles',
    country: 'United States',
    category: 'Cities',
  },
  {
    title: 'Ski-In/Ski-Out Chalet',
    description:
      'Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.',
    image: {
      filename: 'ski-in-ski-out-chalet.jpg',
      url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 3000,
    location: 'Verbier',
    country: 'Switzerland',
    category: 'Mountains',
  },
  {
    title: 'Safari Lodge in the Serengeti',
    description:
      'Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.',
    image: {
      filename: 'safari-lodge-in-the-serengeti.jpg',
      url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 4000,
    location: 'Serengeti National Park',
    country: 'Tanzania',
    category: 'Farms',
  },
  {
    title: 'Historic Canal House',
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: 'historic-canal-house.jpg',
      url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1800,
    location: 'Amsterdam',
    country: 'Netherlands',
    category: 'Cities',
  },
  {
    title: 'Private Island Retreat',
    description:
      'Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.',
    image: {
      filename: 'private-island-retreat.jpg',
      url: 'https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 10000,
    location: 'Fiji',
    country: 'Fiji',
    category: 'Beach',
  },
  {
    title: 'Charming Cottage in the Cotswolds',
    description:
      'Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.',
    image: {
      filename: 'charming-cottage-in-the-cotswolds.jpg',
      url: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1200,
    location: 'Cotswolds',
    country: 'United Kingdom',
    category: 'Beach',
  },
  ////////////////////////////////////////////////////
  {
    title: 'Historic Brownstone in Boston',
    description:
      'Step back in time in this elegant historic brownstone located in the heart of Boston.',
    image: {
      filename: 'historic_brownstone_boston.jpg',
      url: 'https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 2200,
    location: 'Boston',
    country: 'United States',
    category: 'Trending',
  },
  {
    title: 'Beachfront Bungalow in Bali',
    description:
      'Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.',
    image: {
      filename: 'beachfront_bungalow_bali.jpg',
      url: 'https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1800,
    location: 'Bali',
    country: 'Indonesia',
    category: 'Trending',
  },
  {
    title: 'Mountain View Cabin in Banff',
    description:
      'Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.',
    image: {
      filename: 'mountain_view_cabin_banff.jpg',
      url: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 1500,
    location: 'Banff',
    country: 'Canada',
    category: 'Trending',
  },
  {
    title: 'Art Deco Apartment in Miami',
    description:
      'Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.',
    image: {
      filename: 'art_deco_apartment_miami.jpg',
      url: 'https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 1600,
    location: 'Miami',
    country: 'United States',
    category: 'Trending',
  },
  {
    title: 'Tropical Villa in Phuket',
    description:
      'Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.',
    image: {
      filename: 'tropical_villa_phuket.jpg',
      url: 'https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 3000,
    location: 'Phuket',
    country: 'Thailand',
    category: 'Trending',
  },
  {
    title: 'Historic Castle in Scotland',
    description:
      'Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.',
    image: {
      filename: 'historic_castle_scotland.jpg',
      url: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 4000,
    location: 'Scottish Highlands',
    country: 'United Kingdom',
    category: 'Trending',
  },
  {
    title: 'Desert Oasis in Dubai',
    description:
      'Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.',
    image: {
      filename: 'desert_oasis_dubai.jpg',
      url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 5000,
    location: 'Dubai',
    country: 'United Arab Emirates',
    category: 'Trending',
  },
  {
    title: 'Rustic Log Cabin in Montana',
    description:
      'Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.',
    image: {
      filename: 'rustic_log_cabin_montana.jpg',
      url: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 1100,
    location: 'Montana',
    country: 'United States',
    category: 'Trending',
  },
  ///////////////////////////////////////////////////////////////
  {
    title: 'Beachfront Villa in Greece',
    description:
      'Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.',
    image: {
      filename: 'beachfront_villa_in_greece.jpg',
      url: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 2500,
    location: 'Mykonos',
    country: 'Greece',
    category: 'Beach',
  },
  {
    title: 'Eco-Friendly Treehouse Retreat',
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: 'eco-friendly_treehouse_retreat.jpg',
      url: 'https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 750,
    location: 'Costa Rica',
    country: 'Costa Rica',
    category: 'Rooms',
  },
  {
    title: 'Historic Cottage in Charleston',
    description:
      'Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.',
    image: {
      filename: 'historic_cottage_in_charleston.jpg',
      url: 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 1600,
    location: 'Charleston',
    country: 'United States',
    category: 'Rooms',
  },
  {
    title: 'Modern Apartment in Tokyo',
    description:
      'Explore the vibrant city of Tokyo from this modern and centrally located apartment.',
    image: {
      filename: 'modern_apartment_in_tokyo.jpg',
      url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    price: 2000,
    location: 'Tokyo',
    country: 'Japan',
    category: 'Cities',
  },
  {
    title: 'Lakefront Cabin in New Hampshire',
    description:
      'Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.',
    image: {
      filename: 'lakefront_cabin_in_new_hampshire.jpg',
      url: 'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1200,
    location: 'New Hampshire',
    country: 'United States',
    category: 'Camping',
  },
  {
    title: 'Luxury Villa in the Maldives',
    description:
      'Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.',
    image: {
      filename: 'luxury_villa_in_the_maldives.jpg',
      url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 6000,
    location: 'Maldives',
    country: 'Maldives',
    category: 'Beach',
  },
  {
    title: 'Ski Chalet in Aspen',
    description:
      'Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.',
    image: {
      filename: 'ski_chalet_in_aspen.jpg',
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 4000,
    location: 'Aspen',
    country: 'United States',
    category: 'Mountains',
  },
  {
    title: 'Secluded Beach House in Costa Rica',
    description:
      'Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.',
    image: {
      filename: 'secluded_beach_house_in_costa_rica.jpg',
      url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    price: 1800,
    location: 'Costa Rica',
    country: 'Costa Rica',
    category: 'Beach',
  },
  {
    title: 'Charming Vineyard Cottage in Tuscany',
    description:
      'Relax among rolling hills and endless vineyards in this charming Tuscan cottage with rustic decor and modern comforts.',
    image: {
      filename: 'vineyard_cottage_tuscany.jpg',
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    price: 2200,
    location: 'Tuscany',
    country: 'Italy',
    category: 'Farms',
  },
  {
    title: 'Urban Loft in Downtown Berlin',
    description:
      'Stay in a stylish, industrial-chic loft right in the heart of Berlin’s bustling city center, close to nightlife and culture.',
    image: {
      filename: 'urban_loft_berlin.jpg',
      url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    price: 1900,
    location: 'Berlin',
    country: 'Germany',
    category: 'Cities',
  },
  {
    title: 'Cozy Mountain Lodge in the Swiss Alps',
    description:
      'Experience alpine luxury in this cozy mountain lodge with panoramic views, perfect for skiing or hiking adventures.',
    image: {
      filename: 'mountain_lodge_swiss_alps.jpg',
      url: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    price: 3500,
    location: 'Zermatt',
    country: 'Switzerland',
    category: 'Mountains',
  },
  {
    title: 'Colorful Bohemian Apartment in Lisbon',
    description:
      'Enjoy the vibrant colors and eclectic style of this bohemian apartment, steps away from Lisbon’s famous viewpoints.',
    image: {
      filename: 'bohemian_apartment_lisbon.jpg',
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    price: 1400,
    location: 'Lisbon',
    country: 'Portugal',
    category: 'Cities',
  },
  {
    title: 'Desert Oasis Villa in Marrakech',
    description:
      'Find peace and luxury in this stunning desert villa surrounded by palm trees and traditional Moroccan architecture.',
    image: {
      filename: 'desert_oasis_villa_marrakech.jpg',
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    price: 2800,
    location: 'Marrakech',
    country: 'Morocco',
    category: 'Trending',
  },
];

module.exports = { data: sampleListings };
