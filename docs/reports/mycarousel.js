function nerf() {
  //console.log("jquery bnr2");
  var daString = $("#stuffs1").html();
  //console.log("daString:", daString);
  var daArray = daString.split("\n");
  //console.log("daArray: ", daArray);
  var firstcard = true;
  var indicators = "";
  var inners = "";
  var active = "";
  daArray.forEach((v, i) => {
    console.log(`v: ${v} i: ${i}`);
    if (v !== "") {
      if (firstcard) {
        aria_current = 'aria-current = "true"';
        active = "active";
        firstcard = false;
      }
      // debug
      // $("#stuffs2").children().append(`<li>${v}</li>`);

      indicators = `<button type="button" data-bs-target="#manuscriptCarousel" data-bs-slide-to="${i}" class="${active}" ${aria_current} aria-label="Slide ${
        i + 1
      }"></button>`;
      console.log(`indicators: ${indicators}`);

      // nix for a minute
      // $("#carousel-indicators").children().append(indicators);
      $("#carousel-indicators").appendTo(indicators);

      inners = `<div class="carousel-item ${active}">
        <img src="./manuscripts/t/thumb_${v}" class="d-inline-block h-50" alt="..." onClick="updateModalF(event); modal.show();" />
      </div>`;
      console.log(`inners: ${inners}`);
      $("#carousel-inner").children().append(inners);
    }
    // psa_EMIP161, Weiner 56, cover, Menelik Psalter, Leather work back cover.jpg

    aria_current = "";
    active = "";
  });
}

$(document).ready(function () {
  $("#stuffs1").load("carousel.txt");
  setTimeout(() => {
    nerf();
  }, 500);
});
