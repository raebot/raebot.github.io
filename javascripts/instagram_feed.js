function makeAltText(caption) {
  return !!caption ? caption.text : '';
}

function imageTemplate(source, alt) {
  return "<img src='" + source + "' alt='" + alt + "'>";
}

function parseImageData(data) {
  var imageTags = [];
  for(var i = 0, image; image = data[i]; i++) {
    var source = image.images.standard_resolution.url;
    var alt = makeAltText(image.caption);
    var template = imageTemplate(source, alt);
    imageTags.push(template);
  }
  return imageTags.join("");
}

$.ajax({
  type: "GET",
  "method": "GET",
  url: 'https://api.instagram.com/v1/users/38878930/media/recent?count=5&client_id=e5ecc8cb303e44e2bbc7a1a43eeea118',
  dataType: "jsonp",
  success: function(response){
    var data = response.data;
    var parsedImages = parseImageData(data);
    $(".instagram").html(parsedImages);
  }
});