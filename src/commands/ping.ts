import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";

export const ping: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  run: async (interaction) => {
    await interaction.deferReply("pong");
    const { user } = interaction;
    const message = new MessageEmbed()
      .setTitle("Ping")
      .setAuthor({
        name: user.tag,
        iconURL: user.displayAvatarURL(),
      })
      .setColor("PURPLE");

    await interaction.editReply({ embeds: [message] });
  },
};
