module.exports = {
    nazwa: `unban`,
    uprawnienia: `BAN_MEMBERS`,
    callback: async (message, args, text, bot) => {
        const unbanNie = new Discord.MessageEmbed()
        .setTitle(`${emotki.blad} Błąd!`)
        .setColor(kolor_embeda_bledu)
        .setDescription(`Nie możesz odbanować tej osoby!`)
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(unbanNie)

        let reason = args.slice(1).join(" ")
        let id = args[0]

        const unbanOznacz = new Discord.MessageEmbed()
        .setTitle(`${emotki.blad} Błąd!`)
        .setColor(kolor_embeda_bledu)
        .setDescription(`Musisz wpisać ID osoby którą chcesz odbanować!`)
        .setTimestamp()
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        if(!reason) reason = "Nie podano powodu"
        if(!args[0]) return message.reply(unbanOznacz)

        if(isNaN(args[0])) return message.reply(unbanOznacz)

        message.guild.fetchBans().then(async bans =>{
            const unbanNiema = new Discord.MessageEmbed()
            .setTitle(`${emotki.blad} Błąd!`)
            .setColor(kolor_embeda_bledu)
            .setDescription(`Nie ma banów na tym serwerze!`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            if(bans.size === 0) return message.reply(unbanNiema)
            let bannedUser = bans.find(b => b.user.id == id)
            const unbanNiejest = new Discord.MessageEmbed()
            .setTitle(`${emotki.blad} Błąd!`)
            .setColor(kolor_embeda_bledu)
            .setDescription(`Ta osoba nie ma bana na tym serwerze!`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            if(!bannedUser) return message.reply(unbanNiejest)
            await message.guild.members.unban(bannedUser.user, reason).catch(err =>{
                console.log(err)
                const unbanUdane = new Discord.MessageEmbed()
                .setTitle(`${emotki.tak} Sukces!`)
                .setColor(kolor_embeda)
                .setDescription(`Pomyślnie odbanowano użytkownika!`)
                .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                .addField(`${emotki.ludzie} Użytkownik:`, `<@${id}>`)
                .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                return message.reply(unbanUdane)
            }).then(() => {
                const unbanUdaneD = new Discord.MessageEmbed()
                .setTitle(`${emotki.tak} Sukces!`)
                .setColor(kolor_embeda)
                .setDescription(`Pomyślnie odbanowano użytkownika!`)
                .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                .addField(`${emotki.ludzie} Użytkownik:`, `<@${id}>`)
                .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.reply(unbanUdaneD)
            })
        })
    }
}