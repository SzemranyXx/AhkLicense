module.exports = {
    nazwa: [`dodajlicencje`, `addlicense`],
    callback: async (message, args, text, bot, err) => {


        if(message.member.roles.cache.has(uprlicencja)) {
        const tekst = args.join(` `).split(` `)
        const target = message.mentions.members.first()

        
        
        if(!tekst[0]) {
            message.reply(`podaj id osoby ktorej nadajesz licencje`)
        } else {
        if(!tekst[1]) {
            message.reply(`Napisz jaka licencje chcesz dodac`)
        } else {
            if(!tekst[2]) {
                message.reply(`Napisz opis licencji`)
            } else {
                    message.reply(`Dodales licencje \`\`${tekst[1]}\`\` o id ${tekst[0]} i opisie ${tekst[2]}`)
                    baza.query(`INSERT INTO license (id, code, opis) VALUES ('${tekst[0]}', '${tekst[1]}', '${tekst[2]}')`)
                
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