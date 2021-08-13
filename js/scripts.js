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
    let answer1 = parseInt($("input:radio[name=ques1]:checked").val());
    let answer2 = parseInt($("input:radio[name=ques2]:checked").val());
    let answer3 = parseInt($("input:radio[name=ques3]:checked").val());
    let result = add(answer1, answer2, answer3);

    if (result <= 3) {
      $("#python").show();
    } else if (result > 3 && result <= 6) {
      $("#javascript").show();
    } else if (result > 6) {
      $("#csharp").show();
    }

    $(".quiz").hide();
  });
});