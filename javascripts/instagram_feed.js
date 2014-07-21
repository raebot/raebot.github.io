function imageTemplate(url) {
  return "<img src='" + url + "'>";
}

function parseImageData(data) {
  var imageTags = [];
  for(var i = 0, image; image = data[i]; i++) {
    var url = image.images.standard_resolution.url;
    var template = imageTemplate(url);
    imageTags.push(template);
  }
  return imageTags.join("");
}

$.ajax({
  type: "GET",
  "method": "GET",
  url: 'https://api.instagram.com/v1/users/38878930/media/recent?client_id=e5ecc8cb303e44e2bbc7a1a43eeea118',
  dataType: "jsonp",
  success: function(response){
    var data = response.data;
    var parsedImages = parseImageData(data);
    $(".instagram").html(parsedImages);
  }
});