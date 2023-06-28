function forReload() {
	var sophut = 30;  // Reload sau 10 phut
	var timeleft = sophut * 60;
	setInterval(function () {
		timeleft--;
		if (timeleft <= 0) {
			window.location.reload();
		}
	}, 1000);
}

forReload();