const { Util } = require("discord.js")

module.exports = {
    nazwa: `stealemoji`,
    uprawnienia: `MANAGE_EMOJIS`,
    callback: async (message, args, text, bot,) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`${emotki.blad} Błąd!`)
            .setColor(kolor_embeda_bledu)
            .setDescription(`Wyślij kilka emoji!`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        if (!args.length) return message.reply(embed)

        for (const emojis of args) {
            const getEmoji = Discord.Util.parseEmoji(emojis)

            if(getEmoji.id) {
                const emojiExt = getEmoji.animated ? '.gif' : '.png';
                const emojiURL = `https://cdn.discordapp.com/emojis/${getEmoji.id + emojiExt}`;
                message.guild.emojis
                .create(emojiURL, getEmoji.name)
                .then((emoji) =>
                message.channel.send(`Dodano emotki: ${emojiURL} ${emoji.name}!`))
            }
        }
    }
}