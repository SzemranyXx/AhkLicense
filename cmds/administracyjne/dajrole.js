module.exports = {
    nazwa: `dajrole`,
    uprawnienia: `MANAGE_ROLES`,
    callback: async (message, args, text, bot) => {
        const target = message.mentions.members.first()
        const embed1 = new Discord.MessageEmbed()
.setTitle(`${emotki.blad} Błąd!`)
.setDescription(`Osoba nie została oznaczona!`)
.setColor(kolor_embeda_bledu)
.setTimestamp()
.setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
if(!target) return message.reply(embed1)
const role = message.mentions.roles.first()
        const embed2 = new Discord.MessageEmbed()
.setTitle(`${emotki.nie} Błąd!`)
.setDescription(`Rola nie została oznaczona!`)
.setColor(kolor_embeda_bledu)
.setTimestamp()
.setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
if(!role) return message.reply(embed2)
target.roles.add(role)
const embed3 = new Discord.MessageEmbed()
.setTitle(`${emotki.tak} Sukces!`)
.addField(`${emotki.wykrzyknik} Administrator:`, `${message.author} (${message.author.tag})`)
.addField(`${emotki.ludzie} Użytkownik:`, `${target.user} (${target.user.tag})`)
.addField(`${emotki.support} Rola:`, role)
.addField(`${emotki.klodka} Serwer:`, message.guild.name)
.setColor(kolor_embeda)
.setTimestamp()
.setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
message.reply(embed3)
    }
}