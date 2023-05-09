// Function to get favorites from Web Storage and display them in a list
function displayFavorites() {
  // Get the favorites from Web Storage
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Get the favorites list element
  var favoritesList = $("#favorites-list");

  // Clear the favorites list
  favoritesList.empty();

  // Loop through the favorites and add them to the list
favorites.forEach(function(favorite) {
  favoritesList.append("<li>" + favorite + "</li>");
  });
  }
  
  // Function to add a new favorite to Web Storage and the favorites list
  function addFavorite() {
  // Get the new favorite item from the input field
  var newFavorite = $("#new-favorite").val();
  
  // Get the favorites from Web Storage
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  // Add the new favorite to the favorites array
  favorites.push(newFavorite);
  
  // Save the updated favorites array to Web Storage
  localStorage.setItem("favorites", JSON.stringify(favorites));
  
  // Clear the input field
  $("#new-favorite").val("");
  
  // Update the favorites list
  displayFavorites();
  }
  
  // Call the displayFavorites function when the page loads
  $(document).ready(function() {
  displayFavorites();
  });
  
  // Add an event listener to the add favorite button
  $("#add-favorite-btn").click(function() {
  addFavorite();
  });
  <script src="script.js"></script>
