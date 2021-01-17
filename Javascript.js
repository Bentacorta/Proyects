function Random() {
  var x = document.getElementById("myText").value;
        var rnd = Math.floor(Math.random() * x);
        document.getElementById('tb').value = rnd;
}
