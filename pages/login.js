import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { 
  CardContainer, 
  Card, 
  FormTitle, 
  InputField, 
  Button, 
  ErrorMessage, 
  LinkWrapper, 
  InputWrapper, 
  IconWrapper, 
  TogglePasswordButton 
} from '../frontend/styles/login.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const passwordValidation = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!passwordValidation.test(password)) {
      setErrorMessage('La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.');
      return;
    }

    try {
      const response = await axios.post('https://backend-aquaclean.onrender.com/api/user/login', {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      router.push('/table');
    } catch (error) {
      setErrorMessage('Credenciales incorrectas. Intenta nuevamente.');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <CardContainer>
      <Card>
        <FormTitle>Inicio de Sesión</FormTitle>
        <form onSubmit={handleLogin}>
          <InputWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconWrapper>
            <InputField
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faLock} />
            </IconWrapper>
            <InputField
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
            </TogglePasswordButton>
          </InputWrapper>

          <Button type="submit">Iniciar Sesión</Button>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </form>

        <LinkWrapper>
          <p>¿Olvidaste tu contraseña?{' '}
            <Link href="/forgot-password">
              Recupérala aquí
            </Link>
          </p>
        </LinkWrapper>

        <LinkWrapper>
          <p>¿No tienes cuenta?{' '}
            <Link href="/register">
              Regístrate
            </Link>
          </p>
        </LinkWrapper>
      </Card>
    </CardContainer>
  );
};

export default Login;