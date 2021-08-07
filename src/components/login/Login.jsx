import { Link } from "react-router-dom"
import "./Login.css"
export const Login = () => {


    return (
        <div class="wrapper fadeInDown">
            <div id="formContent">

                <h2 class="active"> Loguin </h2>
                <h2 class="inactive underlineHover"> Registrarse </h2>


                <div class="fadeIn first">
                    <img src="https://images.emojiterra.com/google/android-nougat/512px/1f6b2.png" id="icon" alt="User Icon" />
                </div>

                <form>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario" />
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="Contraseña" />
                    <input type="submit" class="fadeIn fourth" value="Ingresar" />
                </form>

                <div id="formFooter">
                    <Link to='/'>Olvidaste tu contrasenia?</Link>
                </div>

            </div>
        </div>
    )
}