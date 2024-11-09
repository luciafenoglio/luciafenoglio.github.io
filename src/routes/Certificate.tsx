import { useParams } from 'react-router-dom';

export default function CertificateViewer() {
    const { id } = useParams();

    return (
        <div className="container mx-auto p-4">
            <iframe
                src={`/certificates/${id}.pdf`}
                width="100%"
                height="600px"
                className="border-2 border-gray-300"
                title="Vista previa de certificado"
            />
        </div>
    );
}