// função converte numero para real
function numberParaReal(num) {
	var formatado = "R$ " + num.toFixed(2).replace(".",",");
	
	return formatado;
}

// função converte string real para número
function realParaNumber(str) {
	var compativelComFloat = str.replace("R$ ",""); //remover R$
	compativelComFloat = compativelComFloat.replace(",","."); //trocar , por .
	var valorFloat = parseFloat(compativelComFloat); //transformar string em float
	
	return valorFloat;
}
