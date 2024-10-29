function ex01(){
    const n1 = parseFloat(document.getElementById("n1").value)
    const n2 = parseFloat(document.getElementById("n2").value)
    

    const soma = n1 + n2
    const sub = n1 - n2
    const mult = n1 * n2
    const div = n2 !== 0 ? (n1 / n2) : 'Divisão por 0'

    document.getElementById("resul").innerHTML=`
    <p>Adição: ${soma}</p>
    <p>Subtração: ${sub}</p>
    <p>Multiplicação: ${mult}</p>
    <p>Divisão: ${div}</p>
    `
}

function ex02(){
    const n = parseFloat(document.getElementById("n").value)

    if(n>=0){
        const raiz = n ** 0.5
        document.getElementById("resul2").innerHTML=`
        A raíz de ${n} é = ${raiz}`
    } else{
        const quad = n ** 2
        document.getElementById("resul2").innerHTML=`
        O quadrado de ${n} é = ${quad}`
    }
}

function ex03(){
    const d5 = parseFloat(document.getElementById("d5").value)

    if(d5 % 5 == 0){
        document.getElementById("resul3").innerHTML=`
        É divisível por 5
        `
    } else{
        document.getElementById("resul3").innerHTML=`
        Não é divisível por 5
        `
    }
}

// ENVIEI ESTE ERRADO PRA NÃo DEIXAR SEM ENVIAR
function ex04(){
        const n7 = Number(document.getElementById('n7').value);
        let lista = [];

        lista[0] = 1;
        lista[1] = 1;

        for (let i = 2; i<n7; i++){
            lista[i] = lista[i-1] + lista[i-2]
        }
        document.getElementById("resul4").textContent = lista.join(' ')
}

function ex05(){
    const nome = document.getElementById("nome").value.trim()
    
    const nomeC = nome.split(' ')

    const pNome = nomeC[0]
    const uNome = nomeC[nomeC.length - 1]

    document.getElementById("resul5").innerHTML =`
    Primeiro nome: ${pNome}
    Segundo nome: ${uNome}
    `
}