const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data : new SlashCommandBuilder()
        .setName("pong")
        .setDescription("This is a timer"),
    async execute(interaction) {
        await interaction.reply("pong");


    }
}