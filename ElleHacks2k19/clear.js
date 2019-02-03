function clearText(){
  document.getElementById("namePerson") = "";
}


function toggleSideMenu() {
  document.getElementById("sideMenu").classList.toggle('active');
}

function addMarkToMap() {
  var name = document.getElementById("namePerson").value;

  var x = name.localeCompare("pascale");

  if (x == 0) {
    console.log("works");
  }
}