import { defineStore } from "pinia";
import json from "../../software.json"

interface software {
  name: String;
  id: number;
  logo: String;
  selected: boolean;
  category:
    | "Web"
    | "Messaging"
    | "Dev Tools"
    | "Media"
    | "Games"
    | "Image"
    | "Other"
    | "Compression";
}

export const useStore = defineStore("main", {
  state: () => ({
    softwareList: json as software[],
    category: 8,
  }),
  getters: {
    getCategory() {
      return [
        "Web",
        "Messaging",
        "Dev Tools",
        "Media",
        "Games",
        "Image",
        "Other",
        "Compression",
      ];
    },
    getSoftwareList(state) {
      return state.softwareList;
    },
    getSelected(state) {
      return state.softwareList.filter(
        (softwareList) => softwareList.selected === true
      );
    },
    getByCategory(state) {
      return (cat: string | undefined) =>
        state.softwareList.filter(
          (softwareList) => softwareList.category === cat
        );
    },
    getScript() {
      let select = this.getSelected;
      if (select.length === 0) {
        return "";
      }
      let script =
        "Set-ExecutionPolicy AllSigned;[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'));choco install ";
      for (let x = 0; x < select.length; x++) {
        script = script + select[x].name + " ";
      }
      return script + " -y";
    },
  },
  actions: {
    lorem(x: number) {
      for (let i = 0; i < x; i++) {
        let cat: software["category"] = "Web";
        let choice = Math.floor(Math.random() * 8);
        switch (choice) {
          case 1:
            cat = "Messaging";
            break;
          case 2:
            cat = "Dev Tools";
            break;

          case 3:
            cat = "Media";
            break;
          case 4:
            cat = "Games";
            break;
          case 5:
            cat = "Image";
            break;
          case 6:
            cat = "Other";
            break;
          case 7:
            cat = "Compression";
            break;
        }
        this.softwareList.length < x
          ? this.softwareList.push({
              name: "TEST",
              id: i,
              logo: "VSCODE.svg",
              selected: false,
              category: cat,
            })
          : "";
      }
    },
  },
});
