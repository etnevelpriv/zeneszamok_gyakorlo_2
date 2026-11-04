import type { Lista_prop } from "../../Models/Props/Lista.props";
import type { Zeneszam_type } from "../../Models/Types/Zeneszam.type";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

export const Lista = function (props: Lista_prop) {
    const [kivalasztottZeneszam, setKivalasztottZeneszam] = useState<Zeneszam_type | null>(null);

    const onClose = function () {
        setKivalasztottZeneszam(null)
    };
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nev</th>
                        <th>Eloado</th>
                        <th>Eladasok</th>
                        <th>Magyar</th>
                        {(props.oldal == "moderator" || props.oldal == "admin") && (
                            <th>
                                Esemenyek
                            </th>
                        )}

                    </tr>
                </thead>
                <tbody>
                    {props.zeneszamok.map((zeneszam: Zeneszam_type, index: number) => (
                        <tr key={index}>
                            <td>{zeneszam.nev}</td>
                            <td>{zeneszam.eloado}</td>
                            <td>{zeneszam.eladasok_szama.toString()}</td>
                            <td>{zeneszam.magyar ? "Igen" : "Nem"}</td>
                            {props.oldal == "moderator" && (
                                <td>
                                    <button onClick={() => { props.changeZeneszamMagyar(zeneszam, zeneszam.magyar ? false : true) }}>Magyar módosítás</button>
                                </td>
                            )}
                            {props.oldal == "admin" && (
                                <td>
                                    <button onClick={() => { setKivalasztottZeneszam(zeneszam) }}>Rekord modositasa</button>
                                    <button onClick={() => { props.deleteZeneszam(zeneszam) }}>Rekord torlese</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            {kivalasztottZeneszam !== null && (
                <Modal zeneszamToModify={kivalasztottZeneszam} modifyZeneszam={props.modifyZeneszam} onClose={onClose} />
            )}
        </>
    )
};