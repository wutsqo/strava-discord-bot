import { Client, Intents } from "discord.js";
import dotenv from "dotenv";

dotenv.config();
const token = process.env.TOKEN;
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  // eslint-disable-next-line no-console
  console.log("🤖 Bot ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "beep") {
    await interaction.reply("Boop!");
  }
});

const start = () => {
  client.login(token);
};

export default { start };
