module.exports = {
    nazwa: `warnlist`,
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
            iloscwarnow = db.fetch(`${message.guild.id}.${wzmianka2.id}.iloscwarnow`) || 0
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.tak} Warny!`)
                .setColor(kolor_embeda)
                .setDescription(`${wzmianka2} posiada **${iloscwarnow}** warnów`)
                .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}