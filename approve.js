function forclickOld() {
	setInterval(function () {
		var tags_i = document.getElementsByTagName("button");
		let giatri = "";
		let kiemtraMinewax = document.querySelector("#root > div > div.diag-container > div > div > div > div.remember > label > span.MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1");
		if(kiemtraMinewax != null) {
			giatri = kiemtraMinewax.innerText;
		}
		
		let ketqua = giatri.includes("minewax.com");
		for (var i = 0; i < tags_i.length; i++) {
			if (tags_i[i].textContent == "Approve" && !tags_i[i].disabled) {
				var tags_j = document.getElementsByTagName("input");

				for (var j = 0; j < tags_j.length; j++) {
					if (tags_j[j].value == "remember" && ketqua == true) {
						tags_j[j].click();
						break;
					}
				}
				if(ketqua) {
					tags_i[i].click();
				}				
				break;
			}
		}
	}, 1000);
}


function forclick() {
	setInterval(function () {
		var tags_i = document.getElementsByTagName("button");

		// Phan nay khi dang nhap
		let rememberLoginText = "";
		let kiemtraMinewax = document.querySelector("#root > div > div.diag-container > div > div > div > div.remember > label > span.MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1");
		// if(kiemtraMinewax != null) {
		if(kiemtraMinewax != undefined) {
			rememberLoginText = kiemtraMinewax.innerText;
		}		
		let ketqua = rememberLoginText.includes("minewax.com");


		// Phan nay khi sign transaction
		let giatri = false;
		const collection = document.getElementsByClassName("site-url");
		console.log(collection);
		if(collection[0] != undefined) {
			giatri = collection[0].textContent == 'minewax.com' ? true : false;
		}

		for (var i = 0; i < tags_i.length; i++) {
			if (tags_i[i].textContent == "Approve" && !tags_i[i].disabled) {
				var tags_j = document.getElementsByTagName("input");

				for (var j = 0; j < tags_j.length; j++) {
					if (tags_j[j].value == "remember" && (giatri == true || ketqua == true)) {
						tags_j[j].click();
						break;
					}
				}
				if(giatri == true || ketqua == true) {
					console.log(giatri);
					console.log(ketqua);
					setTimeout(() => { console.log("Chờ 5 giây rồi nhấn nút!"); }, 5000);
					tags_i[i].click();
				}				
				break;
			}
		}
	}, 1000);
}

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function logingoogleOld() {
	setInterval(function () {
		var google = document.getElementById("google-social-btn");
		console.log('Google')
		google.click();
		//break;
	}, 10000);
		
}

function logingoogle() {
	
	setInterval(function () {
		var googleNew = document.querySelector("#root > div.sc-1fzlu0g-1.iLxMXg > div.diag-container > div.diag-container-div-1 > div.sc-1e0sjc0-0.dEkZVC > div.new-sign-in-div-2 > div.new-sign-in-div-12 > div > div.social-div-container-1.marginBottom > div:nth-child(2)");
		console.log('Google')
		
		if(googleNew != null) {
			googleNew.click();
		}
	}, 15000);
	
}

function forclose() {
	var timeleft = 60;
	setInterval(function () {
		timeleft--;
		if (timeleft <= 0) {
			window.close();
		}
	}, 1000);
}
function forReload() {
	var timeleft = 10; // Reload sau 10 giay
	var solanreload = 3;
	setInterval(function () {
		timeleft--;
		if (timeleft <= 0) {
			window.location.reload();
			solanreload--;
		}
	}, 1000);
	if (solanreload <= 0) {
		window.close();
	}
}

logingoogle();
//logingoogleOld();
forclose();
forclick();
// forReload();
// loading-inner