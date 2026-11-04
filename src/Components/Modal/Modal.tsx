import type { Modal_type } from "../../Models/Types/Modal.type";
import { useState } from "react";

export const Modal = function (props: Modal_type) {
    const [nev, setNev] = useState<string>(props.zeneszamToModify.nev);
    const [eloado, setEloado] = useState<string>(props.zeneszamToModify.eloado);
    const [eladasok, setEladasok] = useState<number>(props.zeneszamToModify.eladasok_szama);
    const [magyar, setMagyar] = useState<boolean>(props.zeneszamToModify.magyar);

    return (
        <div className="modal" id="modal">
            <div className="modal-header">
                <h2>{props.zeneszamToModify.nev}</h2>
                <button onClick={() => document.getElementById("modal")?.remove()}>X</button>
            </div>
            <div className="modal-body">
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
                    <input onClick={()=>{
                        props.modifyZeneszam(props.zeneszamToModify, {nev:nev,eloado:eloado,eladasok_szama:eladasok,magyar:magyar}) 
                        props.onClose()
                    }} id="modalSaveButton" type="button" value="Mentes" />
                </form>
            </div>
        </div>
    )
}