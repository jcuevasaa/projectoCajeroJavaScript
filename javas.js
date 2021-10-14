function login(form){
    if(form.u.value=="Gera"){
        if(form.c.value=="133t"){
            location = 'cuenta_gera.html';
        }else{
            alert ('Error de contraseña');
        }
    }else if(form.u.value=="Mali"){
        if(form.c.value=="helloworld"){
            location = 'cuenta_mali.html';
        }else{
            alert('Error de contraseña');
        }
    }else if(form.u.value=="Maui"){
        if(form.c.value=="123"){
            location = 'cuenta_maui.html'
        }else{
            alert('Error de contraseña')
        }
    }
    }
    function formula(){
        let cantidadVariable = parseInt(document.getElementById('Cant').value);
        let cantidadCuenta = parseInt(document.getElementById('C1').value);
        let resultado = cantidadCuenta - cantidadVariable;
        if(resultado<10){
            alert('No se puede hacer la transacción, saldo sería menor a 10');
        }else{
            document.getElementById('C1').value = resultado;
        }
    }
    function formula2(){
        let cantidadVariable = parseInt(document.getElementById('Cant').value);
        let cantidadCuenta = parseInt(document.getElementById('C1').value);
        let resultado = cantidadCuenta + cantidadVariable;
        if(resultado>990){
            alert('No se puede hacer la transacción, saldo sería mayor a 990');
        }else{
            document.getElementById('C1').value = resultado;
        }
    }