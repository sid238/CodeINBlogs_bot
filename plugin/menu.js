// menu.js
module.exports = {
  mainMenu: (pushname, pushwish, botname, OWNER_NAME, owner, prefix, hours, minutes, devlopernumber, seconds, xtime, xdate, me, isPublic) => `
╭––『 *${botname}* 』 
┆ Hi 👋  
╰–❖  *${pushname}* 
╭–––––––––––––––༓ 
┆✑  *${pushwish}* 😄 
╰–––––––––––––––༓ 
╭–– 『 *Bot Info* 』      
┆ *Bot Name* : *${botname}*
┆ *Owner Name* : *${OWNER_NAME}*
┆ *Prefix* :  *${prefix}*
┆ *Uptime* : *${hours}h ${minutes}m ${seconds}s*
┆ *Mode* : ${isPublic ? 'Public' : 'Self'}
╰–––––––––––––––༓ 
╭––『 *User Info* 』 
┆𝗡𝗮𝗺𝗲 : *${pushname}*
┆𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split("@")[0]} 
┆𝗣𝗿𝗲𝗺𝗶𝘂𝗮𝗺 : ✅ 
╰–––––––––––––––༓ 
╭––『 *Time Info* 』 
┆𝗧𝗶m 𝗲 : *${xtime}*
┆𝗗𝗮𝘁𝗲 : *${xdate}*
╰–––––––––––––––༓ 
╭––『 *Help* 』 
┆✑  Please Type The */help* 
╰–––––––––––––––༓ﾠ 
╭––『 *ChatGPT* 』ﾠ 
┆❏.gpt 🅕 
┆❏.img 🅕 
┆❏.dalle 🅕 
╰–––––––––––––––༓ 
╭––『 *Group Menu* 』ﾠ 
┆❏.add 🅕 
┆❏.kick 🅕 
┆❏.promote 🅕
┆❏.demote 🅕 
┆❏.antilinkgc 🅕 
┆❏.antitoxic 🅕 
┆❏.addbadword 🅕 
┆❏.delbadword 🅕 
┆❏.listbadword 🅕 
┆❏.closetime 🅕
┆❏.opentime 🅕 
┆❏.linkgc 🅕 
┆❏.tagall 🅕 
┆❏.invite 🅕 
╰–––––––––––––––༓ 
╭––『 *Bard* 』 
┆❏.bard 🅕 
╰–––––––––––––––༓
╭––『 *Bot* 』ﾠ 
┆❏.script 🅕 
┆❏.ping 🅕 
┆❏.alive 🅕 
┆❏.bug 🅕 
╰–––––––––––––––༓ 
╭––『 *Search menu* 』ﾠ 
┆❏.google 🅕 
┆❏.insta 🅕 
╰–––––––––––––––༓ 
`
};
