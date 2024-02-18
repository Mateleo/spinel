export interface item {
  name: string;
  chocoName: string;
  iconName: string;
  iconColor?: string;
  iconFlip?: boolean;
  category: string;
  params?: {
    name: string;
    description: string;
    choices: boolean;
  }[];
}

export const items: item[] = [
  {
    name: "Google Chrome",
    chocoName: "googlechrome",
    iconName: "logos:chrome",
    category: "web",
  },
  {
    name: "Mozilla Firefox",
    chocoName: "firefox",
    iconName: "logos:firefox",
    category: "web",
  },
  {
    name: "Brave",
    chocoName: "brave",
    iconName: "logos:brave",
    category: "web",
  },
  {
    name: "Opera GX",
    chocoName: "opera-gx",
    iconName: "simple-icons:operagx",
    iconColor: "#FA1E4E",
    category: "web",
  },
  {
    name: "Discord",
    chocoName: "discord",
    iconName: "logos:discord-icon",
    category: "messaging",
  },
  {
    name: "Signal",
    chocoName: "signal",
    iconName: "logos:signal",
    category: "messaging",
  },
  {
    name: "Telegram",
    chocoName: "telegram",
    iconName: "logos:telegram",
    category: "messaging",
  },
  {
    name: "Zoom",
    chocoName: "zoom",
    iconName: "logos:zoom-icon",
    category: "messaging",
  },
  {
    name: "Slack",
    chocoName: "slack",
    iconName: "logos:slack-icon",
    category: "messaging",
  },
  {
    name: "Git",
    chocoName: "git",
    iconName: "logos:git-icon",
    category: "dev",
  },
  {
    name: "Node JS Latest",
    chocoName: "nodejs",
    iconName: "logos:nodejs-icon",
    category: "dev",
  },
  {
    name: "Node JS LTS",
    chocoName: "nodejs-lts",
    iconName: "logos:nodejs-icon",
    category: "dev",
  },
  {
    name: "Python Latest",
    chocoName: "python",
    iconName: "logos:python",
    category: "dev",
  },
  {
    name: "Visual Studio Code",
    chocoName: "vscode",
    iconName: "logos:visual-studio-code",
    category: "dev",
    params: [
      {
        name: "/NoDesktopIcon",
        description: "Don't add a desktop icon.",
        choices: false,
      },
      {
        name: "/NoQuicklaunchIcon",
        description: "Don't add an icon to the QuickLaunch area.",
        choices: false,
      },
      {
        name: "/NoContextMenuFiles",
        description: "Don't add an Open with Code entry to the context menu for files.",
        choices: false,
      },
      {
        name: "/NoContextMenuFolders",
        description: "Dont't add an Open with Code entry to the context menu for folders.",
        choices: false,
      },
      {
        name: "/DontAddToPath",
        description: "Don't add Visual Studio Code to the system PATH.",
        choices: false,
      },
    ],
  },
  {
    name: "JetBrains IntelliJ IDEA (CE)",
    chocoName: "intellijidea-community",
    iconName: "logos:intellij-idea",
    category: "dev",
  },
  {
    name: "FileZilla",
    chocoName: "filezilla",
    iconName: "devicon:filezilla",
    category: "dev",
  },
  {
    name: "7-Zip",
    chocoName: "7zip",
    iconName: "simple-icons:7zip",
    category: "compression",
  },
  {
    name: "FFMPEG",
    chocoName: "ffmpeg",
    iconName: "logos:ffmpeg-icon",
    category: "media",
  },
  {
    name: "VLC",
    chocoName: "vlc",
    iconName: "mdi:vlc",
    iconColor: "#EF7700",
    category: "media",
  },
  {
    name: "Spotify",
    chocoName: "spotify",
    iconName: "logos:spotify-icon",
    category: "media",
  },
  {
    name: "PLEX",
    chocoName: "plex",
    iconName: "mdi:plex",
    iconColor: "#282A2D",
    category: "media",
  },
  {
    name: "OBS Studio",
    chocoName: "obs-studio",
    iconName: "simple-icons:obsstudio",
    iconColor: "#282A2D",
    category: "media",
  },
  {
    name: "ImageGlass",
    chocoName: "imageglass",
    iconName: "logos:imageglass",
    category: "image",
  },
  {
    name: "Paint.NET",
    chocoName: "paint.net",
    iconName: "devicon:paint.net",
    category: "image",
  },
  {
    name: "GIMP",
    chocoName: "gimp",
    iconName: "devicon:gimp",
    category: "image",
  },
  {
    name: "Inkscape",
    chocoName: "inkscape",
    iconName: "logos:inkscape",
    category: "image",
  },
  {
    name: "Blender",
    chocoName: "blender",
    iconName: "logos:blender",
    category: "image",
  },
  {
    name: "PowerToys",
    chocoName: "powertoys",
    iconName: "logos:powertoys",
    category: "tools",
  },
  {
    name: "Everything",
    chocoName: "everything",
    iconName: "material-symbols:search-rounded",
    iconColor: "#FF8000",
    iconFlip: true,
    category: "tools",
  },
  {
    name: "OpenVPN",
    chocoName: "openvpn",
    iconName: "simple-icons:openvpn",
    category: "tools",
  },
  {
    name: "Parsec",
    chocoName: "parsec",
    iconName: "arcticons:parsec",
    category: "games",
    params: [
      {
        name: "/Shared",
        description:
          "Use the same Parsec account fo all users on this computer and allow access on the Windows login scren. Use this for Team Computers.",
        choices: false,
      },
      {
        name: "/CleanUser",
        description:
          "By default parsec is installed with /nocleanuser to keep user settings. You can force clean user settings with paramter /CleanUser",
        choices: false,
      },
    ],
  },
  {
    name: "Steam",
    chocoName: "steam",
    iconName: "logos:steam",
    category: "games",
  },
  {
    name: "Epic Games Launcher",
    chocoName: "epicgameslauncher",
    iconName: "cib:epic-games",
    iconColor:"black",
    category: "games",
  },
  {
    name: "GoG Galaxy",
    chocoName: "goggalaxy",
    iconName: "simple-icons:gogdotcom",
    iconColor:"#9650D1",
    category: "games",
  },
  {
    name: "qBittorent",
    chocoName: "qbittorrent",
    iconName: "simple-icons:qbittorrent",
    category: "other",
  },
];
