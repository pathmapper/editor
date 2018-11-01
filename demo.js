#!/usr/bin/env node
 
const bot = require("circle-github-bot").create();
 
bot.comment(`
${bot.env.commitMessage}
<strong>${bot.artifactLink('../../artifacts/build/index.html', 'Test build')}</strong>
`);
