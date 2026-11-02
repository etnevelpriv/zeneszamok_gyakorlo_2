import type { Fejlec_prop } from "../../Models/Props/Fejlec.prop";

export const Fejlec = function (props: Fejlec_prop) {
    return (
        <>
            <header>
                <nav>
                    <div className="navbar-logo">
                        Zeneszamok
                    </div>
                    <div className="navbar-buttons">
                        <ul>
                            <li>
                                <a href="#" onClick={() => { props.changeOldal("index") }}>Index</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => { props.changeOldal("admin") }}>Admin</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => { props.changeOldal("moderator") }}>Moderator</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
};