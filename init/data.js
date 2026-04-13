const getCoordinates = (location) => {
  const coords = {
    "Malibu": [-118.7798, 34.0259],
    "New York City": [-74.0060, 40.7128],
    "Aspen": [-106.8370, 39.1911],
    "Florence": [11.2558, 43.7696],
    "Portland": [-122.6765, 45.5231],
    "Cancun": [-86.8515, 21.1619],
    "Lake Tahoe": [-120.0324, 39.0968],
    "Los Angeles": [-118.2437, 34.0522],
    "Verbier": [7.2263, 46.0964],
    "Serengeti National Park": [34.6857, -2.3333],
    "Amsterdam": [4.9041, 52.3676],
    "Fiji": [178.0650, -17.7134],
    "Cotswolds": [-1.8433, 51.8330],
    "Boston": [-71.0589, 42.3601],
    "Bali": [115.1889, -8.4095],
    "Banff": [-115.5708, 51.1784],
    "Miami": [-80.1918, 25.7617],
    "Phuket": [98.3381, 7.8804],
    "Scottish Highlands": [-4.2026, 57.1200],
    "Dubai": [55.2708, 25.2048],
    "Montana": [-110.3626, 46.8797],
    "Mykonos": [25.3289, 37.4467],
    "Costa Rica": [-83.7534, 9.7489],
    "Charleston": [-79.9311, 32.7765],
    "Tokyo": [139.6917, 35.6895],
    "New Hampshire": [-71.5724, 43.1939],
    "Maldives": [73.2207, 3.2028],
    "Paris": [2.3522, 48.8566],
    "Santorini": [25.4615, 36.3932],
    "Kerala": [76.2711, 10.8505],
    "Goa": [74.1240, 15.2993],
    "Manali": [77.1892, 32.2396],
    "Andaman": [92.6586, 11.7401],
    "Singapore": [103.8198, 1.3521],
    "Berlin": [13.4050, 52.5200],
    "Zermatt": [7.7491, 46.0207],
    "Sri Lanka": [80.7718, 7.8731],
    "Ibiza": [1.4320, 38.9067],
    "Lapland": [26.0, 67.0],
    "London": [-0.1276, 51.5074],
    "Sydney": [151.2093, -33.8688],
    "Toronto": [-79.3832, 43.6532],
    "Morocco": [-7.0926, 31.7917],
    "Seoul": [126.9780, 37.5665]
  };

  return coords[location] || [77.2090, 28.6139]; // default fallback
};

