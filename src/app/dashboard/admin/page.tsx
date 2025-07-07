export default function Association() {
    return (
        <>
            <p>ADMIN DASHBOARD</p>
            <p>Bonjour {session?.user?.username}</p>
        </>
    )
}