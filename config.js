const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0787691111";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_30_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY1LFxuICAgICAgICA5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM4LFxuICAgICAgICA0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDc2LFxuICAgICAgICA5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMixcbiAgICAgICAgNzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA1NixcbiAgICAgICAgODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxMFpYeGFuNEkybFUrY2xCTFB0em5sL01vRzc5TW1Vc3NHMzMvUW1NWmY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTYxNjc1OTg5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTFCMDBFOEM0OTQ5NzNFOUVFNkZEQzhFQkUzMzcwNDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MDc1ODMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjE2NzU5ODk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNTE3RDY2MTFBMEE4RUQ4MUQ2QTE5M0ZGQjI2MTFGRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwNzU4MzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MTY3NTk4OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg1RTUyNjEwNjVFRUIzNzQ0NkNBRkRCMEJGREIxQzkwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzA3NTgzNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTYxNjc1OTg5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjhEMkE2MDA3NDdBQTQ0QUZFRTBDQjdDOUU0Njg0MjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MDc1ODM0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdpbnludlBfVDJ5RGpselZkYUZ2RVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTMxY2FhZjQtZjJlNC00OTQ0LWE5NmItN2ZmN2VlOWUxNDlhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTgsXG4gICAgICAxOTgsXG4gICAgICAyMDEsXG4gICAgICA2NCxcbiAgICAgIDIyOCxcbiAgICAgIDE5NyxcbiAgICAgIDgsXG4gICAgICAyNSxcbiAgICAgIDIyMyxcbiAgICAgIDU3LFxuICAgICAgMzUsXG4gICAgICA0MCxcbiAgICAgIDEwLFxuICAgICAgMTE4LFxuICAgICAgNDIsXG4gICAgICAxNDcsXG4gICAgICAxOCxcbiAgICAgIDQzLFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgNDksXG4gICAgICAxNDYsXG4gICAgICAxOTAsXG4gICAgICA2OSxcbiAgICAgIDI0MSxcbiAgICAgIDExMSxcbiAgICAgIDI0MyxcbiAgICAgIDMzLFxuICAgICAgNzMsXG4gICAgICAyMTYsXG4gICAgICAxODMsXG4gICAgICAwLFxuICAgICAgNjUsXG4gICAgICA2MyxcbiAgICAgIDE5MyxcbiAgICAgIDE4MixcbiAgICAgIDIyNixcbiAgICAgIDIsXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzEzSjJaRjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYxNjc1OTg5NDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzQwMDY3NzQ4MjkxNDE6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJST1NFXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFNrakpFRkVQSCs0YklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjSENHRjhIbUFFUWs0VlFuVXJkbXpONDkxM3M5KzZ2dzBvYjdDUnJueFFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpweUU5bnpRamlVNDlDdDMwVTdDUmNDa3BvZzkxSDVmUXJsa3BoQlppVWNDYWxhcHQ2eWluTml0c1k5S3NseDE4WTQ4TXZUeHdqcmZPdFl1aER5eERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVuZWttdzdvdWlvS3lkNDR2VmFOMy9uYWlrQzQ2dS8zUnVjZi9pNVV4dytYOEsrcXlDTGZwQUNXc2psUVN3THRZQ0RFb2MzbTdZTzF6cGZtY1NyM0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYxNjc1OTg5NDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzA3NTgzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU14VVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXhVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSjN4bmhTLzN3WitCWXRLcCtxQ2w1aUtPZk5nR096VUdlOUdZa1dhNDFVQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzc4MDMwMTMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcwNzU4MzA4OTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
