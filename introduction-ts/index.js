const helloworld = require("@changesets-monorepo/helloworld-ts")

exports.printIntro = function(name) {
    const intro = `${helloworld.printMsg()} My name is ${name}.`
    return intro;
}
