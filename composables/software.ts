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
