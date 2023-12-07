const container = document.querySelector(".container");
const header = document.querySelector("header");
const nav_menu = document.querySelector(".nav-menu");
const nav_button = document.querySelector(".nav-button");
const footer = document.querySelector("footer");
const cronograma = document.querySelector(".cronograma")
 



window.addEventListener('load', () => {
    container.classList.add("mobile");
    if(window.innerWidth <= 800){

        nav_menu.classList.add("desactive");
        container.classList.add("mobile");
        header.classList.add("mobile");
        footer.classList.add("mobile");
 
     } else{

        nav_menu.classList.add("desactive");
        container.classList.remove("mobile");
        header.classList.remove("mobile");
        footer.classList.remove("mobile");
        
     }
});

window.addEventListener('resize', () => {

    if(window.innerWidth <= 800){

        container.classList.add("mobile");       
        header.classList.add("mobile");
        footer.classList.add("mobile");

       
 
     } else{

        container.classList.remove("mobile");
        header.classList.remove("mobile");
        footer.classList.remove("mobile");
        
     }

})


nav_button.addEventListener("click", ()=>{

    if(nav_menu.classList.contains("desactive")){
        nav_menu.classList.remove("desactive");
        nav_button.innerHTML = '<span class="material-symbols-outlined">close</span>';
        
    }else{
        nav_menu.classList.add("desactive");
        nav_button.innerHTML = '<span class="material-symbols-outlined">menu</span>';
        
    }

})

cronograma.querySelector(".botao-expandir").addEventListener("click", ()=>{

    cronograma.classList.toggle("recolhido");
    cronograma.querySelector(".botao-expandir").innerHTML = `<span class="material-symbols-outlined">
    expand_less
    </span>`
})



