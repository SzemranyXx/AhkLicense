module.exports = {
    nazwa: [`dodajtimelicense`, `addtime`],
    callback: async (message, args, text, bot, err) => {
        if(message.member.roles.cache.has(uprlicencja)) {
        const tekst = args.join(` `).split(` `)
        if(!tekst[0]) {
            message.reply(`podaj id osoby ktorej nadajesz licencje czasowa`)
        } else {

        if(!tekst[1]) {
            message.reply(`Napisz jaka chcesz czasowa licencje`)
        } else {

            
            if(!tekst[2]) {
                message.reply(`Napisz opis licencji`)
            } else {
                if(!tekst[3]) {
                    message.reply(`Napisz date do kiedy licencja ma byc dzialajaca w stylu \`\`2022-02-08 21:58:02\`\``)
                } else {
                    message.reply(`Dodales czasowa licencje \`\`${tekst[1]}\`\`\nOpis: ${tekst[2]}\nDo Kiedy: ${tekst[3]}`)
            baza.query(`INSERT INTO time_license (id, code, data, opis) VALUES ('${tekst[0]}', '${tekst[1]}', '${tekst[3]}', '${tekst[2]}')`)
                }
            }
        }
        }
            
    
            if(err) {
                console.log(err)
            }
        } else {
            message.reply(`Nie możesz użyć tej komendy!`)
        }
    } 
}