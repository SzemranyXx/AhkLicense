module.exports = {
    nazwa: `clear`,
    uprawnienia: `MANAGE_MESSAGES`,
    callback: async (message, args, text, bot) => {
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`${emotki.blad} Błąd!`)
                .setColor(kolor_embeda_bledu)
                .setDescription(`Nie podano ilości!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (Number.isNaN(+args[0])) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`${emotki.blad} Błąd!`)
                    .setColor(kolor_embeda_bledu)
                    .setDescription(`Podana ilość jest nieprawidłowa!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                if ((args[0]) > 100) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`${emotki.blad} Błąd!`)
                        .setColor(kolor_embeda_bledu)
                        .setDescription(`Ilość nie może przekraczać 100!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    if ((args[0]) < 1) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.blad} Błąd!`)
                            .setColor(kolor_embeda_bledu)
                            .setDescription(`Ilość nie może być mniejsza niż 1!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    else {
                        message.delete()
                        message.channel.bulkDelete(args[0], `Czyszczenie wiadomości - Administrator: ${message.author.tag}`).then(() => {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.tak} Sukces!`)
                                .setColor(kolor_embeda)
                                .setDescription(`Pomyślnie usunięto **${args[0]}** wiadomości!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                                .then(message => {
                                    setTimeout(function () {
                                        message.delete()
                                    }, 3000)
                                })
                        }).catch(() => {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`${emotki.blad} Błąd!`)
                                .setColor(kolor_embeda_bledu)
                                .setDescription(`Nie mogę usuwać wiadomości starszych niż 14 dni!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        })
                    }
                }
            }
        }
    }
}