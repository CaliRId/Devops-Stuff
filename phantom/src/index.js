const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Ready Set GO!');
  console.log('---------------------------------------');
});

client.on('message', message => {
  if (message.content.startsWith('!idlog')) {
    const ids = message.content.slice(7).split(' ');
    const formatTemplate = `
    Suspect: <@{id}>
    CaliRP Rank: [Insert LEO Dept(s) and/or Staff Rank]
    Reason: [Insert Reason for Investigation] (What server are they in)
    Summary: [Insert Summary of Information Found]
    Evidence: [Link to Evidence/Attach Evidence (Include screenshot of roles in main discord)]
    `;

    for (const id of ids) {
      const formatWithId = formatTemplate.replace('[Suspect\'s Discord ID]', `<@${id}>`);
      message.channel.send(formatWithId);
    }
  }
});

client.login(process.env.TOKEN)