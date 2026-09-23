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
        const results = data.map((el) => {
            return {
                "Game ID": el.id,
                "Nama Game": el.name,
                "Nama Developer": el.developer
            }
        })

        console.table(results)
    }

    static add(data) {
        console.log(`Added "${data.name}" to your game list...`);
    }

    static delete(data) {
        console.log(`Delete "${data.name}" from your game list...`);
    }

    static error(error) {
        console.log(error);
    }
}

module.exports = View