const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');


exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: Ce n'est pas un channel NSFW.")
    var text = message.content.substring(6)

    if(message.author.bot) return;
    if(message.channel.type !=="text") return;
    
     randomPuppy('anal_gifs','porn_gifs','creampiegifs','cumcoveredfucking','homemadexxx')
    .then(url => {
                  const embed = new Discord.RichEmbed()
                      .setTimestamp()
                      .setImage(url)
                  .setTitle (`<@${message.author.id}> fait l'amour a  ${text}`)
                      .setColor(`#DE53D0`)
                      
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
    name: 'fuck',
    description: 'Envoie une image aléatoire de pénis',
    usage: 'fuck'
  };
