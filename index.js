const fs = require('node:fs');
const path = require('node:path');
const {Client, Collection, Events, GatewayIntentBits} = require("discord.js");
const { token } = require('./config.json');
const api = require('./src/api.js');
const commands = require('./src/commands/commands.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]   
});
const Token = {token: token};
};
client.on("ready", () =>{
    console.log("Client ready");
})
client.on(Events.InteractionCreate, async interaction =>{

        if(!interaction.isChatInputCommand()) return;
        if(interaction.commandName === "pong"){
            await interaction.reply({ content: "This is a timer"});
        };
});
client.on("messageCreate", message =>{
    if(message.author.bot) return;

    if(message.content === "test"){
        message.channel.send("test");
        message.channel.toJSON(api.GetAllApi);
        
    }
    else if(message.content === "help"){
        
    }

});

client.on("error",(
)=>console.log("Client error"));
client.login(Token);