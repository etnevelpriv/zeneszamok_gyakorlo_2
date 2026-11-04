import type { Oldal_type } from "../Types/Oldal.type"
import type { Zeneszam_type } from "../Types/Zeneszam.type"
export type Lista_prop = {
    zeneszamok: Zeneszam_type[],
    oldal: Oldal_type,
    changeZeneszamMagyar: (zeneszamToModify: Zeneszam_type, boolValue: boolean) => void;
    deleteZeneszam: (zeneszamToDelete: Zeneszam_type) => void;
    modifyZeneszam : (zeneszamToModify: Zeneszam_type, data: Zeneszam_type)=>void
};