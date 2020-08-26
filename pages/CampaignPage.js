import Page from './Page'

class CampaignPage extends Page {

    get  firstcampaignLink() { return $('.large-text a') }
    get  previewinbrowser() { return $('.expended-actions-menu > a:nth-child(4)') }

}

export default new CampaignPage()