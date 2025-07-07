'use server';

import {signIn} from "../../../auth";
import { AuthError } from 'next-auth';

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        const redirectTo = formData.get('redirectTo') as string || '/';
        await signIn('credentials', {
            ...Object.fromEntries(formData),
            redirectTo: redirectTo
        })
    } catch (error: any) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Identifiants invalides.';
                default:
                    return 'Une autre erreur.';
            }
        }
        console.error(error);
        throw error;
    }
}