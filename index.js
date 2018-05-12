const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
const YTDL = require("ytdl-core");
const redcolor = chalk.keyword('red');
const orangecolor = chalk.keyword('orange');
const yellowcolor = chalk.keyword('yellow');
const grencolor = chalk.keyword('green');
const cyancolor = chalk.keyword('cyan');
const bluecolor = chalk.keyword('blue');


const log = message => {
  console.log(`[${moment().format('HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/Fun/', (err, filesfun) => {
  if (err) console.error(err);
  console.log(redcolor(`${filesfun.length} commandes fun 😂,`));
  filesfun.forEach(f => {
    const props = require(`./commands/Fun/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

fs.readdir('./commands/Info/', (err, filesinfo) => {
  if (err) console.error(err);
  console.log(`${filesinfo.length} commandes information 💻,`);
  filesinfo.forEach(f => {
    const props = require(`./commands/Info/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

fs.readdir('./commands/Mod/', (err, filesmod) => {
  if (err) console.error(err);
  console.log(yellowcolor(`${filesmod.length} commandes modération 🔧,`));
  filesmod.forEach(f => {
    const props = require(`./commands/Mod/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

  fs.readdir('./commands/Admin/', (err, filesadmin) => {
    if (err) console.error(err);
    console.log(yellowcolor(`${filesadmin.length} commandes administration 🔧,`));
    filesadmin.forEach(f => {
      const props = require(`./commands/Admin/${f}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });

fs.readdir('./commands/Social/', (err, filessocial) => {
  if (err) console.error(err);
  console.log(grencolor(`${filessocial.length} commandes social  🙌 ,`));
  filessocial.forEach(f => {
    const props = require(`./commands/Social/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

fs.readdir('./commands/NSFW/', (err, filesnsfw) => {
  if (err) console.error(err);
  console.log(cyancolor(`${filesnsfw.length} commandes nsfw 👉👌,`));
  filesnsfw.forEach(f => {
    const props = require(`./commands/NSFW/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
  fs.readdir('./commands/Music/', (err, filesmusic) => {
    if (err) console.error(err);
    console.log(cyancolor(`${filesmusic.length} commandes music,`));
    filesmusic.forEach(f => {
      const props = require(`./commands/Music/${f}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
  var totalcmd =  Math.floor(filesfun.length + filesinfo.length + filesmod.length + filessocial.length + filesnsfw.length + filesadmin.length + filesmusic.length);
console.log(bluecolor(`Il y a un total de ${totalcmd} commandes 👍.`));
});
});
});
});
});
});
});


client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  const mod_role = message.guild.roles.find('name', config.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  const admin_role = message.guild.roles.find('name', config.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === config.ownerid) permlvl = 4;
  return permlvl;
};


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'qui a été expurgé')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'qui a été expurgé')));
});
client.on("message", async message => {
	let afk = JSON.parse(fs.readFileSync("./commands/afks.json", "utf8"));
		if (message.content.startsWith(config.prefix + "remafk")){
	 	  if (afk[message.author.id]) {
			delete afk[message.author.id];
			  if (message.member.nickname === null) {
				message.channel.send("J'ai enlever votre afk");
			}else{
				message.channel.send("J'ai enlever votre afk ");
			}
			fs.writeFile("./commands/afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
			}else{
			        message.channel.send("Tu n'es pas afk");
			}
		}


	if (message.content.startsWith(config.prefix + "afk")||message.content === config.prefix + "afk") {
		if (afk[message.author.id]) {
	return message.channel.send("Tu es déjà afk ");
		}else{
			let args1 = message.content.split(" ").slice(1);
				if (args1.length === 0) {
					afk[message.author.id] = {"reason" : true};

					message.channel.send("Tu es désormais afk, met `++remafk` pour enlever ton afk")
				}else{
					afk[message.author.id] = {"reason" : args1.join(" ")};
					message.channel.send("Tu es désormais afk, met `++remafk` pour enlever ton afk" )
				}
					fs.writeFile("./commands/afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
				}
		}

   		 var mentionned = message.mentions.users.first();
			if(message.mentions.users.size > 0) {
			   if (afk[message.mentions.users.first().id]) {
			     if (afk[message.mentions.users.first().id].reason === true) {
				message.channel.send(`@${mentionned.username} est AFK: pas de raison`);
			     }else{
				message.channel.send(`@${mentionned.username} est AFK: ${afk[message.mentions.users.first().id].reason}`);
			     }
			}
		}

 }) ;

client.login(process.env.TOKEN)
