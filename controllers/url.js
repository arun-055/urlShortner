const shortid= require("shortid");
const {URL}= require("../models/url")
 async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    const shortID = shortid();
if(!body.url) return res.status(400).json({error:"url is needed"});
    await URL.create({
        shortId: shortID,
        redirectedUrl:body.url,
        visitedHistory:[]
        });
        return res.json({id:shortID});

 }
 module.exports={
    handleGenerateNewShortUrl,
 }
