var pictures = ["assets/img/a1.jpg",
                "assets/img/a2.jpg",
                "assets/img/a3.jpg",
                "assets/img/a4.jpg"];

var PicturesPanda = document.getElementById("PicturesPanda");
for (var i = 0; i < pictures.length; i++) {
  var photo = document.createElement('img');
  photo.setAttribute('src', pictures[i]);
  photo.setAttribute('class', 'photo');
  PicturesPanda.appendChild(photo);
}