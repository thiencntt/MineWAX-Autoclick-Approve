let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit' });
let gioGlo = currentTime.split(' ')[1] == "AM" ?  parseInt(currentTime.split(' ')[0]) :  parseInt(currentTime.split(' ')[0])+12;
let startHour = 1;
let stopHour = 17;
let nutMine;
function runClaim() {
    console.log("Bat dau Submit")
    let nutSubmit = document.evaluate ('//*[@id="root"]/div[3]/div[1]/div/div[3]/div/div/div/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    // console.log("nutSubmit")
    //*[@id="root"]/div[3]/div[1]/div/div[3]/div/div/div/button
    //*[@id="root"]/div[3]/div[1]/div/div[2]/div/div/div/button
    // console.log(nutSubmit.singleNodeValue)
    nutSubmit.singleNodeValue.click();
    console.log("End of Submit")
}

setInterval(async () => {
    if (gioGlo >= startHour && gioGlo <= stopHour) {

        nutMine = document.evaluate ('//*[@id="root"]/div[3]/div[1]/div/div[3]/div/div/div/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        if (nutMine.singleNodeValue == null) {
            console.log("Nut mine chua co")
        } else {
            if (nutMine.singleNodeValue.innerText == 'Mine' || nutMine.singleNodeValue.innerText == 'Submit') {
                nutMine.singleNodeValue.click();                
                await setTimeout(runClaim, 15000);                
            }
        }

    } else {
        console.log("Thoi gian nghi ngoi an choi")
    }
	currentTime = new Date().toLocaleTimeString([], { hour: '2-digit' });
	gioGlo = currentTime.split(' ')[1] == "AM" ?  parseInt(currentTime.split(' ')[0]) :  parseInt(currentTime.split(' ')[0])+12;
}, 5000);