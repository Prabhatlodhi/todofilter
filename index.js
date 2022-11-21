let inputbarid = document.querySelector('#inputbarid');
let tasklist = document.querySelector('#tasklist');
let high = document.querySelector('#high');
let low = document.querySelector('#low');
let selectbar = document.querySelector('#selectbar')
let imptask = document.querySelector('#imptask');


let allli = document.getElementsByTagName('li');
console.log(allli)


high.addEventListener('click', highred)

function highred (){
    let x = inputbarid.value;

    let newlired = document.createElement('li');
    newlired.setAttribute('class', 'red')
    newlired.append(x);

    tasklist.appendChild(newlired)

    inputbarid.value = ""
    console.log(allli)
}


low.addEventListener('click', lowgreen)

function lowgreen (){
    let x = inputbarid.value;

    let newlired = document.createElement('li');
    newlired.setAttribute('class', 'green')
    newlired.append(x);

    tasklist.appendChild(newlired)

    inputbarid.value = ""
    console.log(allli)
}

imptask.addEventListener('click', hideunimportant)

function hideunimportant (e){
    
}





selectbar.addEventListener('change', selectoption)

function selectoption (){

    console.log(selectbar.value)
    if( selectbar.value  == 'aa'){
        for(let i=0; i<allli.length; i++){
            allli[i].classList.remove("displaynone");
        }   
    }
   if(selectbar.value === 'high'){

        for(let i=0; i<allli.length; i++){
            let hh = allli[i].classList.contains('green');
            console.log(hh)

           let jj = allli[i].classList.contains('red');

            if(hh) {
                console.log('yyy')
                allli[i].classList.add("displaynone");
            // console.log(allli[i].classList.contains('red'))
        } 
        if(jj){
            allli[i].classList.remove("displaynone");
        }

        
    }
}else if(selectbar.value === 'low' ){
     

    for(let i=0; i<allli.length; i++){
        let hh = allli[i].classList.contains('red');
        console.log(hh)

        let jj = allli[i].classList.contains('green');
       

         if(hh) {
                console.log('yyy')
                allli[i].classList.add("displaynone");
            // console.log(allli[i].classList.contains('red'))
        } 
        if(jj){
            allli[i].classList.remove("displaynone");
        }
    }
    

}


}