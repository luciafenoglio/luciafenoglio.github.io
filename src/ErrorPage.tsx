import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as { statusText?: string; message?: string };
    console.error(error);

    return (
        <div className="container mx-auto text-center h-screen flex flex-col justify-center items-center">
            <h1 className="text-6xl mb-4">¡Ops!</h1>
            <p className="text-2xl mb-4">¡Lo siento! Ocurrió un error inesperado :(</p>
            <p className="text-xl">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
