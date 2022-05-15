const { response } = require('express');
const express = require('express');
const router = express.Router(); //Create router object
const monster = require('../models/monster');
const player = require('../models/player');
//router.post("/create", createPost); //POST endpoint
router.get("/Monster",getMonster);
router.get('/Monster/containing/:name',getMContaining);
router.get('/Player/:_id',getPlayer);
router.post('/Player',createPlayer);

async function createPlayer(request,response){
    const req = request.query
    console.log(req.NAME)
    let json ={}
    if(!req.hasOwnProperty('NAME')){
      json = {status:400, msg:'Name is a required field'}
 }
 else{
     const cont = new player({NAME:req.NAME,HP:req.HP,AC:req.AC,
        SPEED: req.SPEED,
        STR: req.STR,
        DEX: req.DEX,
        CON: req.CON,
        WIS: req.WIS,
        CHA: req.CHA,
        INT: req.INT,
        Race: req.RACE,
        INVEN:req.INVEN})
    await cont.save(cont);
     const document = await player.find({NAME:cont.NAME});
     const json = {data:document._id};
 }
 response.json(json);
 }


async function getPlayer(request,response){
    const cont = request.params._id;
    const document = await monster.find({NAME:_id});
    const json = {data:document};
    response.json(json); 
}
async function getMContaining(request,response){
    const cont = request.params.name
    const regex = new RegExp(cont,'i');
    const document = await monster.find({NAME:{$regex:regex}});
    const json = {document};
    response.json(json); 
}

async function getMonster(request,response){
   const req = request.query;
    const document = await monster.find(request.query);
    const json = {data:document};
    response.json(json);
}
 
module.exports = router;

/*async function createPost(request,response){
    const { NAME, RACE,HP,AC,SPEED,STR, DEX,CON,WIS,CHA,INT,INVEN} = request.body;
    const newChar = new character({ NAME:NAME,RACE:RACE,HP:HP,AC:AC,SPEED:SPEED,STR:STR,DEX:DEX,CON:CON,WIS:WIS,CHA:CHA,INT:INT,INVEN:INVEN});
}*/