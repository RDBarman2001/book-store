function updatePrice() {
  var price = Math.floor(Math.random() * 20); // Generate random number between 20 and 30
  document.getElementById("dam").innerHTML = "$" + price;
  console.log(price);
}
updatePrice(); // Initial price update on website
