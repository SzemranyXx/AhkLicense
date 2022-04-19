module.exports = {
    nazwa: [`usuntimelicense`, `removetimelicense`],
    callback: async (message, args, text, bot, err) => {
        if(message.member.roles.cache.has(uprlicencja)) {

        const licka = args.join(` `)

        if(!licka) return message.reply(`Napisz jaka licencje czasowa chcesz usunac`)


            message.reply(`Usunales czasowa licencje \`\`${licka}\`\``)
            baza.query(`DELETE FROM time_license WHERE code= ('${licka}')`)
    
            if(err) {
                console.log(err)
            }
        } else {
            message.reply(`Nie możesz użyć tej komendy!`)
        }
        
    }
}