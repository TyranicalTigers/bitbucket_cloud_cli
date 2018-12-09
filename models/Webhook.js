module.exports = class Webhook{
    constructor(url,events,description){
        this.description =  description,
        this.type="webhook_subscription",
        this.events=events,
        this.url=url,
        this.skip_cert_verification=true,
        this.active=true
    }
}
