"use client";

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Adopter() {

    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <p>Chargement de la session...</p>;
    }
    if (status === 'unauthenticated') {
        return null;
    }

    return (
        <>
            <p>ADOPTER DASHBOARD</p>
            <p>Bonjour {session?.user?.username}</p>
        </>
    )
}