import type { Lista_prop } from "../../Models/Props/Lista.props";
import type { Zeneszam_type } from "../../Models/Types/Zeneszam.type";

export const Lista = function (props: Lista_prop) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nev</th>
                        <th>Eloado</th>
                        <th>Eladasok</th>
                        <th>Magyar</th>
                    </tr>
                </thead>
            </table>
            <tbody>
                {props.zeneszamok.map((zeneszam: Zeneszam_type, index: number) => (
                    <tr key={index}>
                        <td>{zeneszam.nev}</td>
                        <td>{zeneszam.eloado}</td>
                        <td>{zeneszam.eladasok_szama.toString()}</td>
                        <td>{zeneszam.magyar ? "Igen" : "Nem"}</td>
                    </tr>
                ))};
            </tbody>
        </>
    )
};