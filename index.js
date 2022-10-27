const storj = require("uplink-nodejs");
const libUplink = new storj.Uplink();

var storjConfig = {
    apiKey    : "1dfJfg7HmHPrzjzvov5ioHr99RHPLRprFB8NdR9qRjN7rAVBHLbsoyZXBj9qGdN2NYH5RAtroFi4HvMkGF4sH6xzA7ZknTAEGX2vfFudodmuz6tnwRnp",
    satelliteURL   : "121RTSDpyNZVcEU84Ticf2L1ntiuUimbWgfATz21tuvgk3vzoA6@ap1.storj.io:7777",
    encryptionPassphrase  : "binzo.io",
    bucketName   : "binzo",
    uploadPath   : "curfew1.mp4",
};



libUplink.requestAccessWithPassphrase(storjConfig.satelliteURL,storjConfig.apiKey,storjConfig.encryptionPassphrase)
    .then(access => {

        return access.openProject()
        
    }).then(project =>{

        return project.ensureBucket('binzo')
    })  
    .then(bucket =>{
        
        console.log(bucket)
    })
    .catch((err) => {
            console.log(err)
    });
