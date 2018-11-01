#!/usr/bin/env node
 
const bot = require("circle-github-bot").create();
 
bot.comment(`
Commit: ${bot.env.commitMessage} (${bot.env.id})
<strong>${bot.artifactLink('../../artifacts/build/index.html', 'Test build')}</strong>
`);
