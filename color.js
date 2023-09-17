let cursor = document.querySelector(".rectangle");

cursor.addEventListener("mousemove", function (details) {
  //for knowing the total details of rectangle
  var rectanglelocation = cursor.getBoundingClientRect();
  //here clientX is used for knowing deails of x axis
  var insiderecval = details.clientX - rectanglelocation.left;

  if (insiderecval < rectanglelocation.width / 2) {
    var redcolor = gsap.utils.mapRange(
      0,
      rectanglelocation.width / 2,
      255,
      0,
      insiderecval
    );
    gsap.to(cursor, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4,
    });
  } else {
    var bluecolor = gsap.utils.mapRange(
      rectanglelocation.width / 2,
      rectanglelocation.width,
      0,
      255,
      insiderecval
    );
    gsap.to(cursor, {
      backgroundColor: `rgb(0,0,${bluecolor})`,
      ease: Power4,
    });
  }
});

//white when we left cursor from rectangle

cursor.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    backgroundColor: "white",
  });
});
