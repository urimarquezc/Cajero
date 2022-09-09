
// "Base de datos" con los 3 usuarios iniciales

let cuentas = [ 
    { nombre: "Mali", contraseña: 4321 , saldo: 100},
    { nombre: "Gera", contraseña: 8862 , saldo: 150},
    { nombre: "Jose", contraseña: 5550 , saldo: 300} 
];

// contraseña

function check(){
    var contra = document.getElementById("campo__contraseña")
    if (contra.type == "password"){
        contra.type = "text"
    } else {
        contra.type = "password"
    }
}

// Login de usuario


function auth () {
         if(document.getElementById("campo__usuario").value.toLowerCase()  == "mali" & (document.getElementById("campo__contraseña").value) == 4321) {
            localStorage.setItem('usuario', "mali");
            localStorage.setItem('saldo', 100);
            location = "./pantallas/si.html"
        } else{
            Swal.fire({
                title:"Sesion fallida",
                footer:"Pulsa reintentar para introducir tu cuenta y contraseña",
                width:"35%",
                padding:"2rem",
                confirmButtonText:"Regresar",
                timer:"5000",
                allowOutsideClick:false,
                showCloseButton:true,
                background:"rgb(51, 51, 51)",
                color:"#fff"
            });
        }
        if (document.getElementById("campo__usuario").value.toLowerCase()  == "gera" & (document.getElementById("campo__contraseña").value) == 8862){
            localStorage.setItem('usuario', "gera");
            localStorage.setItem('saldo', 150);
            location = "./pantallas/si.html"
        } else{
            Swal.fire({
                title:"Sesion fallida",
                footer:"Pulsa reintentar para introducir tu cuenta y contraseña",
                width:"35%",
                padding:"2rem",
                confirmButtonText:"Regresar",
                timer:"5000",
                allowOutsideClick:false,
                showCloseButton:true,
                background:"rgb(51, 51, 51)",
                color:"#fff"
            });
        }
        if (document.getElementById("campo__usuario").value.toLowerCase()  == "jose" & (document.getElementById("campo__contraseña").value) == 5550 ){
            localStorage.setItem('usuario', "jose");
            localStorage.setItem('saldo', 300);
            location = "./pantallas/si.html"
        } else{
            Swal.fire({
                title:"Sesion fallida",
                footer:"Pulsa reintentar para volver a introducir tu cuenta y contraseña",
                width:"35%",
                padding:"2rem",
                confirmButtonText:"Regresar",
                timer:"5000",
                allowOutsideClick:false,
                showCloseButton:true,
                background:"rgb(51, 51, 51)",
                color:"#fff"
            });
        }
    }
    
// Depositar

let usuario = localStorage.getItem("usuario");
if(!document.getElementById("saldo").innerHTML) {
    document.getElementById("saldo").innerHTML = localStorage.getItem("saldo");
}

let saldoTag = document.getElementById("saldo").innerHTML;
console.log(saldoTag);
document.getElementById("saludo").innerHTML = "Hola " + usuario;

function depo() {
    let saldo = Number(document.getElementById("saldo").innerHTML);
    let deposito = Number(document.getElementById("deposito").value);
    if(saldo + deposito > 1000) { 
        Swal.fire({
            title:"Tu saldo no puede sobrepasar los $1000",
            footer:"Pulsa regresar para realizar otra transaccion",
            width:"30%",
            padding:"2rem",
            timer:"5000",
            confirmButtonText:"Regresar",
            allowOutsideClick:true,
            showCloseButton:true,
            background:"rgb(51, 51, 51)",
            color:"#fff"
        });
    } else{
        localStorage.removeItem("saldo"); // remueve el valor actual de la variable, en este caso el valor de "saldo" junto al localstorage
        saldo = saldo + deposito;
        document.getElementById("saldo").innerHTML = saldo;
        localStorage.setItem("saldo", saldo);
    }
}


// retirar
function reti() {
    let saldo = Number(document.getElementById("saldo").innerHTML);
    let retiro = Number(document.getElementById("retiro").value);
    if(saldo - retiro < 10) { 
        Swal.fire({
            title:"Tu saldo minimo debe ser de $10",
            footer:"Pulsa regresar para regresar para realizar otra transaccion",
            width:"30%",
            padding:"2rem",
            confirmButtonText:"Regresar",
            timer:"5000",
            allowOutsideClick:false,
            showCloseButton:true,
            background:"rgb(51, 51, 51)",
            color:"#fff"
        });
    } else{
        localStorage.removeItem("saldo");
        saldo = saldo - retiro;
        document.getElementById("saldo").innerHTML = saldo;
        localStorage.setItem("saldo", saldo);
    }
}



//alertas