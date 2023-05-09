// Save the favorite item to Web Storage
function saveFavorite(favorite) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(favorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  
  // Display the list of favorites
  function displayFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let list = $("<ul>");
    favorites.forEach(function (favorite) {
      list.append($("<li>").text(favorite));
    });
    $("#favorites-list").html(list);
    }
    
    // Handle the form submission
    $("#add-favorite").on("click", function (event) {
    event.preventDefault();
    let favorite = $("#favorite").val();
    saveFavorite(favorite);
    displayFavorites();
    $("#favorite").val("");
    });
    
    // Display the list of favorites when the page loads
    displayFavorites();
  // Handle the click event on the "Favorites" link
$("nav ul li:nth-child(4) a").on("click", function (event) {
    event.preventDefault();
    window.location.href = "favorites.html";
    });
    <script src="app.js"></script>
