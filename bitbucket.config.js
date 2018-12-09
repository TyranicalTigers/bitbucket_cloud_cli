const request = require('request-promise')

const BASE_ROUTE=`https://api.bitbucket.org/2.0`
module.exports={
    BASE_ROUTE,
    BITBUCKET_USER: process.env.BITBUCKET_USER,
    BITBUCKET_PASSWORD:process.env.BITBUCKET_PASSWORD
}