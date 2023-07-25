function forReload() {
	var div=document.createElement("div");
	div.classList.add('bg-warning', 'fixed-bottom', 'p-2');

	document.body.appendChild(div);

	var sophut = 30;  // Reload sau 10 phut
	var timeleft = sophut * 60;
	setInterval(function () {
		timeleft--;
		if (timeleft <= 0) {
			window.location.reload();
		}
		// console.log('timeleft ' + timeleft);
		div.innerText='Time left for reload: ' + timeleft + ' seconds';
	}, 1000);
}

forReload();