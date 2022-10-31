var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');
var bio_content = document.querySelector('.bio_content');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(${e.clientX - 17}px, ${e.clientY -17}px, 0)`;
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor2.style.left = x + 'px';
  cursor2.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursor2.classList.add('cursorclick2')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursor2.classList.remove('cursorclick2')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('cursorhover');
    cursor2.classList.add('cursorhover2');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursorhover');
    cursor2.classList.remove('cursorhover2');
  });
})

$(bio_content).hover(function(){
  $(cursor).addClass("whitebg");
  $(cursor2).addClass("whitebg2");
}, 
function(){
  $(cursor).removeClass("whitebg");
  $(cursor2).removeClass("whitebg2");
});