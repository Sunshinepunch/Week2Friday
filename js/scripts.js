function add(answer1, answer2, answer3, answer4, answer5) {
  return answer1 + answer2 + answer3 + answer4 + answer5;
}

$(document).ready(function () {
  $("form#intro").submit(function (event) {
    event.preventDefault();
    $(".intro").hide();
    $(".quiz").show();
  });
  $("button").click(function(){
    $("img").fadeOut("slow", function() {
    $("img").fadeIn("fast");
    });

  })



  $("form#quiz").submit(function (event) {
    event.preventDefault();
    let answer1 = parseInt($("input:radio[name=ques1]:checked").val());
    let answer2 = parseInt($("input:radio[name=ques2]:checked").val());
    let answer3 = parseInt($("input:radio[name=ques3]:checked").val());
    let answer4 = parseInt($("input:radio[name=ques4]:checked").val());
    let answer5 = parseInt($("input:radio[name=ques5]:checked").val());
    let result = add(answer1, answer2, answer3, answer4, answer5);

    const username = $("input#username").val();
    $(".username").text(username);

    if (result <= 5) {
      $("#python").show();
    } else if (result > 5 && result <= 10) {
      $("#javascript").show();
    } else if (result > 10) {
      $("#csharp").show();
    }

    $(".quiz").hide();
  });
});


