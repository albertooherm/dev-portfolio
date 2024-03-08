import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar los datos del formulario, como enviar un email.
    console.log(formData);
    alert('Mensaje enviado. Gracias por contactarme!');
    // Resetear el formulario (opcional)
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg px-8 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Contáctame</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