const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60" },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Trending"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic Cities"
  },
  {
    title: "Mountain Retreat",
    description: "Peaceful mountain cabin.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60" },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains"
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Beautiful Italian villa.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Trending"
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Treehouse in forest.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping"
  },
  {
    title: "Beachfront Paradise",
    description: "Beach condo.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60" },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Amazing Pools"
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Lake cabin.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60" },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Camping"
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "City penthouse.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60" },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Iconic Cities"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Swiss Alps chalet.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60" },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Wildlife safari lodge.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Trending"
  },

  // ---------- CONTINUING ALL REMAINING ----------

  {
    title: "Historic Canal House",
    description: "Amsterdam canal house.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Iconic Cities"
  },
  {
    title: "Private Island Retreat",
    description: "Private island stay.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60" },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Trending"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "UK countryside cottage.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Farms"
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Boston house.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60" },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Iconic Cities"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Bali beach house.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60" },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Amazing Pools"
  },

  {
    title: "Snow Cabin in Manali",
    description: "Snow mountain stay.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60" },
    price: 1200,
    location: "Manali",
    country: "India",
    category: "Mountains"
  },
  {
    title: "Backwater Houseboat in Kerala",
    description: "Kerala houseboat.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=60" },
    price: 1100,
    location: "Kerala",
    country: "India",
    category: "Trending"
  },
  {
    title: "Beach Hut in Goa",
    description: "Goa beach hut.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60" },
    price: 700,
    location: "Goa",
    country: "India",
    category: "Amazing Pools"
  },
  {
    title: "Skyline Condo in Singapore",
    description: "City skyline condo.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60" },
    price: 2600,
    location: "Singapore",
    country: "Singapore",
    category: "Iconic Cities"
  },
  {
    title: "Luxury Apartment in Seoul",
    description: "Modern Korea stay.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60" },
    price: 2100,
    location: "Seoul",
    country: "South Korea",
    category: "Iconic Cities"
  },
  {
  title: "Tropical Villa in Phuket",
  description: "Luxury villa in Thailand with private pool.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
  },
  price: 3000,
  location: "Phuket",
  country: "Thailand",
  category: "Amazing Pools"
},
{
  title: "Historic Castle in Scotland",
  description: "Live like royalty in a Scottish castle.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Scottish Highlands",
  country: "United Kingdom",
  category: "Castles"
},
{
  title: "Desert Oasis in Dubai",
  description: "Luxury desert stay with pool.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
  },
  price: 5000,
  location: "Dubai",
  country: "United Arab Emirates",
  category: "Amazing Pools"
},
{
  title: "Rustic Log Cabin in Montana",
  description: "Cozy cabin in nature.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
  },
  price: 1100,
  location: "Montana",
  country: "United States",
  category: "Mountains"
},
{
  title: "Beachfront Villa in Greece",
  description: "Mediterranean beachfront villa.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
  },
  price: 2500,
  location: "Mykonos",
  country: "Greece",
  category: "Amazing Pools"
},
{
  title: "Eco-Friendly Treehouse Retreat",
  description: "Nature-friendly stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
  },
  price: 750,
  location: "Costa Rica",
  country: "Costa Rica",
  category: "Camping"
},
{
  title: "Historic Cottage in Charleston",
  description: "Classic southern charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
  },
  price: 1600,
  location: "Charleston",
  country: "United States",
  category: "Farms"
},
{
  title: "Modern Apartment in Tokyo",
  description: "Explore Tokyo city life.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Tokyo",
  country: "Japan",
  category: "Iconic Cities"
},
{
  title: "Lakefront Cabin in New Hampshire",
  description: "Peaceful lake view stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "New Hampshire",
  country: "United States",
  category: "Camping"
},
{
  title: "Luxury Villa in the Maldives",
  description: "Overwater luxury villa.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
  },
  price: 6000,
  location: "Maldives",
  country: "Maldives",
  category: "Amazing Pools"
},
{
  title: "Luxury Apartment in Paris",
  description: "Elegant Paris stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
  },
  price: 2800,
  location: "Paris",
  country: "France",
  category: "Iconic Cities"
},
{
  title: "Cliffside Villa in Santorini",
  description: "Sunset views over the sea.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 3200,
  location: "Santorini",
  country: "Greece",
  category: "Amazing Pools"
},
{
  title: "Backwater Houseboat in Kerala",
  description: "Relax in Kerala backwaters.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=60",
  },
  price: 1100,
  location: "Kerala",
  country: "India",
  category: "Trending"
},
{
  title: "Beach Hut in Goa",
  description: "Beachside living.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 700,
  location: "Goa",
  country: "India",
  category: "Amazing Pools"
},
{
  title: "Snow Cabin in Manali",
  description: "Snowy mountain stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "Manali",
  country: "India",
  category: "Mountains"
},
{
  title: "Island Resort in Andaman",
  description: "Island getaway.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 3500,
  location: "Andaman",
  country: "India",
  category: "Amazing Pools"
},
{
  title: "Skyline Condo in Singapore",
  description: "City skyline condo.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 2600,
  location: "Singapore",
  country: "Singapore",
  category: "Iconic Cities"
},
{
  title: "Urban Studio in Berlin",
  description: "Modern city studio.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
  },
  price: 1400,
  location: "Berlin",
  country: "Germany",
  category: "Iconic Cities"
},
{
  title: "Luxury Cabin in Switzerland",
  description: "Alpine luxury cabin.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Zermatt",
  country: "Switzerland",
  category: "Mountains"
},
{
  title: "Beach Resort in Sri Lanka",
  description: "Beachfront resort.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Sri Lanka",
  country: "Sri Lanka",
  category: "Amazing Pools"
},
{
  title: "Luxury Villa in Ibiza",
  description: "Party and relax in Ibiza's most luxurious villa.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60",
  },
  price: 4500,
  location: "Ibiza",
  country: "Spain",
  category: "Amazing Pools"
},
{
  title: "Forest Cabin in Finland",
  description: "Northern lights forest stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
  },
  price: 1700,
  location: "Lapland",
  country: "Finland",
  category: "Arctic"
},
{
  title: "Luxury Hotel in London",
  description: "Premium hotel in central London.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=60",
  },
  price: 3000,
  location: "London",
  country: "United Kingdom",
  category: "Iconic Cities"
},
{
  title: "Beach House in Australia",
  description: "Beautiful beach house in Sydney.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 2800,
  location: "Sydney",
  country: "Australia",
  category: "Amazing Pools"
},
{
  title: "Luxury Condo in Toronto",
  description: "Modern condo with skyline views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
  },
  price: 2200,
  location: "Toronto",
  country: "Canada",
  category: "Iconic Cities"
},
{
  title: "Desert Camp in Morocco",
  description: "Stay under the stars in Sahara desert.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 1300,
  location: "Morocco",
  country: "Morocco",
  category: "Camping"
},
{
  title: "Luxury Apartment in Seoul",
  description: "Modern apartment in South Korea.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 2100,
  location: "Seoul",
  country: "South Korea",
  category: "Iconic Cities"
},
{
  title: "Mountain Lodge in Nepal",
  description: "Himalayan lodge experience.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=60",
  },
  price: 1400,
  location: "Kathmandu",
  country: "Nepal",
  category: "Mountains"
},
{
  title: "Countryside Farmhouse in France",
  description: "Relaxing farmhouse stay.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 1300,
  location: "Provence",
  country: "France",
  category: "Farms"
},
{
  title: "Cozy Private Room in Delhi",
  description: "Comfortable private room in the heart of Delhi.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
  },
  price: 800,
  location: "Delhi",
  country: "India",
  category: "Rooms"
},
{
  title: "Modern Room in Bangalore",
  description: "Stylish room with modern amenities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
  },
  price: 900,
  location: "Bangalore",
  country: "India",
  category: "Rooms"
},
{
  title: "Budget Room in Mumbai",
  description: "Affordable room in a prime location.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
  },
  price: 700,
  location: "Mumbai",
  country: "India",
  category: "Rooms"
},
{
  title: "Luxury Room in Dubai Marina",
  description: "Premium room with marina view.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Dubai",
  country: "United Arab Emirates",
  category: "Rooms"
},
{
  title: "Minimal Room in Tokyo",
  description: "Clean and minimal Japanese-style room.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 1500,
  location: "Tokyo",
  country: "Japan",
  category: "Rooms"
},
{
  title: "Student Room in London",
  description: "Affordable student-friendly room.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "London",
  country: "United Kingdom",
  category: "Rooms"
}
];

module.exports = { data: sampleListings };

// 🔥 ADD GEOMETRY TO ALL LISTINGS
const updatedListings = sampleListings.map((listing) => ({
  ...listing,
  geometry: {
    type: "Point",
    coordinates: getCoordinates(listing.location),
  },
}));

module.exports = { data: updatedListings };