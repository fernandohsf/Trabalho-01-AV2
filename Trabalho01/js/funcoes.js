//***********************************//
//INICIO VALIDA��O CAMPOS OBRIGATOROS//
//***********************************//
function CampoObrigatorio() {
	var form = document.getElementById("formCadastroCliente");
    for (var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].type == "text" ||form.elements[i].type == "password" || form.elements[i].type == "email") {
            if (form.elements[i].value == "" && form.elements[i].className == "obrigatorio") {
                alert("O campo: " + form.elements[i].name + " \u00e9 obrigat\u00f3rio.");
                form.elements[i].focus();
                return false;
                break;
            }
			if (document.getElementById("senha").value.length < 6){
				alert("A senha deve conter no min\u00edmo 6 caracteres.");
				return false;
				break;
			}
        }
    }
    return true;
}
//***********************************//
//**FIM VALIDA��O CAMPOS OBRIGATOROS*//
//***********************************//
function Imprimir() {
	var testeCampos = CampoObrigatorio();
	if (testeCampos == true){
		if(document.getElementById("sim").checked == true){
			x1 = "Sim";
		}else{x1 = "Nao"}
		alert(
		"\n CPF: " + document.getElementById("cpf").value +
		"\n Nome: " + document.getElementById("nome").value +
		"\n Endereco: " + document.getElementById("endereco").value +
		"\n Cidade: " + document.getElementById("cidade").value +
		"\n Sexo: " + document.getElementById("sexo").value +
		"\n Telefone: " + document.getElementById("telefone").value +
		"\n E-mail: " + document.getElementById("email").value +
		"\n Receber promocoes: " + x1 +
		"\n Obs: " + document.getElementById("obs").value);	
	}
}
//***********************************//
//***********VALIDA��O CPF***********//
//***********************************//
function validarCPF(){
   var cpf = document.formCadastroCliente.cpf.value;
   var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
   if(!filtro.test(cpf)){
     window.alert("CPF inv\u00e1lido.");
	 document.getElementById("cpf").focus();
	 document.getElementById("cpf").value = "";
	 return false;
   }
   
   cpf = remove(cpf, ".");
   cpf = remove(cpf, "-");
    
   if(cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" ||
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" ||
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" ||
		cpf == "88888888888" || 
		cpf == "99999999999"){
		window.alert("CPF inv\u00e1lido.");
		document.getElementById("cpf").focus();
		document.getElementById("cpf").value = "";
		return false;
   }

   soma = 0;
   for(i = 0; i < 9; i++)
   	 soma += parseInt(cpf.charAt(i)) * (10 - i);
   resto = 11 - (soma % 11);
   if(resto == 10 || resto == 11)
	 resto = 0;
   if(resto != parseInt(cpf.charAt(9))){
	 window.alert("CPF inv\u00e1lido.");
	 document.getElementById("cpf").focus();
	 document.getElementById("cpf").value = "";
	 return false;
   }
   soma = 0;
   for(i = 0; i < 10; i ++)
	 soma += parseInt(cpf.charAt(i)) * (11 - i);
   resto = 11 - (soma % 11);
   if(resto == 10 || resto == 11)
	 resto = 0;
   if(resto != parseInt(cpf.charAt(10))){
     window.alert("CPF inv\u00e1lido.");
	 document.getElementById("cpf").focus();
	 document.getElementById("cpf").value = "";
	 return false;
   }
   return true;
 }
function remove(str, sub) {
   i = str.indexOf(sub);
   r = "";
   if (i == -1) return str;
   r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
   return r;
 }
//***********************************//
//*********FIM VALIDA��O CPF*********//
//***********************************//

 //**********************************//
//*****FORMATA��O(MASCARA) DO CPF****//
//***********************************//
function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}
function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}
function cpf_mask(v){
	v=v.replace(/\D/g,"")                 //Remove tudo o que n? ?d?ito
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o terceiro e o quarto d?itos
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o setimo e o oitava d?itos
	v=v.replace(/(\d{3})(\d)/,"$1-$2")   //Coloca ponto entre o decimoprimeiro e o decimosegundo d?itos
	return v
}
//***********************************//
//*********FIM FORMATA��O CPF********//
//***********************************//

//***********************************//
//****INICIO FORMATA��O TELEFONE*****//
//***********************************//
function mascaraTel(telefone){ 
	if(telefone.value.length == 0)
		telefone.value = '(' + telefone.value;
	if(telefone.value.length == 3)
		telefone.value = telefone.value + ') ';
	if(telefone.value.length == 9)
		telefone.value = telefone.value + '-';
  
}
//***********************************//
//******FIM FORMATA��O TELEFONE******//
//***********************************//

//***********************************//
//*********FORMATA��O LETRAS*********//
//***********************************//
function SomenteLetras(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla >= 65 && tecla <= 90 || tecla >= 97 && tecla <= 122 || tecla == 32)) 
		return true;
    else{
    	if (tecla==8 || tecla==0) 
			return true;
		else  
			return false;
    }
}
function VerificaSenha(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla >= 65 && tecla <= 90 || tecla >= 97 && tecla <= 122 || tecla >= 48 && tecla <= 57))
		return true;
    else{
    	if (tecla==8 || tecla==0) 
			return true;
		else  
			return false;
    }
}
function ConverteMaiuscula(Campo) {
    Campo.value = Campo.value.toUpperCase();
}
//***********************************//
//*******FIM FORMATA��O LETRAS*******//
//***********************************//

//***********************************//
//*********VALIDA��O CHECKBOX********//
//***********************************//
function VerificaCheckbox(id, visibility){
	if(id == "sim"){
		document.getElementById("sim").checked = true;
		document.getElementById("nao").checked = false;
		document.getElementById("msgPromocao").style.display = "inline";
	}
	if(id == "nao"){
		document.getElementById("sim").checked = false;
		document.getElementById("nao").checked = true;
		document.getElementById("msgPromocao").style.display = "none";
	}
}
//***********************************//
//*******FIM VALIDA��O CHECKBOX******//
//***********************************//

//***********************************//
//*******INICIO VALIDA��O SEXO*******//
//***********************************//
function VerificaSexo(){
	if(document.getElementById("sexo").selectedIndex == 0){
		alert("Sexo inv\u00e1lido.");
		return false;
	}
}
//***********************************//
//*********FIM VALIDA��O SEXO********//
//***********************************//

//***********************************//
//*****INICIO VALIDA��O TEXTAREA*****//
//***********************************//
function MaxCaracteres(){
	if(formCadastroCliente.obs.value.length > 200){
		alert("A observa\u00e7\u00e3o deve conter no m\u00e1ximo 200 caracteres.");
		formCadastroCliente.obs.value = formCadastroCliente.obs.value.substr(0, 200);
		formCadastroCliente.obs.focus();
		return false;
	}
}
//***********************************//
//*******FIM VALIDA��O TEXTAREA******//
//***********************************//
