const validatePermissions = (uprawnienia) => {
  const validPermissions = [
    `ADMINISTRATOR`,
    `VIEW_AUDIT_LOG`,
    `VIEW_SERVER_INSIGHTS`,
    `MANAGE_GUILD`,
    `MANAGE_ROLES`,
    `MANAGE_CHANNELS`,
    `KICK_MEMBERS`,
    `BAN_MEMBERS`,
    `CREATE_INSTANT_INVITE`,
    `CHANGE_NICKNAME`,
    `MANAGE_NICKNAMES`,
    `MANAGE_EMOJIS`,
    `MANAGE_WEBHOOKS`,
    `VIEW_CHANNEL`,
    `SEND_MESSAGES`,
    `SEND_TTS_MESSAGES`,
    `MANAGE_MESSAGES`,
    `EMBED_LINKS`,
    `ATTACH_FILES`,
    `READ_MESSAGE_HISTORY`,
    `MENTION_EVERYONE`,
    `USE_EXTERNAL_EMOJIS`,
    `ADD_REACTIONS`,
    `CONNECT`,
    `SPEAK`,
    `STREAM`,
    `MUTE_MEMBERS`,
    `DEAFEN_MEMBERS`,
    `MOVE_MEMBERS`,
    `USE_VAD`,
    `PRIORITY_SPEAKER`,
  ]
  for (const uprawnienie of uprawnienia) {
    if (!validPermissions.includes(uprawnienie)) {
      throw new Error(`Nieznana permisja ${uprawnienie}`)
    }
  }
}
let recentlyRan = []
module.exports = (client, commandOptions) => {
  let {
    nazwa,
    cooldown = 3,
    uprawnienia = [],
    blokadacheck = [],
    blokadareason,
    callback,
  } = commandOptions
  if (typeof nazwa === `string`) {
    nazwa = [nazwa]
  }
  for (const alias of nazwa) {
    const command = `${alias.toLowerCase()}`
    console.log(chalk.green(`✅・${command}!`))
  }
  if (uprawnienia.length) {
    if (typeof uprawnienia === `string`) {
      uprawnienia = [uprawnienia]
    }
    validatePermissions(uprawnienia)
  }
  client.on(`message`, async (message) => {
    if (message.channel.type === `dm` || message.author.bot) return
    const prefix = db.fetch(`${message.guild.id}.prefix`) || gprefix
    const { member, content, guild } = message
    const embed = new Discord.MessageEmbed()
    for (const alias of nazwa) {
      const command = `${prefix}${alias.toLowerCase()}`
      if (
        content.toLowerCase().startsWith(`${command} `) ||
        content.toLowerCase() === command
      ) {
        let cooldownString = `${guild.id}-${member.id}-${nazwa[0]}`
        if (cooldown > 0 && recentlyRan.includes(cooldownString)) {
          const embed = new Discord.MessageEmbed()
          embed
            .setTitle(`${emotki.blad} Błąd!`)
            .setColor(`${kolor_embeda_bledu}`)
            .setDescription(`Poczekaj przed ponownym użyciem tej komendy!`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
          return message.channel.send(embed)
        }
        const args = content.split(/[ ]+/)
        args.shift()
        if (cooldown > 0) {
          recentlyRan.push(cooldownString)
          setTimeout(() => {
            recentlyRan = recentlyRan.filter((string) => {
              return string !== cooldownString
            })
          }, 1000 * cooldown)
        }
      
        for (const uprawnienie of uprawnienia) {
          if (!member.hasPermission(uprawnienie)) {
            const embed = new Discord.MessageEmbed()
            embed
              .setTitle(`${emotki.blad} Błąd!`)
              .setColor(kolor_embeda_bledu)
              .setDescription(`Nie posiadasz uprawnień!`)
              .addField(`${emotki.klodka} Wymagane uprawnienia:`, `\`${uprawnieniaa[uprawnienie]}\``)
              .setTimestamp()
              .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
            return
          }
        }
        if (blokadacheck === `Tak!`) {
          const powod = blokadareason || `Brak powodu`
          const embed = new Discord.MessageEmbed()
          embed
            .setTitle(`${emotki.blad} Błąd!`)
            .setColor(kolor_embeda_bledu)
            .setDescription(`Ta komenda została tymczasowo globalnie wyłączona!`)
            .addField(`${emotki.developer} Developer:`, `<@${idwlasciciel}>`)
            .addField(`${emotki.support} Powód:`, powod)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
          message.channel.send(embed)
          return
        }
        callback(message, args, args.join(` `), client)
        return
      }
    }
  })
}