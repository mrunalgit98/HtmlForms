
            const text=document.querySelector('#text');
            const textError=document.querySelector('.text-error');
            text.addEventListener('input',function(){
                let name=RegExp('[A-Z]{1}[a-z]{2}')
                if(name.test(text.value))
                textError.textContent="";
                else textError.textContent="name is incorrect";
            });
            const salary=document.querySelector('#salary');
            const output=document.querySelector('.salary-output');
            output.textContent=salary.value;
            salary.addEventListener('input',function(){
                output.textContent=salary.value;
            });
     