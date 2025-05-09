import dotenv from "dotenv";
dotenv.config();
const conf = {
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "on",
  AUTO_LIKE: process.env.AUTO_LIKE || "on",
  AUTO_READ_DM: process.env.AUTO_READ_DM || "off",
  AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || "off",
  ADM: process.env.ANTI_DELETE || "on",
  ON: process.env.OWNER_NAME || "FLASH-MD",
  ANTICALL: process.env.ANTICALL || "off",
  ANTIPROMOTE: process.env.ANTIPROMOTE || "off",
  ANTIDEMOTE: process.env.ANTIDEMOTE || "off",
  timezone: process.env.TIME_ZONE || "Africa/Nairobi",
  PRESENCE_DM: process.env.DM_PRESENCE || "typing",
  PRESENCE_GROUP: process.env.GROUP_PRESENCE || "paused",
  MODE: process.env.MODE || "private",
  AV: process.env.AV || "on",
  PREFIXES: process.env.PREFIX ? process.env.PREFIX.split(",").map(p => p.trim()).filter(p => p) : [],
  Session: process.env.SESSION || "FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURQVW5QY0IwV0RyRDYyYzlrTmtvN3JybHZGOThEaTJEb1A2eWUxeWFsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdTVFlSRENleWpnZ1NsMTE2VUZoZ3ZiTis4Y2N0MVdEdVR3cUxkbERnMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1T3JrMzJRS0k1TkRvUkJLa0psZkJOVXBDYkt0bi9ZZkdYd0hYZVllajJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0aXpOWEhDdmlSVDlnamZHS3FzZUR0RWdaS3pmU2dCeDZqa3FiVC9xM0JRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJVWtka3JDem9zbFFyK1VudlZwZEh3eklTRXhVT1dVaWtsZFl5d1ROMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVvRDVScnUzbUsyWDhPWnB5Zk9CVStqZi9UaG03OUtQZjdNbGZhcEtuMlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU8rVkNrS3JjQ2pSN3NCbVViSkVpR3B5R0FxenEvY09HNm53UWI4YWhGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGt3OUpuMlFMNlhrdW1jS0xQOUY4aUVRYnVuUmlsQ3lOUXVKeVNTejAwYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZnYVJRRy8zU2ZHTXo0OHNKaitNRXZmQk9xL281YzcxOVdkTis0N2FLemx5ejNtSGxvNW9Ha1VyS0htbkNPNlZKb1FSWUp0bzFNaU8rYzloVjBIcERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiTGh0N09Bc1d3N3hkTUpnbUpEMSsxWWlHYkV6V0srNFVJRXFORUQrWVZwWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3NzE2MjkxOTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTc1NDc2QTZDRTU5NUQxOTQ4MERENEVEQzgxNkI5MzcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTgwMTgxNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzcxNjI5MTk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI3NENFODk5QjBCOTVENzNENjdDMjU2QkQxRkUyMDFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDU4MDE4MTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjMxMjgxUzNBIiwibWUiOnsiaWQiOiIyNjM3NzE2MjkxOTk6OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE2MzQ5Mjc5NTU2ODIxMjo4QGxpZCIsIm5hbWUiOiJHb2Qnc3dpbGwgV2hlZWxzIPCfpJMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uYzRzc0NFTDJrdThBR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVBOGc5bCtMcmFkd0RrTDFFL3gzZnhHb0Z1T29SN0loTHoxL2VPamxXU289IiwiYWNjb3VudFNpZ25hdHVyZSI6IjViVmY4U0ZCZU5wcy9vMWczZnZOMHZmVFNrMkNOZjYzdTI0Q1JQVnVDUDdyNTk3WWhHbEd3eGR3SExXRFdMMDJLRVphQmRaNVFvME5OOGdxeEpUYUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCT1ZNTDllV0NtMXJHSTRvUTRqMHpIUDFqNkFCeWlzZnBtVEZneUxDeGN2alorNm9nUlNNNDBMQ0Z1NkpQZWo1anljUlVmejYrUFhRdVh1UzUyTUJBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc3MTYyOTE5OTo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZBUElQWmZpNjJuY0E1QzlSUDhkMzhScUJianFFZXlJUzg5ZjNqbzVWa3EifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTgwMTgwMiwibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUw5WSJ9",
  NUMBER: process.env.OWNER_NUMBER || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || ""
};
export default conf;
