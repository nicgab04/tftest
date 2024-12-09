import React from 'react';
import './DMCA.css'; // Importamos el archivo CSS

const DMCA = () => {
    return (
        <div className="pog my-5 mg-auto">
            <h1 className="dmca-title">DMCA</h1>
            <p className="dmca-text">
                En TFStore.com respetamos los derechos de propiedad intelectual y seguimos las
                normativas establecidas por la <strong>Digital Millennium Copyright Act (DMCA)</strong>. Nuestra
                plataforma está dedicada a ofrecer productos relacionados con el mundo de <strong>Team Fortress 2</strong>,
                pero queremos dejar claro que no estamos afiliados ni patrocinados por <strong>Valve Corporation</strong>,
                la desarrolladora del juego <strong>Team Fortress 2</strong>. Todos los derechos sobre los nombres,
                personajes, imágenes, logotipos y otros materiales relacionados con el juego <strong>Team Fortress 2</strong>
                son propiedad de <strong>Valve Corporation</strong>.
            </p>
            <p className="dmca-text">
                Si eres titular de los derechos de autor de cualquier contenido que aparece en nuestro sitio y crees que
                está siendo utilizado sin tu permiso, te pedimos que nos lo informes. Cumpliremos con las disposiciones
                de la <strong>DMCA</strong> para proteger los derechos de los propietarios de contenido original.
            </p>
            <h3 className="dmca-subtitle">Proceso de Notificación y Retiro:</h3>
            <p className="dmca-text">
                Si consideras que cualquier contenido en nuestra página infringe tus derechos de autor, por favor,
                envíanos una notificación de retiro a través de nuestro formulario de contacto o correo electrónico. Tu
                solicitud debe incluir:
            </p>
            <ul className="dmca-list">
                <li>Una descripción del trabajo protegido por derechos de autor que consideras infringido.</li>
                <li>El enlace a la página donde aparece el contenido infractor.</li>
                <li>Tu información de contacto (nombre, dirección, teléfono, correo electrónico).</li>
                <li>Una declaración de buena fe de que el uso del contenido no está autorizado por el titular de los
                    derechos de autor.
                </li>
                <li>Una firma electrónica o física del titular de los derechos de autor o su representante.</li>
            </ul>
            <p className="dmca-text">
                Una vez recibida la notificación válida, tomaremos las medidas correspondientes para retirar el contenido
                infractor de inmediato.
            </p>
            <h3 className="dmca-subtitle">Contradicción y Restablecimiento:</h3>
            <p className="dmca-text">
                Si crees que tu contenido ha sido eliminado por error o que se trata de un malentendido, puedes presentar
                una <strong>contranotificación</strong>. En este caso, el contenido será restablecido si no recibimos una
                solicitud judicial que prohíba su publicación.
            </p>
        </div>
    );
};

export default DMCA;