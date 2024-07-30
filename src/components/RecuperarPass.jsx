import axiosInstance from '../axiosInstance';
import {useState} from 'react';

export const RecuperarPass = () => {

    const [email, setEmail] = useState('');

    const enviarEmail = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('request-password-reset/', {
                email: email
            });
            console.log('Correo enviado con éxito:', response.data);
        }   
        catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div>
        <form onSubmit={enviarEmail}>
            <label>Correo:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <button type="submit">Recuperar contraseña</button>
        </form>
    </div>
  )
}

export default RecuperarPass;
