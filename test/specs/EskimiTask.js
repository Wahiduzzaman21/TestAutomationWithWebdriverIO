import GoogleSearchPage from '../../pages/GoogleSearchPage'
import EskimiLoginPage from '../../pages/EskimiLoginPage'
import CampaignPage from '../../pages/CampaignPage'
import PreviewPage from '../../pages/PreviewPage'


import DriverWait from '../../DriverWait' 

var eskimiurl = ''


describe('Task', () => {

    it('Maximize chrome window', () => {       
        browser.maximizeWindow()      
        browser.saveScreenshot("./screenshots/1.MaximizeChromeWindow.png")
    })
    it('Navigate to google.com', () => {
        browser.url('/')
        expect(browser).toHaveTitle('Google');
        browser.saveScreenshot("./screenshots/2.NavigateToGoogle.png")
    })
    it('Search dsp.eskimi.com', () => {
        GoogleSearchPage.searchbox.setValue("dsp.eskimi.com")
        browser.keys('Enter')
        expect(browser).toHaveTitle('dsp.eskimi.com - Google Search');
        browser.saveScreenshot("./screenshots/3.SearchDspEskimi.png")       
    })
    it('Get link of dsp.eskimi.com', () => {

        eskimiurl = GoogleSearchPage.dspEskimiLink.getAttribute('href')
        expect(GoogleSearchPage.dspEskimiLink).toHaveHref('https://dsp.eskimi.com/');
        browser.saveScreenshot("./screenshots/4.GrabEskimiLink.png")       
    })
    it('Open eskimi login page in new window and maximize', () => {

        browser.newWindow(eskimiurl, 'eskimilogipage')
        browser.maximizeWindow() 
        expect(browser).toHaveTitle('Eskimi DSP - Your programmatic partner');
        browser.saveScreenshot("./screenshots/5.OpenEskimiLoginPage.png")  
    })
    it('Login Eskimi', () => {

        EskimiLoginPage.username.setValue("demo")
        EskimiLoginPage.password.setValue("demo123")
        EskimiLoginPage.submitBtn.click()
        expect(browser).toHaveTitle('Campaigns - Eskimi DSP - Your programmatic partner')
        browser.saveScreenshot("./screenshots/6.LoginEsikimiSucessful.png")   
        
    })

    it('Navigate to First Campaign preview', () => {

        CampaignPage.firstcampaignLink.click()
        CampaignPage.previewinbrowser.click()
        expect(browser).toHaveTitle('Eskimi DSP campaign preview')
        browser.saveScreenshot("./screenshots/7.NavigatetoFirstCampaignPreview.png")   
        
    })

    it('Grab First Preview URL', () => {

        browser.switchToFrame(PreviewPage.frame)
        expect(PreviewPage.firstpreviewanchor).toHaveHref('https://dsp-trk.eskimi.com/click?test=2&chk=0&crid=2&c=')
        browser.saveScreenshot("./screenshots/8.GrabFirstPreviewURL.png")   
        
    })

    it('Navigate to First Preview URL', () => {

        PreviewPage.firstpreviewanchor.click()
        browser.switchWindow('https://business.eskimi.com/')
        expect(browser).toHaveTitle('Home - Eskimi DSP - programmatic and data platform')
        browser.saveScreenshot("./screenshots/9.NavigatFirstPreviewURL.png")   
        
    })

})