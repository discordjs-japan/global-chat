const { parsed: env } = require('dotenv').load()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {

})

client.login(env.TOKEN)
