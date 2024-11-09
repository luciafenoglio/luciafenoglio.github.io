import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './routes/App.tsx'
import {createHashRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import CertificateViewer from "./routes/Certificate.tsx";

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/cert/:id",
                element: <CertificateViewer />,
            }
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
