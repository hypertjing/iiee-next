export default function NationalOffiers() {
    return (
        <div className="flex justify-center items-center ">
            <div className="text-right w-full">
                <div className="text-[10px]">
                    <h2 className="font-bold uppercase text-xs mb-2">
                        2025 National Officers:
                    </h2>
                    <div className="space-y-2">
                        <div>
                            <p className="font-bold uppercase">
                                ALBERTO R. HERRERA JR.
                            </p>
                            <p>President</p>
                        </div>
                        <div>
                            <p className="font-bold uppercase">
                                ROBERT U. MABULAY
                            </p>
                            <p>VP - Internal Affairs</p>
                        </div>
                        <div>
                            <p className="font-bold uppercase">ADRIAN L. REY</p>
                            <p>VP - External Affairs</p>
                        </div>
                        <div>
                            <p className="font-bold uppercase">
                                CLEOFTE T. CAIDIC
                            </p>
                            <p>VP - Technical Affairs</p>
                        </div>
                        <div>
                            <p className="font-bold uppercase">
                                JEDD PER N. DE CASTRO
                            </p>
                            <p>Secretary</p>
                        </div>
                        <div>
                            <p className="font-bold uppercase">
                                JUSTO MA. J. LOPEZ JR.
                            </p>
                            <p>Treasurer</p>
                        </div>
                        <div>
                            <p className="font-bold uppercase">
                                NELSON S. ANDRES
                            </p>
                            <p>Auditor</p>
                        </div>
                    </div>

                    <h2 className="font-bold uppercase text-xs mt-4 mb-2">
                        Regional Governors:
                    </h2>
                    <div className="space-y-2">
                        {[
                            ["RIGOR G. GABUR", "Governor - Northern Luzon"],
                            ["ALVIN E. ESTANISLAO", "Governor - Central Luzon"],
                            ["JOVENIE F. TAGATAC", "Governor - Metro Manila"],
                            ["MALOU C. UMALI", "Governor - Southern Luzon"],
                            ["APRIL ALEJANDRA P. TITULAR", "Governor - Bicol"],
                            [
                                "MARLON A. BALBUENA",
                                "Governor - Western Visayas",
                            ],
                            [
                                "ERWIN J. SALVADOR",
                                "Governor - Eastern/Central Visayas",
                            ],
                            [
                                "TOMAS G. VIRTUDEZ",
                                "Governor - Northern Mindanao",
                            ],
                            ["FLOYD D. GAMAD", "Governor - Southern Mindanao"],
                            ["MARLON F. PAROT", "Governor - Western Mindanao"],
                            ["REINERIO C. SUPSUP", "Governor - Foreign"],
                            ["FLORIGO C. VARONA", "Immediate Former President"],
                        ].map(([name, title]) => (
                            <div key={name}>
                                <p className="font-bold uppercase">{name}</p>
                                <p>{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
