require('dotenv').config();
const {Client, GatewayIntentBits, Embedbuilder, PermissionBitField, Permissions} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("ready", (x) => {
    console.log(`${x.user.tag} is ready!`)
    client.user.setActivity('CIA Redacted Bot')
})

client.login(process.env.TOKEN)