module.exports = (client, console) => {
    console.log(chalk.cyan(`🤖・Pomyślnie uruchomiono bota!`))
    console.log(chalk.cyan(`🤖・Tag bota: ${client.user.tag}`))
    console.log(chalk.cyan(`🤖・Prefix domyślny bota: ${gprefix}`))
    console.log(chalk.cyan(`🤖・Kolor embeda: ${kolor_embeda}`))
    console.log(chalk.cyan(`🤖・Kolor embeda błędu: ${kolor_embeda_bledu}`))


    // client.user.setPresence({
    //     activity: {type: `WATCHING`, name: `${client.guilds.cache.size} serwerów`},
    //     status: `online`
    // })

    const baseFile = `command-handler.js`
    const commandBase = require(`.././handlers/${baseFile}`)

    const readCommands = (dir) => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }

    readCommands(`.././cmds`)
}