import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    barber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la cita
    console.log(formData);
    alert('Cita reservada con éxito');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="citas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Reserva tu Cita
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Elige el día y hora que mejor te convenga
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                Servicio
              </label>
              <select
                name="service"
                id="service"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                onChange={handleChange}
              >
                <option value="">Selecciona un servicio</option>
                <option value="corte">Corte de Cabello</option>
                <option value="barba">Arreglo de Barba</option>
                <option value="tratamiento">Tratamiento Capilar</option>
              </select>
            </div>

            <div>
              <label htmlFor="barber" className="block text-sm font-medium text-gray-700">
                Barbero
              </label>
              <select
                name="barber"
                id="barber"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                onChange={handleChange}
              >
                <option value="">Selecciona un barbero</option>
                <option value="carlos">Carlos Rodríguez</option>
                <option value="miguel">Miguel Ángel</option>
                <option value="david">David López</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Fecha
              </label>
              <input
                type="date"
                name="date"
                id="date"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Hora
              </label>
              <input
                type="time"
                name="time"
                id="time"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Reservar Cita
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}