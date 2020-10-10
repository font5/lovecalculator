var button1 = document.getElementById("button1").addEventListener('click', angalia);
var kokotoa = document.getElementById("rudia").addEventListener('click', rudia);

function angalia() {
    document.getElementById('majibu-container').style.display = 'block';
    let input1 = document.getElementById('input1').value.toUpperCase();
    let input2 = document.getElementById('input2').value.toUpperCase();
    let result = input1 + input2;

    T1 = result.split('T').length-1;
    R2 = result.split('R').length-1;
    U3 = result.split('U').length-1;
    E4 = result.split('E').length-1;

    L5 = result.split('L').length-1;
    O6 = result.split('O').length-1;
    V7 = result.split('V').length-1;
    E8 = result.split('E').length-1;
    
    true1 = T1 + R2 + U3 + E4
    true2 = L5 + O6 + V7 + E8

    if (true1 > 9) {
          true1 = 9;
    }

    if (true2 > 9) {
        true2 = 9;
        }

    if ((input1 == 'GEORGE MARIKI') || (input1 == 'SHEMDOE')) {
        true1 = 9;
        true2 = 9;
    }

    if ((input2 == 'GEORGE MARIKI') || (input2 == 'SHEMDOE')) {
        true1 = 9;
        true2 = 9;
    }


    lastAnswer = "" + true1 + true2;

    console.log(lastAnswer);

    let majibuYako = document.getElementById('majibu');
    let asilimia = document.getElementById('asilimia');
    let clickButton = document.getElementById('button1');
    let kokotoa = document.getElementById('rudia');


    asilimia.style.display = "block";
    asilimia.value = lastAnswer + "%";
    clickButton.style.display = "none";
    majibuYako.innerHTML = "Our Love Calculator Shows That " + input1 + " And " + input2 + " You Have Love Percentage Of " + lastAnswer + "%" + " Out Of 100%";
    document.getElementById('input1').disabled = true;
    document.getElementById('input2').disabled = true;

    kokotoa.style.display = "block";
}

function rudia() {
    location.reload();
}