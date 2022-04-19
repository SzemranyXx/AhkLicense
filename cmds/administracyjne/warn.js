module.exports = {
    nazwa: `warn`,
    uprawnienia: `MANAGE_MESSAGES`,
    callback: async (message, args, text, bot) => {
        const wzmianka1 = message.mentions.members.first()
        const wzmianka2 = message.mentions.users.first()
        const powod = args.splice(1).join(` `) || `Brak powodu`
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
            iloscwarnow = db.fetch(`${message.guild.id}.${wzmianka2.id}.iloscwarnow`) || 0
            db.set(`${message.guild.id}.${wzmianka2.id}.iloscwarnow`, iloscwarnow + 1)
            iloscwarnow = db.fetch(`${message.guild.id}.${wzmianka2.id}.iloscwarnow`) || 0
            const embed1 = new Discord.MessageEmbed()
            embed1
                .setTitle(`${emotki.tak} Sukces!`)
                .setColor(kolor_embeda)
                .setDescription(`Pomyślnie zwarnowano użytkownika!`)
                .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                .addField(`${emotki.ludzie} Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                .addField(`${emotki.support} Powód:`, powod)
                .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                .addField(`${emotki.kursor} Ilość warnów:`, iloscwarnow)
                .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed1)
            const embed2 = new Discord.MessageEmbed()
            embed2
                .setTitle(`${emotki.tak} Warn!`)
                .setColor(kolor_embeda)
                .setDescription(`Zostałeś(-aś) zwarnowany!`)
                .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                .addField(`${emotki.ludzie} Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                .addField(`${emotki.support} Powód:`, powod)
                .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                .addField(`${emotki.kursor} Ilość warnów:`, iloscwarnow)
                .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            wzmianka2.send(embed2).catch(() => { return })
        }
    }
}