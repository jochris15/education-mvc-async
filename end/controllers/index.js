const Model = require("../models")
const View = require("../views")

class Controller {
    static help() {
        View.help()
    }

    static async list() {
        try {
            const data = await Model.list()
            View.list(data)
        } catch (error) {
            View.error(error)
        }
    }

    static async add(name, developer) {
        try {
            const data = await Model.add(name, developer)
            View.add(data)
        } catch (error) {
            View.error(error)
        }
    }

    static async delete(id) {
        try {
            const data = await Model.delete(id)
            View.delete(data)
        } catch (error) {
            View.error(error)
        }
    }
}

module.exports = Controller