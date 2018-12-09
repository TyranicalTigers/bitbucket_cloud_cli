const {BASE_ROUTE,BITBUCKET_USER,BITBUCKET_PASSWORD} = require('./bitbucket.config')
const request = require('request-promise')

const auth = {
    user:BITBUCKET_USER,
    pass:BITBUCKET_PASSWORD
}
const defaultOptions = {
    auth,
    json:true
}
const getRequestDefault = url=> request.get(url,defaultOptions)

const postRequestDefault=(url,body=undefined)=>request.post(url,{body,...defaultOptions})
const deleteRequestDefault=(url,body=undefined)=>request.del(url,{body,...defaultOptions})
exports.fetchTeamHooks = async(teamName)=>{
    const ROUTE= `${BASE_ROUTE}/teams/${teamName}/hooks`
    const hooks = await getRequestDefault(ROUTE)
    console.log(hooks)
}
exports.deleteTeamHook = async(teamName,hookunid)=>{
    const ROUTE=`${BASE_ROUTE}/teams/${teamName}/hooks/${hookunid}`
    try{
    await deleteRequestDefault(ROUTE)
    console.log('Delete successfully')
    }catch(ex){
        console.error('Hook was not deleted')
        console.log(ex.toString())
    }
}
exports.addWebHook=async (teamName,webhook)=>{
    const ROUTE =`${BASE_ROUTE}/teams/${teamName}/hooks`
    try{
        await postRequestDefault(ROUTE,webhook)
    }catch(ex){
        console.error('Hook was not created')
        console.log(ex.toString())
    }

}