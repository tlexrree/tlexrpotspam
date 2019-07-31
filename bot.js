const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("606029391407087661")
setInterval(function() {
channel.send(`Test Spam Tlexr Hay Okay Okay Yes Discord`);
}, 30)
})

client.login(process.env.BOT_TOKEN);