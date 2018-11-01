#!/usr/bin/env node
 
if (!process.env.GH_AUTH_TOKEN) {
    console.error("Missing GH_AUTH_TOKEN env var, refusing to run.");
    process.exit();
}

const bot = require("circle-github-bot").create();
 
bot.comment(`
<h5>${bot.env.commitMessage}</h5>
<strong>${bot.artifactLink('../../artifacts/build/index.html', 'Test build')}</strong>
`);
