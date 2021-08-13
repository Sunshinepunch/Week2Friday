function add (answer1,answer2,answer3) {
  return (answer1 + answer2 + answer3);
}


$(document).ready(function() {
  $("form#intro").submit(function(event) {
    event.preventDefault();
    $(".intro").hide();
    $(".quiz").show();
  });

  $("form#quiz").submit(function(event) {
    event.preventDefault();
    let answer1 = parseInt($("input:radio[name=chargingCreature]:checked").val());
    let answer2 = parseInt($("input:radio[name=essay]:checked").val());
    let answer3 = parseInt($("input:radio[name=money]:checked").val());
    let result = add(answer1, answer2, answer3);

    if (result <= 3) {
      $("#harry").show();
    } else if (result > 3 && result <= 7) {
      $("#ron").show();
    } else if (result > 7) {
      $("#hermione").show();
    }

    $(".quiz").hide();
    // $(".results").show();
  });
});
