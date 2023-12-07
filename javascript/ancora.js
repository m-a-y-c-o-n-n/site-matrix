var url_disc1 = "disciplina1.html";
var url_disc2 = "disciplina2.html";
var url_disc3 = "disciplina3.html";
var url_disc4 = "disciplina4.html";
var url_disc5 = "disciplina5.html";

var disc1 = document.getElementById("card-disc1");
var disc2 = document.getElementById("card-disc2");
var disc3 = document.getElementById("card-disc3");
var disc4 = document.getElementById("card-disc4");
var disc5 = document.getElementById("card-disc5");

disc1.addEventListener('click', function() {
    
    openNextPage(url_disc1);
  
});

disc2.addEventListener('click', function() {
    
    openNextPage(url_disc2);
  
});

disc3.addEventListener('click', function() {
    
    openNextPage(url_disc3);
  
});


disc4.addEventListener('click', function() {
    
    openNextPage(url_disc4);
  
});

disc5.addEventListener('click', function() {
    
    openNextPage(url_disc5);
  
});


function openInNewTab(url) {
    var janela = window.open(url, '_blank');
    janela.focus();
}

function openNextPage(url) {
    var janela = window.open(url, '_parent');
    janela.focus();
}





