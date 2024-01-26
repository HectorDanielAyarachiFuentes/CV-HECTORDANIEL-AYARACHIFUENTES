var date = new Date();
document.getElementById("curr-year").innerHTML = date.getFullYear();


var date = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("current-date").innerHTML = date.toLocaleDateString('es-ES', options);
