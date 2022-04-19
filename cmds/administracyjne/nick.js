module.exports = {
    nazwa: `nick`,
    uprawnienia: `MANAGE_NICKNAMES`,
    callback: async (message, args, text, bot,) => {
        const wzmianka1 = message.mentions.members.first()
        const wzmianka2 = message.mentions.users.first()
        const nick = args.splice(1).join(` `)
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
            if (!nick) {
                wzmianka1.setNickname(wzmianka2.username, `Zmiana nicku - Administrator: ${message.author.tag}`).then(() => {
                    const embed1 = new Discord.MessageEmbed()
                    embed1
                        .setTitle(`${emotki.tak} Sukces!`)
                        .setColor(kolor_embeda)
                        .setDescription(`Pomyślnie zmieniono nick użytkownika!`)
                        .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                        .addField(`${emotki.ludzie} Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                        .addField(`${emotki.support} Nowy nick:`, wzmianka2.username)
                        .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                        .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed1)
                    const embed2 = new Discord.MessageEmbed()
                    embed2
                        .setTitle(`${emotki.tak} Zmiana nicku!`)
                        .setColor(kolor_embeda)
                        .setDescription(`Twój nick został zmieniony!`)
                        .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                        .addField(`${emotki.ludzie} Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                        .addField(`${emotki.support} Nowy nick:`, wzmianka2.username)
                        .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                        .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    wzmianka2.send(embed2).catch(() => { return })
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
            else {
                if (!(nick.length > `32`)) {
                    wzmianka1.setNickname(nick, `Zmiana nicku - Administrator: ${message.author.tag}`).then(() => {
                        const embed1 = new Discord.MessageEmbed()
                        embed1
                            .setTitle(`${emotki.tak} Sukces!`)
                            .setColor(kolor_embeda)
                            .setDescription(`Pomyślnie zmieniono nick użytkownika!`)
                            .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                            .addField(`${emotki.ludzie} Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                            .addField(`${emotki.support} Nowy nick:`, nick)
                            .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                            .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed1)
                        const embed2 = new Discord.MessageEmbed()
                        embed2
                            .setTitle(`${emotki.tak} Zmiana nicku!`)
                            .setColor(kolor_embeda)
                            .setDescription(`Twój nick został zmieniony!`)
                            .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                            .addField(`${emotki.ludzie} Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                            .addField(`${emotki.support} Nowy nick:`, nick)
                            .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                            .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        wzmianka2.send(embed2).catch(() => { return })
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
                else {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`Długość nicku nie może być dłuższa niż 32 znaki!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
            }
        }
    }
}