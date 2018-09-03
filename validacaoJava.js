

function validaCampos(){
		
		var sexom = document.getElementById ("tx_sexom").checked;
		var sexof = document.getElementById("tx_sexof").checked;
		
			if(document.getElementById("tx_nome").value == ""){
			alert('O campo NOME não pode ser vazio !');
			document.getElementById("tx_nome").focus();
				return false;
			}
			if(document.getElementById("mail").value == ""){
			alert('O campo E-mail não pode ser vazio!');
			document.getElementById("mail").focus();
				return false;
			}
			
			if(sexom==false && sexof==false){
			alert('O campo SEXO deve se selecionado!');
				return false;
			}
			
			if(document.getElementById("cNasc").value == ""){
			alert('Digite uma data!');
			document.getElementById("cNasc").focus();
				return false;
				
			function CheckDate() {
			
			var expReg = /^((0[1-9]|[12]\d)\/(0[1-9]|1[0-2])|30\/(0[13-9]|1[0-2])|31\/(0[13578]|1[02]))\/(19|20)?\d{2}$/;
			var aRet = true;
				
				if ((pObj) && (pObj.value.match(expReg)) && (pObj.value != '')) {
				
			var dia = pObj.value.substring(0,2);
			var mes = pObj.value.substring(3,5);
			var ano = pObj.value.substring(6,10);
				
				if ((mes == 4 || mes == 6 || mes == 9 || mes == 11 ) && dia > 30) 
				aRet = false;
				
					else 
					
				if ((ano % 4) != 0 && mes == 2 && dia > 28) 
				aRet = false;
					else
				if ((ano%4) == 0 && mes == 2 && dia > 29)
				aRet = false;
				}  else 
				aRet = false;  
				return aRet;
				}
			}	
			
			
			if(document.getElementById("cCargo").value == ""){
			alert('Selecione um cargo!');
			document.getElementById("cCargo").focus();
				return false;
			}	
				
			
			
			return true;
		}


