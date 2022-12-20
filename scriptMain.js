function countS() {
	var K, S, mokhClass
	with(document.inputData) {
	if (Q1[0].checked) {
		K=3;
		S=0.0049;
		mokhClass = "Сфагнум"} else if (Q1[1].checked) {
			K=30;
			S=0.0049;
			mokhClass = "Бриеевые мхи"} else {
				K=30;
				S=0.0049;
				mokhClass = "Андреевые мхи"}
	if (volume.value == "" || (!Q1[0].checked && !Q1[1].checked && !Q1[2].checked)) {
		result.value = "Недостаточно данных";
		alert("Недостаточно данных");
	} else {
	let mReqWater = 0.1*0.023*volume.value;
	let mDry = mReqWater/K;
	let SReq = S*(mDry/10);
	result.value = (`Для мха вида ${mokhClass} и комнаты объёмом ${volume.value} м³ необходимая площадь размещаемого мха равна ${SReq} м³, закупить необходимо ${mDry} грамм мха.`);
	}}};
	
function resetS() {
	with(document.inputData) {
		result.value = ""
}};

