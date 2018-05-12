const Discord = require('discord.js');
const fs = require("fs");
const ytdl = require('ytdl-core');
const search = require('youtube-search');
const config = require("../../config.json");
const queues = {}
const opts = {
    part: 'snippet',
    maxResults: 10,
    key: process.env.YTAPI
}

exports.run = (client, message, args) => {

   /* var errorlog = require("../../data/errors.json");

    var intent;

    function getQueue(guild) {
        if (!guild) return
        if (typeof guild == 'object') guild = guild.id
        if (queues[guild]) return queues[guild]
        else queues[guild] = []
        return queues[guild]
    }

    try {
        var config = require('../../config.json'),
        language = config.language;
        if (language == "fr") {
        } else if (language == "en") {
        } else {
        }
    } catch (err) {
        console.log(err);
        if(language == 'fr'){
            console.log("No config detected, attempting to use environment variables...");
        }else {
            console.log("No config detected, attempting to use environment variables...");
        }
        if (process.env.TOKEN && process.env.YTAPI) {
            var config = require('../../config.json')
        } else {
            console.log("No token passed! Exiting...")
            process.exit(0)
        }
    }

    if(language == "fr"){
        if (!message.member.voiceChannel) 
            message.channel.send('Vous devez être dans un channel vocal')
        let player = message.guild.voiceConnection.player.dispatcher
        if (!player || player.paused) 
            message.channel.send("Bot ne joue pas!")
        player.pause();
        message.channel.send("Musique en pause...")
    }else{ (!message.member.voiceChannel) 
          message.channel.send('You need to be in a voice channel')
        let player = message.guild.voiceConnection.player.dispatcher
        if (!player || player.paused) 
            message.channel.send("Bot is not playing")
        player.pause();
        message.channel.send("Pausing music...")
    }*/
   message.channel.send("Commande en cours de création ...")
}


    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: 'pause',
        description: 'Met la musique en pause',
        usage: 'pause'
      };
