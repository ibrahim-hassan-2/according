let button = document.querySelectorAll('button');
let ouccordion = document.querySelectorAll('#ouccordion');

for( let i = 0 ; i < ouccordion.length ; i++)
{
    button[i].addEventListener('click' , function(){
        if( ouccordion[i].style.height == 0)
        {
            button[i].classList.remove('active');
            button[i].classList.add('Notactive');
            ouccordion[i].style.height = ouccordion[i].scrollHeight + 'px';
        }else{
            button[i].classList.add('active');
            button[i].classList.remove('Notactive');
            ouccordion[i].style.height = null;
        }
    });
}
