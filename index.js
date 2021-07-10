const { get } = require("axios");
const colors = require("colors");
const url = "https://api.berk404.ga/check?link=";

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
    let r = text.split(/ +/g).join('+').replace(/#/g, '%23').replace(/=/g, '%3D').replace(/!/g, '%21')

    return r;
}

module.exports = {
    version: require('./package.json').version,
    get info() {
        return({
            "version": "0.0.6-beta",
            "name": "berk-api.js",
            "source": "https://api.berk404.ga/",
            "language": "javascript"
        })
    }, //Falsis :)))
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

        return a.image;
    },
    async anycard(image, {text1 = undefined, text2 = undefined, text3 = undefined}, {color1, color2, color3}, background) {
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

        let url = `avatar=${image}%26text1=` + await encodeText(text1) + `%26text2=` + await encodeText(text2) +`%26text3=` + await encodeText(text3);

        if(background) {
            if(color1) {
                a = await request('anycard', `${url}&background=${background}&color1=${color1}`);
            }

            if(color2) {
                a = await request('anycard', `${url}&background=${background}&color1=${color1}&color2=${color2}`);
            }

            if(color3) {
                a = await request('anycard', `${url}&background=${background}&color1=${color1}&coolor2=${color2}&color3=${color3}`);
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

        return a.data.image;
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

        return a.data.image
    },
    async whoreallyis(image) {
        if(!image) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('whoreallyis')} is missing an ${colors.yellow('image')}!`);
    
            return;
        }

        let a = await request('whoreallyis', `image=${image}`);

        return a.data.image;
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

        return a;
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

        return a;
    },
    async uglier(image) {
        if(!image) {
            console.log(`${colors.red('[Berk-api.js]')} Function ${colors.blue('uglier')} is missing an ${colors.yellow('image')}!`);
    
            return;
        }

        let a = await request('uglier', `image=${image}`);

        return a.data.image;
    }
}
