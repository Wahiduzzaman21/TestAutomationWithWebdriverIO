import Page from './Page'

class PreviewPage extends Page {

    get  frame() { return $('.wrap-ad > iframe') }

    get firstpreviewanchor() { return $('body a') }
    
}

export default new PreviewPage()