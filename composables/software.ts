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
    name: "WinRar",
    chocoName: "winrar",
    iconName: "https://upload.wikimedia.org/wikipedia/fr/a/aa/WinRAR_logo_big.png",
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
    iconName: "https://upload.wikimedia.org/wikipedia/commons/3/38/VLC_icon.png",
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
    iconName: "https://static-00.iconduck.com/assets.00/plex-icon-2048x2048-kdgfrhh9.png",
    iconColor: "#282A2D",
    category: "media",
  },
  {
    name: "OBS Studio",
    chocoName: "obs-studio",
    iconName:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Open_Broadcaster_Software_Logo.png/1200px-Open_Broadcaster_Software_Logo.png",
    iconColor: "#282A2D",
    category: "media",
  },
  {
    name: "ImageGlass",
    chocoName: "imageglass",
    iconName:
      "https://store-images.s-microsoft.com/image/apps.7368.13944022079119990.d11844ce-f663-4b05-a539-38aa44e53088.376c649b-33d9-419b-acdb-02681ffc0108?h=464",
    category: "image",
  },
  {
    name: "Paint.NET",
    chocoName: "paint.net",
    iconName:
      "https://content.invisioncic.com/r125076/monthly_2020_07/2128238399_paintneticon(6).png.4b20725c1c9d337627a3a03c9ae7adec.png",
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
    iconName: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Inkscape_logo_%282-colour%29.svg",
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
    iconName:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/2020_PowerToys_Icon.svg/langfr-1024px-2020_PowerToys_Icon.svg.png",
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
    iconName: "https://cdnlogo.com/logos/o/68/openvpn.svg",
    category: "tools",
  },
  {
    name: "WizTree",
    chocoName: "wiztree",
    iconName: "https://antibodysoftware-17031.kxcdn.com/images/wiztree445x.png",
    category: "tools",
  },
  {
    name: "qBittorent",
    chocoName: "qbittorrent",
    iconName:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/New_qBittorrent_Logo.svg/240px-New_qBittorrent_Logo.svg.png",
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
    iconName:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png",
    category: "games",
  },
  {
    name: "Epic Games Launcher",
    chocoName: "epicgameslauncher",
    iconName: "https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg",
    iconColor: "black",
    category: "games",
  },
  {
    name: "GoG Galaxy",
    chocoName: "goggalaxy",
    iconName: "https://cdn.icon-icons.com/icons2/3053/PNG/512/gog_galaxy_alt_macos_bigsur_icon_190150.png",
    iconColor: "#9650D1",
    category: "games",
  },
];
