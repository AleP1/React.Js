import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

  return (
    <div className='wrapper fadeInDown'>
      <div id='formContent'>

        <h2 className='active'> Loguin </h2>
        <h2 className='inactive underlineHover'> Registrarse </h2>

        <div className='fadeIn first'>
          <img src='https://images.emojiterra.com/google/android-nougat/512px/1f6b2.png' id='icon' alt='User Icon' />
        </div>

        <form>
          <input type='text' id='login' className='fadeIn second' name='login' placeholder='Usuario' />
          <input type='text' id='password' className='fadeIn third' name='login' placeholder='Contraseña' />
          <input type='submit' className='fadeIn fourth' value='Ingresar' />
        </form>

        <div id='formFooter'>
          <Link to='/'>Olvidaste tu contrasenia?</Link>
        </div>

      </div>
    </div>
  );
};

export default Login;
