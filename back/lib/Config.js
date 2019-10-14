const Dia = require ('./Ext/Dia/Dia.js')
const fs  = require ('fs')

module.exports = class {

    constructor () {

        const conf = JSON.parse (fs.readFileSync ('../conf/elud.json', 'utf8'))

        for (let k in conf) this [k] = conf [k]
                
        this.pools = {}

    }
        
    async init () {

    }

}