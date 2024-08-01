const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349049959702";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_44_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU5LFxuICAgICAgICA4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU0LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NixcbiAgICAgICAgMjU0LFxuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDYyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk5LFxuICAgICAgICA4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWU90YXZpMnF2YmlLREJKK3ZybytvdCtmdUlUeFJHU3dWZ2NpTThpQzhLQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWlNTdEZzcG1SRk82eGRvaUpQQl9VZ1wiLFxuICBcInBob25lSWRcIjogXCI4NWI2OWVkMi1lYTllLTRiNDctOWE5ZS1kMDk1Y2ZmNDMyYmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMjM1LFxuICAgICAgNzYsXG4gICAgICAyMjEsXG4gICAgICAyMTgsXG4gICAgICAxODIsXG4gICAgICAxMDgsXG4gICAgICAyNixcbiAgICAgIDIxMyxcbiAgICAgIDE0NixcbiAgICAgIDIyMyxcbiAgICAgIDE0NCxcbiAgICAgIDc5LFxuICAgICAgMjA0LFxuICAgICAgMjE0LFxuICAgICAgMjIsXG4gICAgICAxODIsXG4gICAgICAxNzAsXG4gICAgICAxMzYsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAxMzUsXG4gICAgICA0OSxcbiAgICAgIDEwOCxcbiAgICAgIDEyNyxcbiAgICAgIDE5OSxcbiAgICAgIDE4MixcbiAgICAgIDI0MyxcbiAgICAgIDE0OCxcbiAgICAgIDEzNSxcbiAgICAgIDQ5LFxuICAgICAgMTg4LFxuICAgICAgMTM0LFxuICAgICAgMTM3LFxuICAgICAgMjM0LFxuICAgICAgMTg0LFxuICAgICAgMTg2LFxuICAgICAgMTUsXG4gICAgICAyMixcbiAgICAgIDIwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDRkw1QUVDQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0OTk1OTcwMjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTUyNDUzNzEzMTg0ODU6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMK2dpcThGRUpQcXJiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFkOWFkMHlTU2tDUXBXbElFM3VwR3RQbkRyeTB0aSsvbm14ZmpHeVlVQjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ0xDb2d6YmRGQ2gveVpTN0hIMzY0MjdpRTNocEFoenp0alB4WG1FZUNlMDZyMDBpRXliMkQ3YThpVkpCYzZnbHdUdlFrOEhNQmx4cmJ3aWc0OE9IQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT1hlV25oQ1dNdTliQWlJU3htOUp0TnhLNUFXc1A2ZG9oTHp1WXpRcll4RUZkQU9xZUFxNUdIYVovR0tJeE14cUc3OXo2akthcUhZNVA1OGc1Wm9QZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0OTk1OTcwMjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTEyNjYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXFlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKekU1SXZOZk44Nmk5U0RUV2I5Ri9GVytKU1o3a1g0UTdqQ0R0ZFZPYzRBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NDA5MTE0MTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5NDEyNzM5NzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
