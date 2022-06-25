const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const token = process.env['token']  

client.on("ready", () => {
  console.log('Logged in')
})

client.on("message", msg => {
  if (msg.content === "hi") {
    msg.reply("hello")
  } 
})

client.login(token)

