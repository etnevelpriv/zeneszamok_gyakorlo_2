import type { Zeneszam_type } from "./Zeneszam.type"

export type Modal_type = {
    zeneszamToModify:Zeneszam_type;
    modifyZeneszam : (zeneszamToModify:Zeneszam_type, data:Zeneszam_type)=>void
    onClose:()=>void
}