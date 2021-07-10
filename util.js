const fetch = require('node-fetch');

module.exports = {
    async apiOnline() {
        let res = await fetch('https://api.berk404.ga');

        if(res.status === 200) {
            return true;
        } else {
            return false;
        } 
    }
}
