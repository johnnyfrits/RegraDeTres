function CalcularSimples() {

	let inverter = document.getElementById("inverter").checked;

	let valor1 = inverter ? 
				 document.getElementById("valor3").value : 
				 document.getElementById("valor1").value;

	let valor2 = document.getElementById("valor2").value;

	let valor3 = inverter ? 
				 document.getElementById("valor1").value :
				 document.getElementById("valor3").value;

	let resultado = document.getElementById("resultado");
	
	let x = valor2 * valor3 / valor1;
	
	resultado.innerHTML = x;
}

function CalcularComposta() {

	let inverter1 = document.getElementById("cinverter1").checked;
	let inverter2 = document.getElementById("cinverter2").checked;

	let valor1 = inverter1 ? 
				 document.getElementById("cvalor4").value : 
				 document.getElementById("cvalor1").value;

	let valor2 = inverter2 ? 
				 document.getElementById("cvalor5").value :
				 document.getElementById("cvalor2").value;

	let valor3 = document.getElementById("cvalor3").value;

	let valor4 = inverter1 ? 
				 document.getElementById("cvalor1").value :
				 document.getElementById("cvalor4").value;

	let valor5 = inverter2 ? 
				 document.getElementById("cvalor2").value :
				 document.getElementById("cvalor5").value;
	
	let resultado = document.getElementById("cresultado");
	
	let x = (valor3 * valor4 * valor5) / (valor1 * valor2);
	
	resultado.innerHTML = x;
}