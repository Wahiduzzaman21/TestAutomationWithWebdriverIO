class DriverWait{

    waitForText (element, time, expectedText){
        browser.waitUntil(() => element.getText() == expectedText,{
                timeout: time,
                timeoutMsg: 'expected text to be different after 10s'
            }
        );
    }
}



export default new DriverWait()