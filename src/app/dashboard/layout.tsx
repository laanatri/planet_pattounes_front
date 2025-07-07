import SessionProviderWrapper from "../SessionProviderWrapper";

export default function Dashboard({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
            {/*<Navbar items={items} />*/}
            <div>
                <SessionProviderWrapper>
                    {children}
                </SessionProviderWrapper>
            </div>
        </>
    )
}