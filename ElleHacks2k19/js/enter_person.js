function toggleSideMenu() {
  document.getElementById("sideMenu").classList.toggle('active');
}

function addMarkToMap() {
  var name = document.getElementById("namePerson").value;
  console.log("works");

  var x = name.localeCompare("pascale");

  if (x == 0) {
    initMap(1);
    console.log("works");
  }
}