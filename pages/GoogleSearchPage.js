import Page from './Page'

class GoogleSearchPage extends Page {

    get  searchbox() { return $('.SDkEP input') }

    get dspEskimiLink(){ return $('#rso > div:nth-child(1) > div > div > div > div > div > div.yuRUbf > a')}
    

}

export default new GoogleSearchPage()