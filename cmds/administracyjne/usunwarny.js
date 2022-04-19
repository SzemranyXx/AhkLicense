module.exports = {
    nazwa: `usunwarny`,
    uprawnienia: `MANAGE_MESSAGES`,
    callback: async (message, args, text, bot) => {
        const wzmianka1 = message.mentions.members.first()
        const wzmianka2 = message.mentions.users.first()
        if (!wzmianka1) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie oznaczono osoby!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            db.delete(`${message.guild.id}.${wzmianka2.id}.iloscwarnow`)
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.tak} Sukces!`)
                .setColor(kolor_embeda)
                .setDescription(`Pomyślnie usunięto warny użytkownika!`)
                .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                .addField(`${emotki.ludzie} Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}