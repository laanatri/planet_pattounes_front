import LoginForm from "@/app/components/Forms/LoginForm";
import {Suspense} from "react";

export default function Login() {
    return (
        <main>
            <div>
                <h1>Login</h1>
            </div>
            <Suspense>
                < LoginForm/>
            </Suspense>
        </main>
    )
}