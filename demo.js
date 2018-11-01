#!/usr/bin/env node
 
const bot = require("circle-github-bot").create();
 
bot.comment(`
<h5>${bot.env.commitMessage}</h5>
<strong>${bot.artifactLink('../../artifacts/build/index.html', 'Test build')}</strong>
`);
