module.exports = {
    nazwa: [`blacklist`, `bl`],
    callback: async (message, args, text, bot, err) => {

        if(message.member.roles.cache.has(uprlicencja)) {

        const tekst = args.join(` `).split(` `)
        const tekst2 = args.join(` `).split(` `)

        if(!tekst[0]) {
            message.reply(`podaj id osoby ktorej nadajesz blackliste`)
        } else {
        if(!tekst[1]) {
            message.reply(`Napisz jaka licencje chcesz dodac na blackliste`)
        } else {
            if(!tekst[2]) {
                message.reply(`Napisz powod blacklisty`)
            } else {
                if(!tekst[3]) {
                    message.reply(`Napisz date blacklisty w stylu \`\`2022-02-08 21:58:02\`\``)
                } else {
                    message.reply(`Dodales licencje \`\`${tekst[1]}\`\` na blackliste\nPowód: ${tekst[2]}\nDo Kiedy: ${tekst[3]}`)
            baza.query(`INSERT INTO blacklist (id, code, reason, data, opis) VALUES ('${tekst2[0]}', '${tekst[1]}', '${tekst[2]}', '${tekst[3]}', '${tekst[0]}')`)
                }
            }
        }
        }

        
    
            if(err) {
                console.log(err)
            }
        } else {
            message.reply(`Nie możesz użyć tej komendy`)
        }
    } 
}