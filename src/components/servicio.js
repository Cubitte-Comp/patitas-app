import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import aseo from '../images/aseoperros.jpg';

export default function Form() {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedService, setSelectedService] = useState(''); // Estado para almacenar el servicio seleccionado
    const today = new Date();
    const handleDateChange = date => {
        const dayOfWeek = date.getDay();
        const hours = date.getHours();
    
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sábado (6) o Domingo (0)
        const isWeekday = !isWeekend;
    
        const isWithinWeekdayHours = isWeekday && hours >= 8 && hours < 17; // Lunes a Viernes de 8am a 5pm
        const isWithinWeekendHours = isWeekend && hours >= 9 && hours < 14; // Sábado y Domingo de 9am a 2pm
    
        if ((isWeekday && !isWithinWeekdayHours) || (isWeekend && !isWithinWeekendHours)) {
            console.log('El horario seleccionado no es válido para este día');
        } else {
            if (date <= today) {
                setStartDate(date);
            } else {
                console.log('Fecha inválida: Debe ser la fecha actual o anterior');
            }
        }
    };
    

    // Array de servicios que incluye 'Aseo' como una de las opciones
    const services = ['Aseo', 'Visita', 'Baño Medicado'];

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };

    return (
        <div>
            <div className='panel1 flex-1 bg-white border-2 border-black'>
                <div className='TextoPanel'>
                    <img className='aseoperros' src={aseo} alt="" />
                </div>
            </div>

            <div className='precio'>
                <div className='text-center text-white max-w-xs bg-color-dos rounded-xl'>
                    <label>Q175.00</label>
                </div>
            </div>

            <div className='hora text-center text-white max-w-xs bg-color-dos rounded-xl'>
                <label>1:30</label>
            </div>

            <div className='panel2 flex-1 bg-color-seis rounded-xl'>
                <div>
                    <div className='nombreS'>
                        <label>NOMBRE DEL SERVICIO</label>
                    </div>

                    <div className='descripS'>
                        <label>Descripcion del Servicio</label>
                    </div>

                    <div className='flex flex-col nombreC'>
                        <input
                            className='rounded-xl border-2 border-black p-2 mt-2'
                            placeholder='Nombre Completo'
                        />
                    </div>

                    <div className='mt-3 flex flex-col correoE'>
                        <input
                            className='rounded-xl border-2 border-black p-2 mt-2'
                            placeholder='ejemplo@gmail.com'
                        />
                    </div>

                    <div className='mt-3 flex flex-col Horario'>
                        <input
                            className='rounded-xl border-2 border-black p-2 mt-2'
                            type='time'
                        />
                    </div>

                    <div className='mt-3 flex flex-col Service'>
                        <select
                            className='rounded-xl border-2 border-black p-2 mt-2'
                            value={selectedService}
                            onChange={handleServiceChange}
                        >
                            <option value='' disabled>Seleccionar el Servicio</option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='mt-3 flex flex-col Fecha' style={{ border: '2px solid black' }}>
                <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    maxDate={today} // Esto establece la fecha máxima como la fecha actual
                />
            </div>

                    <div className='btnSolicitar py-3 rounded-xl mt-8 flex flex-col bg-color-dos text-white'>
                        <button>SOLICITAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
