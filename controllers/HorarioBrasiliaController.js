const moment = require('moment')

class HorarioBrasiliaController {

  /**
    *
    * ADM
    *
    */


  async index(req, res, next) {
        const hora = new Date
        const diaAtual = hora.getDay()
        const dataAtual = moment(hora).format('DD/MM/YYYY')
        const dataUSA = moment(hora).format('YYYY-MM-DD')
        const horaAtual = moment(hora).format('HH:mm:ss')
        return res.send({ dataAtual, horaAtual, diaAtual, dataUSA });

  }

}

module.exports = HorarioBrasiliaController