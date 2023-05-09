// Display the list of favorites
function displayFavorites() {
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let list = $("#favorites-list");
list.empty();
favorites.forEach(function (favorite) {
list.append($("<li>").text(favorite));
});
}

// Display the list of favorites when the page loads
$(document).ready(function () {
displayFavorites();
});
<script src="favorites.js"></script>

