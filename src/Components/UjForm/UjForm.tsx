import type { UjForm_props } from "../../Models/Props/UjForm.prop";
import { useState } from "react";

export const UjForm = function (props: UjForm_props) {
    const [nev, setNev] = useState<string>("");
    const [eloado, setEloado] = useState<string>("");
    const [eladasok, setEladasok] = useState<number>(0);
    const [magyar, setMagyar] = useState<boolean>(false);
    return (
        <form>
            <div className="input-group">
                <label htmlFor="nameInput">Nev</label>
                <input onChange={(e) => {
                    setNev(e.target.value)
                }} type="text" name="nev" value={nev} id="nameInput" />
            </div>
            <div className="input-group">
                <label htmlFor="performerInput">Eloado</label>
                <input onChange={(e) => {
                    setEloado(e.target.value)
                }} type="text" name="eloado" value={eloado} id="performerInput" />
            </div>
            <div className="input-group">
                <label htmlFor="salesInput">Eladasok szama</label>
                <input onChange={(e) => {
                    setEladasok(Number(e.target.value))
                }} type="number" name="eladasok_szama" value={String(eladasok)} id="salesInput" />
            </div>
            <div className="input-group">
                <label htmlFor="hungarianInput">Eladasok szama</label>
                <input onChange={(e) => {
                    setMagyar(e.target.checked)
                }} type="checkbox" name="magyar" checked={magyar} id="hungarianInput" />
            </div>
            <input onClick={() => {
                props.setNewZeneszam({nev:nev,eloado:eloado,eladasok_szama:eladasok,magyar:magyar})
            }} id="modalSaveButton" type="button" value="Letrehozas" />
        </form>
    )
};