import React, { useState } from "react";
import contacto from "../../assets/images/contacto.png";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Aquí puedes realizar la lógica para enviar el formulario de contacto
      // Puedes usar la función fetch o cualquier otra biblioteca que prefieras

      // Simulación de éxito para propósitos de ejemplo
      console.log("Formulario de contacto enviado con éxito");

      // Puedes redirigir o mostrar un mensaje de éxito según tus necesidades
      // navigate(`/ruta-despues-de-enviar-el-formulario`);
    } catch (error) {
      console.error("Error al enviar el formulario de contacto:", error);
      setError("Error al enviar el formulario de contacto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
        <div className="md:flex w-full">
          <div className="hidden md:flex w-1/2 bg-irisBlueColor py-10 px-10 flex items-center justify-center">
            <img src={contacto} alt="persona escribiendo en un formulario de contacto" className="max-w-full max-h-full" />
          </div>

          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Contacto</h1>
              <p>Envíanos tus comentarios o preguntas</p>
            </div>
            <form onSubmit={handleContactFormSubmit}>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label className="text-xs font-semibold px-1">Nombre</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-irisBlueColor"
                      placeholder="Juan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label className="text-xs font-semibold px-1">Email</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="email"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-irisBlueColor"
                      placeholder="juan@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label className="text-xs font-semibold px-1">Mensaje</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-message-text-outline text-gray-400 text-lg"></i>
                    </div>
                    <textarea
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-irisBlueColor"
                      placeholder="Escribe tu mensaje aquí"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="block w-full max-w-xs mx-auto bg-irisBlueColor hover:bg-irisBlueColor/75 focus:bg-irisBlueColor text-white rounded-lg px-3 py-3 font-semibold" disabled={loading}>
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
