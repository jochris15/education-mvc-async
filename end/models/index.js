const Game = require('./class');
const fs = require('fs').promises

class Model {
    static async list() {
        try {
            const data = JSON.parse(await fs.readFile('./data/games.json', 'utf-8'))

            const games = data.map((el) => {
                return new Game(el.id, el.name, el.developer)
            })

            return games
        } catch (error) {
            throw error
        }
    }

    static async add(name, developer) {
        try {
            const list = await Model.list()
            const newId = list[list.length - 1].id + 1
            const newGame = new Game(newId, name, developer)

            list.push(newGame)

            await Model.save('./data/games.json', list)

            return newGame
        } catch (error) {
            throw error
        }
    }

    static async delete(id) {
        try {
            const list = await Model.list()
            const deletedIndex = list.findIndex((el) => el.id === id)
            const deletedGame = list[deletedIndex]

            if (deletedIndex < 0) {
                throw `Game with id ${id} not found`
            }

            list.splice(deletedIndex, 1)

            await Model.save('./data/games.json', list)

            return deletedGame
        } catch (error) {
            throw error
        }
    }

    static async save(path, data) {
        try {
            const saved = JSON.stringify(data, null, 2)

            await fs.writeFile(path, saved)
        } catch (error) {
            throw error
        }
    }
}


module.exports = Model