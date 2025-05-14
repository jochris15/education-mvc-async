const Controller = require("./controllers");

const command = process.argv[2]
const [input1, input2] = process.argv.slice(3)

switch (command) {
    case "help":
        Controller.help()
        break;

    case "list":
        Controller.list()
        break;

    case "add":
        Controller.add(input1, input2)
        break;

    case "delete":
        Controller.delete(+input1)
        break;

    default:
        Controller.help()
        break;
}