/*
* menu responsive 
*/
let toggler = document.getElementsByClassName('navbar-toggler');
//elemento del document classe nav-toggle
let navToggle = document.querySelector('.nav-toggle');
//elemento del document classe navbar-collapse
let collapse = document.querySelector('.navbar-collapse');
//variabile dove ci farà ricordare se la modale del menu è aperta oppure no (default chiusa)
let statusMenu = false;

/* controller click menu collapse */
toggler[0].addEventListener('click', (e) => {
    if(!statusMenu){
        //settiamo la proprietà della classe nav-toggle
        navToggle.style.height = '250px';
        //settiamo la proprietà della classe navbar-collapse
        collapse.style.display = 'block';
        //settiamo la variabile a true
        statusMenu = true;
    } else {
        //settiamo la proprietà della classe nav-toggle
        navToggle.style.height = '0';
        //Il tempo necessario per far chiudere la modale del nav menu
        setTimeout(e => {
            //Controlliamo se l'altezza della classe nav-toggle è a 0px
            if(navToggle.style.height === '0px'){
                //settiamo la proprietà della classe navbar-collapse
                collapse.style.display = 'none';
            }
        },700);
        //settiamo la variabile a false
        statusMenu = false; 
    }
});