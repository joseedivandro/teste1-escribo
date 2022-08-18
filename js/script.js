let multiploTres = 0;
let multiploCinco = 0;
let multi = prompt("Digite um número")


    for(let i =1; i< multi; i++){
       if( i% 3 ===0){    
           multiploTres = multiploTres + i ;
        }  
        if( i% 5 ===0) {      
            multiploCinco = multiploCinco + i;
        }     
    } 
    console.log(multiploTres + multiploCinco);



