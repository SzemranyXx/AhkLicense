module.exports = {
    nazwa: `slowmode`,
    uprawnienia: `MANAGE_CHANNELS`,
    callback: async (message, args, text, bot) => {
        if (!args[0]) {
            message.channel.setRateLimitPerUser(`0`, `Wyłączenie trybu powolnego - Administrator: ${message.author.tag}`).then(() => {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.tak} Sukces!`)
                    .setColor(kolor_embeda)
                    .setDescription(`Pomyślnie ustawiono tryb powolny!`)
                    .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                    .addField(`📁 Kanał:`, message.channel)
                    .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                    .addField(`🕒 Czas:`, `0s`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
                return
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
            if (Number.isNaN(+args[0])) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Podany czas jest nieprawidłowy!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                if (args[0] < 0) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`Podany czas jest nieprawidłowy!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    if (args[0] === `0`) {
                        message.channel.setRateLimitPerUser(args[0], `Wyłączenie trybu powolnego - Administrator: ${message.author.tag}`).then(() => {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.tak} Sukces!`)
                                .setColor(kolor_embeda)
                                .setDescription(`Pomyślnie ustawiono tryb powolny!`)
                                .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                                .addField(`📁 Kanał:`, message.channel)
                                .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                                .addField(`🕒 Czas:`, `0s`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
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
                        if (args[0] < 21600) {
                            message.channel.setRateLimitPerUser(args[0], `Zmiana trybu powolnego - Administrator: ${message.author.tag}`).then(() => {
                                const embed = new Discord.MessageEmbed()
                                embed
                                    .setTitle(`${emotki.tak} Sukces!`)
                                    .setColor(kolor_embeda)
                                    .setDescription(`Pomyślnie ustawiono tryb powolny!`)
                                    .addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
                                    .addField(`📁 Kanał:`, message.channel)
                                    .addField(`${emotki.klodka} Serwer:`, message.guild.name)
                                    .addField(`🕒 Czas:`, `${args[0]}s`)
                                    .setTimestamp()
                                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)
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
                                .setDescription(`Podany czas jest nieprawidłowy!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                    }
                }
            }
        }
    }
}