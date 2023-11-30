// Returns a Bootstrap modal instance
let modal = bootstrap.Modal.getOrCreateInstance(
  document.getElementById("manuscript-modal")
);

// Show or hide:
//modal.show();
//modal.hide();

// Update image in modal
function updateModal(e) {
  document.getElementById("manuscript-modal-body").innerHTML =
    "<img src=" + e.target.src + " class='d-block w-100' alt='...'>";
  //document.getElementById('manuscript-modal-title').innerHTML = "";
}

function updateModalF(e) {
  // .../t/thumb_bel.jpg is thumbnail, bel.jpg is full size
  //
  afile = e.target.src;
  i = afile.lastIndexOf("/t/thumb_");
  f2 = afile.slice(0, i + 1) + afile.slice(i + 9);
  console.log("  carousel try: ", f2);
  document.getElementById("manuscript-modal-body").innerHTML =
    "<img src=" + f2 + " class='d-block w-100' alt='...'>";
}
