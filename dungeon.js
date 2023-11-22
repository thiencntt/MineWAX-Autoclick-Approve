setInterval(() => {
    //error-view__btn btn--primary
    
    let claimTreasureBTN = document.querySelector('.reward-treasure__description--can-be-claimed')
    if (claimTreasureBTN) {
        claimTreasureBTN.click()
    }
    else {
        let claimCandyBTN = document.querySelector('.candy-btn__desc--can-be-claimed,.sound-after-finish-run-info-modal__button-confirm')
        if (claimCandyBTN) {
            claimCandyBTN.click()
        }
        let candyModalGotIt = document.querySelector('.candy-modal__btn.btn--primary')
        if (candyModalGotIt) {
            candyModalGotIt.click()
        }
        let sendWombatBTN = document.querySelector('.nfts-hidden__send-wombat-btn')
        if (sendWombatBTN) {
            sendWombatBTN.click()
        }
        let claimRunBTN = document.querySelector('.claim-reward__btn--active')
        if (claimRunBTN) {
            claimRunBTN.click()
        }
        let claimLevelBTN = document.querySelector('.claim-level__btn')
        if (claimLevelBTN) {
            claimLevelBTN.click()
        }
        let errA = document.querySelector("#app > div.popup.error-view > div > div > button > span")
        if (errA) {
            errA.click()
        }
        let daclaim = document.querySelector("#app > div.popup.error-view > div > div > button")
        if (daclaim) {
            daclaim.click()
        }
        let btnproceed = document.querySelector("#app > div.base-layout.base-layout--green-bg > div.base-layout__main > div.popup.not-enough-stamina-popup > div > div > button.btn.not-enough-stamina-popup__wrapper-btn-proceed.btn--primary.btn--primary-without-arrow")
        if (btnproceed) {
            btnproceed.click()
        }
        let nocandy = document.querySelector("#app > div.base-layout.base-layout--green-bg > div.base-layout__main > div.popup > div > div > button.btn.btn--outlined.confirm-send-wombat-with-claimable-candy-modal__btn.confirm-send-wombat-with-claimable-candy-modal__btn--reject")
        if (nocandy) {
            nocandy.click()
            
        }
    
    }
    
}, 1000)