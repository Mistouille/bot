const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');


exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: Ce n'est pas un channel NSFW.")

    if(message.author.bot) return;
    if(message.channel.type !=="text") return;
    
     randomPuppy('boobs',
     'BigBoobsGW ',
     'smallboobs',
     'Page3Glamour ')
    .then(url => {
                  const embed = new Discord.RichEmbed()
                      .setTimestamp()
                      .setImage(url)
                      .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
                       message.channel.send({ embed });
    })

  }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'boobs',
    description: 'Envoie une image aléatoire de boobs',
    usage: 'boobs'
  };