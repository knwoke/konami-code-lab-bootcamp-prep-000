const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  document.body.addEventListener('keydown',function(e){
       var key = parseInt(e.which || e.detail);
       var index=0;
       if(key === codes[index]){
         index++;

          if(index === codes.length){
            alert("You did it!");
            index=0;
      }
   }
      else{
        console.log(e.which);
        index=0;
      }
 })
 }

 init();
