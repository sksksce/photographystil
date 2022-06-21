var number=1;
function plusTwo(){
var count=document.getElementById('count');
  
 number++;
  count.innerHTML = number;
}
const press= document.getElementById('press');
  press.addEventListener('click', function onClick(){
  
 press.textContent = 'FACK YOU DIP SHIFTY';
 press.style.backgroundColor = 'yellow';
  

});
