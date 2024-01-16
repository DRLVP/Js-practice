// get element from DOM

const word = document.querySelectorAll('.word');
word.forEach((al)=>{

        document.addEventListener('keypress', (e)=>{
            if (e.key === al.firstChild.textContent) {
                al.classList.add('active');
            }else{
                al.classList.remove('active');   
            }
        })
    }
   
)