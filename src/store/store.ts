import {defineStore} from "pinia"

interface software {
    name: String,
    id: number,
    logo: String,
    selected: boolean
}

export const useStore = defineStore("main",{
    state:()=>({
        softwareList: [{name:"VS Code",id:0,logo:"../assets/VSCODE.svg",selected:false}] as software[]
    }),
    getters:{
        getSoftwareList(state){
            return state.softwareList
        },
        getSelected(state){
            return state.softwareList.filter((softwareList) => softwareList.selected===true);
        }

    },
    actions:{
    }
})