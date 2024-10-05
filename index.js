const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7320214170:AAFCVNF2CDk8-jg-jPLWbYv-eXA1jylAhQg";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = "https://glistening-sorbet-05d1b7.netlify.app";
const community_link = "https://t.me/cybizdevelopments";
bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Hey, ${userName}! Welcome to CEXP Tap!*
CEXP Token will launch soon on Ton.

Start mining now and be among the biggest players earning CEXP tokens daily.
${web_link}
Got friends, relatives, co-workers?
Bring them all into the game.
More squad power, more CDPtap tokens.`, {
        reply_markup: {
            inline_keyboard: [
              [{ text: "👋 Start now!", web_app: { url: web_link } }],
              [{ text: "Join our Community", url: community_link }],
            
            ],
            in: true
        },
    });
  });

  
  bot.launch();
  
app.listen(3002, () => {
    console.log("server is me and now running")
})