import Page from './Page'

class GoogleSearchPage extends Page {

    get  searchbox() { return $('.SDkEP input') }

    get dspEskimiLink(){ return $('#search > div:nth-child(1) >div > div > .rc >.r> a')}

}

export default new GoogleSearchPage()