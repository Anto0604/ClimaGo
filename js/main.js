$(document).ready(function(){
  const API_URL='https://api.chucknorris.io/jokes/';
var categories = "";
  $.ajax({
  url: API_URL + 'categories',
  type: 'GET',
success: function(res) {
$.each(res, function(index, value){
     var category = "<div class='card'>";
  category += "<h5 class='card-header'>Categoria</h5>";
    category += "<div class='card-body'>";
      category += "<h5 class='card-title'>"+ value + "</h5>";
      category += "<p class='card-text'></p>";
      category += "<button type='button' class='btn btn-danger'>Aceptar</button>";
      category += "</div></div></div>";

      categories += category
})
$("#categoriesContainer").html(categories)
}
});
})