# Base Bot

This is a base template for creating Discord bots using [Discord.js v14](https://discord.js.org/). The bot includes a command and event handling system, providing a solid foundation for building and expanding functionality.

## Features
- Command and event routing system for easy organization and scalability.
- Example command (`ping`) to demonstrate how to add new commands.
- Custom logger with different log levels (`info`, `warn`, `error`, `debug`) for better tracking and debugging.
- Deployment scripts for commands to different environments (development, production, or global).

## Prerequisites
- Node.js (v16 or higher)
- npm
- A Discord bot token (can be obtained from the [Discord Developer Portal](https://discord.com/developers/applications))

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Aldoraz/base-bot.git
   cd base-bot
   ```

2. Install the required dependencies:
   ```sh
   npm install
   ```

3. Update the `config.json` file with your bot's token, client ID, and server IDs:
   ```json
   {
     "token": "YOUR_APP_TOKEN",
     "clientId": "YOUR_APP_ID",
     "devServerId": "YOUR_DEV_SERVER_ID",
     "prodServerId": "YOUR_PROD_SERVER_ID"
   }
   ```
   
   - devServerId is optional for a private test server.
   - prodServerId is optional for a private production server.
   - You can of course push commands globally so anyone can use them.

## Usage
### Running the Bot
To start the bot, use:
```sh
npm run start
```

### Deploying Commands
To deploy slash commands to different environments (Refer to Installation Step 3.):

- Development Server:
  ```sh
  npm run deploy:dev
  ```

- Production Server:
  ```sh
  npm run deploy:prod
  ```

- Global:
  ```sh
  npm run deploy:global
  ```

### Deleting a Command
To delete a specific command from an environment (replace `<env>` with `dev`, `prod`, or `global`, and `<commandId>` with the command's ID):
```sh
npm run delete:<env> <commandId>
```

## Adding New Commands
Commands are located in the `commands` folder, organized into subfolders. To add a new command:
1. Create a new `.js` file under an appropriate subfolder in `commands`.
2. Define the command with the required `data` and `execute` properties.

Example command (`ping.js`):
```js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
```

## Adding New Events
Events are located in the `events` folder. To add a new event:
1. Create a new `.js` file in the `events` folder.
2. Define the event with `name` and `execute` properties.

Example event (`ready.js`):
```js
const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributions
Contributions are welcome! Feel free to fork this repository, make your changes, and submit a pull request.

