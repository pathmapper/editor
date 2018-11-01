#!/usr/bin/env node
 
const bot = require("circle-github-bot").create();
 
bot.comment(`
//<h3>${bot.env.commitMessage}</h3>
Test build: <strong>${bot.artifactLink('../../artifacts/build/index.html', 'demo')}</strong>
`);
