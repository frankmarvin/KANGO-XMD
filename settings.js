/*
  project_name :𝔠𝔞𝔩𝔪𖣘𝔟𝔢𝔦𝔟-XMD Bot
  Version : 2.4.0
  Owner : 𝔠𝔞𝔩𝔪𖣘𝔟𝔢𝔦𝔟
  Do Not Clone 


*/

//----------------------[ 𝔠𝔞𝔩𝔪𖣘𝔟𝔢𝔦𝔟-XMD]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~F7M0hajK#VxmzWnBuCZMEFtu80HztZ9tP_8BaIMT00gjoV_YG-rU'
//Enter your 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿 session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || '𝔠𝔞𝔩𝔪𖣘𝔟𝔢𝔦𝔟-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '254111932171'

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || '𝔠𝔞𝔩𝔪𖣘𝔟𝔢𝔦𝔟'

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "𝔠𝔞𝔩𝔪𖣘𝔟𝔢𝔦𝔟"

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "𝔠𝔞𝔩𝔪𖣘𝔟𝔢𝔦𝔟"

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Kenya"
//Don't edit this if you don't know!

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";
// Not really necessary on panels/vps/termux, just put it when bot settings reset when bot restarts.

//Go to https://github.com/settings/tokens, select 'Tokens (classic)', then tap 'Generate new token' and select 'Generate new token (classic)'. Enter any note, choose 'No expiration', and under 'Select scopes', tick 'repo'. Scroll down, generate the token, and copy it. Paste it here. If using a single token for multiple bots, change the owner number to avoid settings mixups.


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©𝔠𝔞𝔩𝔪𖣘𝔟𝔢𝔦𝔟-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '> © 𝔠𝔞𝔩𝔪𖣘𝔟𝔢𝔦𝔟-XMD', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! */

//😞 

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿 ]----------------------//
