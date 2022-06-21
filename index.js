function tabuada(){
    var num = parseInt(document.getElementById("number").value);
    var resposta = document.getElementById('resultado');
    var tabuada='';
  
    for(var count=1; count<=10 ; count++)
     tabuada += num+" x "+count+" = "+
                 num*count+"<br />";
                  
    resposta.innerHTML = tabuada;
  }

// const table = (number) => {
//     if (number > 10 || number < 1) {
//         console.log("Somente números entre 1 e 10!")
//         return
//     }

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${i} x ${number} = ${i * number}`)
//     }
// }

// table(5)