let counter = document.getElementById("counter");
let btns = document.querySelectorAll(".btn");
let count = 0;


btns.forEach((btn) => {
    btn.addEventListener("click",function(e){
       let styles = e.target.classList;
        
       if(styles.contains("decrease")){
           count--;
           counter.style.color="blue"
       }else if(styles.contains("increase")){
           count++;
           counter.style.color="green"
       }else{
           count = 0;
           counter.style.color="red"
       }

       counter.textContent = count;
    })
})

