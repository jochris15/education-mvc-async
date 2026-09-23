const { readFile } = require('node:fs/promises');
const { writeFile } = require('node:fs/promises');

const Game = require('./class');


class Model {
    static async list() {
        try {
            // baca data dari data json
            // pake json parse untuk ubah data json -> data javascript
            const data = JSON.parse(await readFile("./data/games.json", "utf-8"))

            // ubah array of object jadi array of object instance
            const games = data.map((el) => {
                return new Game(el.id, el.name, el.developer)
            })

            // kasih gamenya ke controller
            return games
        } catch (error) {
            // throw ini untuk membedakan apakah dia error atau tidak
            // kalau error, wajib menggunakan throw supaya di controller bisa langsung di catch
            throw error
        }
    }

    static async save(path, data) {
        try {
            // proses save, pake json stringify untuk ubah data javascript -> data json
            const saved = JSON.stringify(data, null, 2)

            await writeFile(path, saved)
        } catch (error) {
            throw error
        }
    }

    static async add(name, developer) {
        try {
            // dapetin list data yang ingin ditambahkan data baru
            const list = await Model.list()

            // bikin data baru
            const newId = list[list.length - 1].id + 1
            const newGame = new Game(newId, name, developer)

            // tambahin data baru ke list yang udah ada
            list.push(newGame)

            // save ke games.json
            await Model.save("./data/games.json", list)

            return newGame
        } catch (error) {
            throw error
        }
    }

    static async delete(id) {
        try {
            // dapetin list data yang ingin dihapus salah satu gamenya
            const list = await Model.list()

            // nyari index data yang mau di delete
            const deletedIndex = list.findIndex((el) => el.id === id)
            const deletedGame = list[deletedIndex]

            if (deletedIndex < 0) {
                throw `Game with id ${id} not found`
            }

            // hapus data menggunakan splice
            list.splice(deletedIndex, 1)

            // save ke games.json
            await Model.save("./data/games.json", list)

            return deletedGame
        } catch (error) {
            throw error
        }
    }
}


module.exports = Model