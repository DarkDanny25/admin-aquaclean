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
  SuccessMessage, 
  LinkWrapper, 
  InputWrapper, 
  IconWrapper, 
  TogglePasswordButton 
} from '../frontend/styles/register.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash, faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const passwordValidation = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!passwordValidation.test(password)) {
      setMessage('La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.');
      setIsError(true);
      return;
    }

    if (!email.endsWith('@aquaclean.io')) {
      setMessage('Solo se puede registrar con un correo de dominio @aquaclean.io');
      setIsError(true);
      setTimeout(() => router.push('/pageDenied'), 3000);
      return;
    }

    try {
      const response = await axios.post('https://backend-aquaclean.onrender.com/api/user/register', {
        name,
        email,
        password,
      });

      if (response.data.role === 'admin') {
        setMessage(response.data.message);
        setIsError(false);
        setTimeout(() => router.push('/login'), 3000);
      } else {
        setMessage('Acceso denegado. Solo los administradores pueden registrarse con este correo.');
        setIsError(true);
        setTimeout(() => router.push('/pageDenied'), 3000);
      }
    } catch (error) {
      setIsError(true);
      setMessage(error.response?.data?.message || 'Error al registrar el usuario. Verifica los datos.');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <CardContainer>
      <Card>
        <FormTitle>Regístrate</FormTitle>
        <form onSubmit={handleRegister}>
          <InputWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faUser} />
            </IconWrapper>
            <InputField
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputWrapper>

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

          <Button type="submit">Registrarse</Button>

          {message && (
            isError ? (
              <ErrorMessage>
                <FontAwesomeIcon icon={faExclamationCircle} /> {message}
              </ErrorMessage>
            ) : (
              <SuccessMessage>
                <FontAwesomeIcon icon={faCheckCircle} /> {message}
              </SuccessMessage>
            )
          )}
        </form>

        <LinkWrapper>
          <p>¿Ya tienes cuenta?{' '}
            <Link href="/login">
              Inicia sesión
            </Link>
          </p>
        </LinkWrapper>
      </Card>
    </CardContainer>
  );
};

export default Register;