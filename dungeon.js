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
    }
    
}, 1000)