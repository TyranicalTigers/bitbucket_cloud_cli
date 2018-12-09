let {
    fetchTeamHooks,
    deleteTeamHook,
    addWebHook
} = require('./bitbucket-methods')
let Webhook = require('./models/Webhook')

void async function start() {
    let hook = new Webhook('http://70.115.233.89/generic-webhook-trigger/invoke?token=abc123jjajalsdkjhjk',['repo:push'],'Local Jira Instance')
    await addWebHook('FTST',hook)
    // await fetchTeamHooks('FTST')
    // await deleteTeamHook('FTST','874899d2-0d2a-45a5-ab4f-dc1b2564909a')
    // console.log('hi')
}()
