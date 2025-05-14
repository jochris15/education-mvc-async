class View {
    static help() {
        console.log(`
            =============
            COMMAND LINE
            =============

            $ node game.js
            $ node game.js help
            $ node game.js list
            $ node game.js add <game_name> <game_developer>
            $ node game.js delete <game_id>
            
            =============
        `);
    }

    static list(data) {
        console.table(data)
    }

    static add(data) {
        console.table(`Added "${data.name}" to your game list...`)
    }

    static delete(data) {
        console.table(`Delete "${data.name}" from your game list...`)
    }


    static error(error) {
        console.log(error);
    }
}

module.exports = View