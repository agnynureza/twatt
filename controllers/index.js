const OAuth = require('oauth')
const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.secret1,
    process.env.secret2,
    '1.0A',
    null,
    'HMAC-SHA1')

module.exports = {
    timeline(req,res){
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            process.env.secret3, //test user token 
            process.env.secret4, //test user secret             
            function (e, data){
                if (e) console.error(e);        
                res.status(201).send({
                    data:data
                })    
            }
        )  
    },
    search(req,res){
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.search}`,
            process.env.secret3, //test user token 
            process.env.secret4, //test user secret             
            function (e, data){
                if (e) console.error(e);        
                res.status(201).send({
                    data:data
                })    
            }
        )
    },
    post(req,res){
        oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.status}`,
            process.env.secret3, //test user token 
            process.env.secret4, //test user secret
            req.body.status,
            'twitter',             
            function (e, data){
                if (e) console.error(e);        
                res.status(201).send({
                    data:data
                })    
            }
        )
    }

}