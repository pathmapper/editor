if (!process.env.GH_AUTH_TOKEN) {
    console.error("Missing GH_AUTH_TOKEN env var, refusing to run.");
    process.exit();
}

const bot = require("circle-github-bot").create();

bot.comment(`
<h4>${bot.env.commitMessage}</h4>
Preview: <strong>${bot.artifactLink('../../artifacts/build/index.html', 'Maputnik test build')}</strong>
`);
