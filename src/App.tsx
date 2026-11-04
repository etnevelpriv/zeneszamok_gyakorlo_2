import { useState } from "react";
import type { Zeneszam_type } from "./Models/Types/Zeneszam.type";
import type { Oldal_type } from "./Models/Types/Oldal.type";
import { Fejlec } from "./Components/Fejlec/Fejlec";
import { Lablec } from "./Components/Lablec/Lablec";
import { Lista } from "./Components/Lista/Lista";

export const App = function () {
  const [zeneszamok, setZeneszamok] = useState<Zeneszam_type[]>([
    {
      nev: "Shape of You",
      eloado: "Ed Sheeran",
      eladasok_szama: "41 millió",
      magyar: false,
    },
    {
      nev: "Despacito",
      eloado: "Luis Fonsi",
      eladasok_szama: "36 millió",
      magyar: false,
    },
    {
      nev: "Az éjjel soha nem érhet véget",
      eloado: "Punnany Massif",
      eladasok_szama: "2 millió",
      magyar: true,
    },
    {
      nev: "Tavaszi szél vizet áraszt",
      eloado: "Omega",
      eladasok_szama: "1,5 millió",
      magyar: true,
    },
    {
      nev: "Blinding Lights",
      eloado: "The Weeknd",
      eladasok_szama: "30 millió",
      magyar: false,
    },
  ]);
  const [oldal, setOldal] = useState<Oldal_type>("index");

  const changeOldal = function(oldal:Oldal_type) {
    setOldal(oldal);
  };

  const deleteZeneszam = function(zeneszamToDelete:Zeneszam_type) {
    setZeneszamok(
      zeneszamok.filter((zeneszam:Zeneszam_type)=> zeneszam.nev != zeneszamToDelete.nev)
    );
  };

  const changeZeneszamMagyar = function (zeneszamToModify:Zeneszam_type, boolValue:boolean) {
    setZeneszamok((elozoZeneszamok) => {
      return (elozoZeneszamok.map((zeneszam:Zeneszam_type)=>{
        return zeneszam.nev == zeneszamToModify.nev ? {...zeneszam, magyar : boolValue} : zeneszam
      }))
    })
  };

    const modifyZeneszam = function (zeneszamToModify:Zeneszam_type, data:Zeneszam_type) {
    setZeneszamok((elozoZeneszamok) => {
      return (elozoZeneszamok.map((zeneszam:Zeneszam_type)=>{
        return zeneszam.nev == zeneszamToModify.nev ? data: zeneszam
      }))
    })
  };

  const setNewZeneszam = function (newZeneszam: Zeneszam_type) {
    setZeneszamok(((elozoZeneszamok)=>[...elozoZeneszamok, newZeneszam]));
  };

  return (
    <>
    <Fejlec changeOldal={changeOldal}></Fejlec>
    <Lista zeneszamok={zeneszamok} oldal={oldal} changeZeneszamMagyar={changeZeneszamMagyar}></Lista>
    <Lablec></Lablec>
    </>
  )
};