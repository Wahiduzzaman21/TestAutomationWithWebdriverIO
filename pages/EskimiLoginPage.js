import Page from './Page'

class EskimiLoginPage extends Page {

    get  username() { return $('#username') }
    get password() { return $('#password') } 
    get submitBtn() { return $('input[type="submit"]') }

}

export default new EskimiLoginPage()