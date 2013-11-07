$(document).ready(function(){
  $("#get_color").on("click", function(event) {
    event.preventDefault();

    $.post("/color", function(response) {

      response_obj = $.parseJSON(response);

      cell_index = response_obj.cell_index;
      color = response_obj.color;

      $("li:nth-child("+cell_index+")").css("background-color", color);
    });
  });
});