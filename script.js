$(document).ready(function() {
  
  let moveUp = $("#moveUp");
  let moveDown = $("#moveDown");
  let p = $("p");

  // console.log(p.eq(0))

  moveUp.click(function() {

    let container = $(".container");

    let last = $(".container > p").last();

    container.prepend(last);
  });

  moveDown.click( function(){

    let container = $(".container");

    let first = $(".container > p").first();

    container.append(first);

  });

});
