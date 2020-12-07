// import dotenv package
require('dotenv').config()

// import Discord.js library
const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

// when the bot is ready
client.on("ready", () => {
    // display how much servers the bot is connected to
    const guildNum = client.guilds.cache.size;

    // a little presence message
    client.user.setActivity(`active in ${guildNum} servers.`, {type: "PLAYING"});

    // display when bot has successfully connected
    console.log("Bot is ready!")
})

const prefix = "&";

client.on("messageDelete", msg => {
    // msg.channel.send("Hey, stop deleting messages!")

    deleteMsg(msg.channel);
})

client.on("message", msg => {
    if(msg.content === `${prefix}hey`) {
        // msg.channel.send("hi!")

        replyHi(msg.channel);

        // msg.reply("hi!")
    } else if (msg.content === `${prefix}rtn is epic`) {
        // msg.react("🥰")
        reactTo(msg);
    } else if (msg.content === `${prefix}gimme`) {
        // msg.member.roles.add('785598129189683252')

        grantRole(msg.member.roles);
    }
})

const replyHi = i => {
    i.send("hey!")
}
const reactTo = i => {
    i.react("🥰")
}
const deleteMsg = i => {
    i.send("Hey, stop deleting messages!")
}
const grantRole = i => {
    i.add('785598129189683252')
}

// bot token
client.login(process.env.BOT_TOKEN)