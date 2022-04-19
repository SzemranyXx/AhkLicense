module.exports = {
    nazwa: [`usunlicencje`, `removelicense`],
    callback: async (message, args, text, bot, err) => {
        if(message.member.roles.cache.has(uprlicencja)) {

        const licka = args.join(` `)

        if(!licka) return message.reply(`Napisz jaka licencje chcesz usunac`)


            message.reply(`Usunales licencje \`\`${licka}\`\``)
            baza.query(`DELETE FROM license WHERE code= ('${licka}')`)
    
            if(err) {
                console.log(err)
            }
        } else {
            message.reply(`Nie możesz użyć tej komendy!`)
        }
        
    }
}