const { checkUpdates, apiOnline } = require('./util.js');
const { get } = require("axios");
const colors = require("colors");
const url = "https://api.berk404.ga/check?link=";

apiOnline().then(b => {
    if(b === true) {
        console.log(`${colors.red('[Berk-api.js]')} Successfully connected to the api.\n${colors.red('[Berk-api.js]')} For more support join our Discord server: ${colors.blue('https://discord.gg/uGUZshHcgV')}!`);
    } else if(b === false) {
        console.log(`${colors.red('[Berk-api.js]')} API is currently offline!\n${colors.red('Berk-api.js]')} Please check the Discord server for more information! ${colors.blue('(https://discord.gg/uGUZshHcgV)')}`);
    }
});

async function request(endpoint, params) {
    let d;
    if(params) {
        d = await get(url + 'https://api.berk404.ga/' + endpoint + '?' + params);
    } else {
        d = await get(`${url}${endpoint}`);
    }
    
    return d;
}

function encodeText(text) {
    let r = text.split(/ +/g).join('+').replace(/#/g, '%23').replace(/=/g, '%3D').replace(/!/g, '%21');

    return r;
}

function encodeAnswer(text) {
    let r = text.split(/ +/g).join('+').replace(/#/g, '%23').replace(/!/g, '%21');

    return r;

}

module.exports = {
    version: require('./package.json').version,
    get info() {
        return({
            "version": require('./package.json').version,
            "name": "berk-api.js",
            "source": "https://api.berk404.ga/",
            "language": "javascript"
        })
    },
    async overlay(type, image) {
        if(!type) {
            return console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('overlay')} is missing a ${colors.yellow('type')}!`);
        }
        if(!image) {
            return console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('overlay')} is missing an ${colors.yellow('image')}!`);
        }

        type = type.toLowerCase();
        types = ['bravery', 'balance', 'brilliance', 'developer', 'twitch', 'basement'];

        if(!types.includes(type)) return console.log(`${colors.red('[Berk-api.js]')} The provided type in function ${colors.blue('overlay')} is not a valid type!`);

        const a = await request(type, image);

        return await encodeAnswer(a.data.image);
    },
    async anycard({image, circle = false}, {text1 = undefined, text2 = undefined, text3 = undefined}, {color1, color2, color3}, background) {
        if(!image) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('anycard')} is missing an ${colors.yellow('image')}!`);
            
            return;
        }
        if(!text1) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('anycard')} is missing ${colors.yellow('text1')}!`);
            
            return;
        }
        if(!text2) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('anycard')} is missing ${colors.yellow('text2')}!`);
            
            return;
        }
        if(!text3) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('anycard')} is missing ${colors.yellow('text3')}!`);
            
            return;
        }

        let a;
        
        let url;
        
        if(circle === true) url = `avatar=https://api.berk404.ga/circle%3Fimage=${image}%26text1=` + await encodeText(text1) + `%26text2=` + await encodeText(text2) +`%26text3=` + await encodeText(text3);
        else url = `avatar=${image}%26text1=` + await encodeText(text1) + `%26text2=` + await encodeText(text2) +`%26text3=` + await encodeText(text3);

        if(background) {
            if(color1) {
                a = await request('anycard', `${url}%26background=${background}%26color1=${color1}`);
            }

            if(color2) {
                a = await request('anycard', `${url}%26background=${background}%26color1=${color1}%26color2=${color2}`);
            }

            if(color3) {
                a = await request('anycard', `${url}%26background=${background}%26color1=${color1}%26coolor2=${color2}%26color3=${color3}`);
            }
        } else {
            if(color1) {
                a = await request('anycard', `${url}&color1=${await encodeText(color1)}`);
            } 

            if(color2) {
                a = await request('anycard', `${url}&color1=${await encodeText(color1)}&color2=${await encodeText(color2)}`);
            }

            if(color3) {
                a = await request('anycard', `${url}&color1=${await encodeText(color1)}&color2=${await encodeText(color2)}&color3=${await encodeText(color3)}`);
            }
        }

        return await encodeAnswer(a.data.image);
    },
    async pablo(text, everyone = false) {
        if(!text) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('pablo')} is missing ${colors.yellow('text')}!`);
            
            return;
        }

        let a;

        if(everyone) {
            a = await request('pabloeveryone', `text=${await encodeText(text)}`);
        } else {
            a = await request('pablo', `text=${await encodeText(text)}`);
        }

        return await encodeAnswer(a.data.image);
    },
    async whoreallyis(image, circle = false) {
        if(!image) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('whoreallyis')} is missing an ${colors.yellow('image')}!`);
    
            return;
        }

        let a;
        
        if(false === true) a = await request('whoreallyis', `image=https://api.berk404.ga/circle%3Fimage=${image}`);
        else a = await request('whoreallyis', 'image=${image}');

        return await encodeAnswer(a.data.image);
    },
    async poohsay(text1, text2) {
        if(!text1) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('poohsay')} is missing ${colors.yellow('text1')}!`);
            
            return;
        }
        if(!text2) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('poohsay')} is missing ${colors.yellow('text2')}!`);
            
            return;
        }

        let a = await request('poohsay', `text1=${await encodeText(text1)}&text2=${await encodeText(text2)}`);

        return await encodeAnswer(a.data.image);
    },
    async angrymob(text1, text2) {
        if(!text1) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('angrymob')} is missing ${colors.yellow('text1')}!`);
            
            return;
        }
        if(!text2) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('angrymob')} is missing ${colors.yellow('text2')}!`);
            
            return;
        }

        let a = await request('angrymob', `text1=${await encodeText(text1)}&text2=${await encodeText(text2)}`);

        return await encodeAnswer(a.data.image);
    },
    async uglier(image, circle = false) {
        if(!image) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('uglier')} is missing an ${colors.yellow('image')}!`);
    
            return;
        }

        let a;
        if(circle === true) a = await request('uglier', `image=https://api.berk404.ga/circle%3Fimage=${image}`);
        else a = await request('uglier', `image=${image}`);

        return await encodeAnswer(a.data.image);
    },
    async sus(impostor, crewmate) {
        if(!impostor) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('sus')} is missing an ${colors.yellow('impostor')}!`);
    
            return;
        }

        if(!crewmate) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('sus')} is missing an ${colors.yellow('crewmate')}!`);
    
            return;
        }

        let a = await request('sus', `impostor=${impostor}%26crewmate=${crewmate}`);

        return await encodeAnswer(a.data.image)
    }
}
