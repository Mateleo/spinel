import {defineStore} from "pinia"

interface software {
    name: String,
    id: number,
    logo: String,
    selected: boolean
}

export const useStore = defineStore("main",{
    state:()=>({
        softwareList: [{name:"TEST",id:0,logo:"VSCODE.svg",selected:false}] as software[]
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
        lorem(x:number){
            for(let i=0;i<x;i++){
                this.softwareList.length<x ? this.softwareList.push({name:"TEST",id:i,logo:"VSCODE.svg",selected:false}) : ""
            }

        }
    }
})