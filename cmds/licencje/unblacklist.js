module.exports = {
    nazwa: [`unblacklist`, `unbl`],
    callback: async (message, args, text, bot, err) => {

        if(message.member.roles.cache.has(uprlicencja)) {
        const licka = args.join(` `)

        if(!licka) return message.reply(`Napisz jaka licencje chcesz usunac z blacklisty`)


            message.reply(`Usunales licencje \`\`${licka}\`\` z blacklisty`)
            baza.query(`DELETE FROM blacklist WHERE code= ('${licka}')`)
    

            if(err) {
                console.log(err)
            }
        } else {
            message.reply(`Nie możesz użyć tej komendy!`)
        }
    }
    
}