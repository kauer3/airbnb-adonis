'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AirbnbSchema extends Schema {
  up () {
    this.create('airbnbs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('airbnbs')
  }
}

module.exports = AirbnbSchema
