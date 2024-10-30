// Logs startup message when bot is ready

const { Events } = require('discord.js');
const logger = require('../util/logger');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        logger.info(`Ready! Logged in as ${client.user.tag}`);
    },
};