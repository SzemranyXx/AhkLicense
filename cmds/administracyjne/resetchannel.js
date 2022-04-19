module.exports = {
    nazwa: [`resetchannel`, `rc`],
    uprawnienia: `MANAGE_CHANNELS`,
    callback: async (message, args, text, bot,) => {
        const channel = await message.channel.clone().then((channel) => {
            const position = message.channel.position
            channel.setPosition(position)
            message.channel.delete()
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.tak} Sukces!`)
                .setColor(kolor_embeda)
                .setDescription(`Pomyślnie zresetowano kanał!`)
                .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                .addField(`📁 Kanał:`, channel)
                .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                .setImage('https://i.giphy.com/media/HhTXt43pk1I1W/200.gif')
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            channel.send(embed)
        }).catch(() => {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie posiadam uprawnień!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        })
    }
}