export interface item {
  name: string;
  chocoName: string;
  iconName: string;
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
    name: "Node JS Latest",
    chocoName: "nodejs",
    iconName: "logos:nodejs-icon",
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
];
