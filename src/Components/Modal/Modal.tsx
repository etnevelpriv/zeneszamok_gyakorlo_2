import type { Modal_type } from "../../Models/Types/Modal.type";

export const Modal = function (props: Modal_type) {
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
                        <input type="text" name="nev" id="nameInput" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="performerInput">Eloado</label>
                        <input type="text" name="eloado" id="performerInput" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="salesInput">Eladasok szama</label>
                        <input type="number" name="eladasok_szama" id="salesInput" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="hungarianInput">Eladasok szama</label>
                        <input type="checkbox" name="magyar" id="hungarianInput" />
                    </div>
                    <input onClick={()=>{
                        
                    }} id="modalSaveButton" type="button" value="Mentes" />
                </form>
            </div>
        </div>
    )
}