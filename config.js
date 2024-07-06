module.exports = {
  TOKEN: "",
  ownerID: ["1155151049355702314", ""],
  botInvite: "https://discord.com/oauth2/authorize?client_id=1259086077243817994",
  supportServer: "https://discord.gg/dYhpBJJVNe",
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: 'MRAKCHI',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://youtube.com/@mrakchi26",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
