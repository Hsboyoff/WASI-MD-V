//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94711814650";
global.owner = process.env.OWNER_NUMBER || "94711814650";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZTekRVVGp5RlRGUkZjWEpaRkc2V2VPV25tTDFjemhxQUFTVmd0UnozND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzBVRCtVODF2ejVXQ1cxaE53VzZKSC9ibDJHbmVubnJ2WElJenZINDIyVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTkdvZkFxcXNFeUtXc1ZmWkZDZnRZdnltM2t0V2FLNVJseDVKSkd2ZEdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3a2ZFZTRyZVM5UFMweFg4emk5VmdTRjBqblpEa25aWHN1UVVSdVNUV1RBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdKNG1xTEhlV2lYMkFCV3NKSzdpaGUzYnJPOVBzZHZFSmo1UlJlRVpHbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ5MENqb1F4c28zRWhOeStnTXhIZ1hoZ1NtOUtDUUdiRkJRUm5mWFlzU0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK045RVZibktsYjBuY3ZnUXRnTFhOR2hhK1RyMHkzcmRaUVJYdkZHZFlVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFBLc2JCZkxnSkhCMUJVYVRraXpRUzZETFJ1UnMwc1JJRi9HM1RqSUtSND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InErZVdiNlZXUU12bFVaZmpSekFzT25MQ3Fyak9UQVZ0RU9KRUJnUzBiRTRmZUtuTTZTdTNPa1o0bWxOU0Q5QmVVYXlxb1pwZmFaUnR5NmtjSFAxRmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiJLdTlsUUU4L0g1U3R3UXp2aEx2SWFGWUp4aUladVZqRzY1QkY1UzlZRUEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzExODE0NjUwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQwMUE5MjBCQ0RDQzczRkUwNkRBQUZDMUIwNkUxRUI4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI5NTQ0MTB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzExODE0NjUwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNDN0UyNjU0QjA2OEE4NEVGQTdBRTZGN0VFQUMxRTFBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI5NTQ0MTB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzExODE0NjUwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE3MzEzOEJGMUFFMkE3MTc3OUQ0N0VBMjVBQjBBRTQxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI5NTQ0MTN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzExODE0NjUwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE2ODZGMzNCOEJENjYxNTAzQ0VDOEM1RjRCQzdDOERCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI5NTQ0MTN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZvaFdJaUpBVHQyRC1lX2tlTVQyWUEiLCJwaG9uZUlkIjoiZjBjMTZjZjktMGM1Ny00MWU4LTgxMjgtNjNmNWI2NzViYzc3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdvRld2ckRrWTM0eUlEbU5TUzQyWjdxZEgzWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxbUY3WXJ5RFhXQjdNYkthUkJDNzlsdmovRms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUlFHQUQ3QUgiLCJtZSI6eyJpZCI6Ijk0NzExODE0NjUwOjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Zg/CdmZbwnZmo8J2ZnfCdmZbwnZmjIPCdmYrwnZmb8J2Zm/CdmZ7wnZmY8J2ZnvCdmZbwnZmhIPCdmY/wnZma8J2ZmPCdmZ0g8J2ZhPCdmaPwnZmb8J2ZpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGJCcVpNSEVKeVNxN29HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVjRKbisxVnRCNjdtTU82dU14S3FEazBCcXErOFd5UHJyL2lDaFVvSEZ6VT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK2FxQjYzWHY2eWhHRHJaMDVQK09VcFdWb1ZIVU1scHpLN0NYT2k2dzVhQmtwMXhoOUlYWVZKMEt0RER4RmZYRVRVKzE2WThieVZ2cm8xN2dtRFhSQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjZ5YUZ2OU1BUHBDU2ZVS1ZuQTJBUm9iSkordWZzOFI5ZHg2YkFMd0w4elZiRzFkbTlZZjhvUHdCZGVxdWEzMVRnTHM0emJHbW5qRW5Cdkd2WjJuOWp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTE4MTQ2NTA6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWZUNaL3RWYlFldTVqRHVyak1TcWc1TkFhcXZ2RnNqNjYvNGdvVktCeGMxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyOTU0NDA5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNpRiJ9";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
