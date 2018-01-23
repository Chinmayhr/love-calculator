setTimeout(()=>{
	$(".splash").css({'display': 'none'});
	$(".mainScreen").css({'display': 'flex'});
},3000)

function calculate() {
	var partner1 = document.getElementById("partner1").value;
	var partner2 = document.getElementById("partner2").value;

	if(!(partner1.replace(/\s/g,'').length && partner2.replace(/\s/g,'').length)){
		document.getElementById("incorrectInput").innerHTML = "The Lord of the Love knows you are fooling him, beware of the consequences and enter the names!";
		setTimeout(()=>{
			document.getElementById("incorrectInput").innerHTML = "";
		},5000)
	}
	else{
		calculateResult(partner1.trim().toLowerCase(),partner2.trim().toLowerCase());

		$(".mainScreen").css({'display': 'none'});
		$(".resultScreen").css({'display': 'flex'});
		setTimeout(()=>{
			$("#comment1").css({'display': 'flex'});
		},2000)
		setTimeout(()=>{
			$("#comment2").css({'display': 'flex'});
		},4000)
		setTimeout(()=>{
			$("#comment3").css({'display': 'flex'});
		},6000)
		setTimeout(()=>{
			$("#comment4").css({'display': 'flex'});
		},8000)

		setTimeout(()=>{
			$(".loadingComments").css({'display': 'none'});
			$(".finalResult").css({'display': 'flex'});
		},10000)
	}
}

function calculatorRestart() {
	document.getElementById("partner1").value = ""
	document.getElementById("partner2").value = ""
	$(".resultScreen").css({'display': 'none'});
	$(".finalResult").css({'display': 'none'});
	$("#comment1, #comment2, #comment3, #comment4").css({'display': 'none'});
	$(".mainScreen").css({'display': 'flex'});
	$(".loadingComments").css({'display': 'flex'});
}

function calculateResult(partner1, partner2) {
	var sum = 0;
	for(i=0;i<partner1.length;i++){
		sum += partner1.charCodeAt(i)
	}
	for(i=0;i<partner2.length;i++){
		sum += partner2.charCodeAt(i)
	}

	if(sum%100 < 24){
		document.getElementById("finalAdvice").innerHTML = "The love lord advices you to keep searching for a better relationship. Your score seems very low and you might face difficulty in tough situations.Peace!";
	}
	else if(sum%100 < 49){
		document.getElementById("finalAdvice").innerHTML = "That's an average score, Love Lord advices you stick together no matter what the situation demands, only then you might be able to save your relationship.Peace!";
	}
	else if (sum%100 < 74){
		document.getElementById("finalAdvice").innerHTML = "That's a good score, Love Lord advices you to stick together and to keep the relationship as it is, Love might blossom with time but beware wrong deeds can also lead to tough situations.Peace!";
	}
	else{
		document.getElementById("finalAdvice").innerHTML = "That's a terrefic score in today's world. Love lord advices you to keep your relationship intact and away from negative energies. Love lord himself is ready to get you both married.Peace!";
	}
	document.getElementById("result").innerHTML = sum%100;
}