import { useState } from "react";
import type { Zeneszam_type } from "./Models/Types/Zeneszam.type";
import type { Oldal_type } from "./Models/Types/Oldal.type";

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
  return (
    <>
    
    </>
  )
};