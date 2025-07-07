export default function Admin() {
    return (
        <>
            <p>ASSOCIATION DASHBOARD</p>
            <p>Bonjour {session?.user?.username}</p>
        </>
    )
}