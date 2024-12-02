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
  IconWrapper,
  Modal,
  ModalContent,
  ModalInputField,
  ModalButton,
  CancelButton,
  FloatingNotification,
  PasswordIconWrapper,
} from '../frontend/styles/forgot-password.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCheckCircle, faLock, faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const router = useRouter();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('https://backend-aquaclean.onrender.com/api/user/forgot-password', { email });

      localStorage.setItem('resetToken', response.data.resetToken);
      setToken(response.data.resetToken);
      setModalVisible(true);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      setErrorMessage('No se pudo enviar el enlace. Verifica el correo o intenta más tarde.');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== newPasswordConfirm) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    try {
      const storedToken = localStorage.getItem('resetToken');

      if (!storedToken) {
        setErrorMessage('No se ha encontrado un token válido. Vuelve a solicitar el enlace de recuperación.');
        return;
      }

      await axios.post('https://backend-aquaclean.onrender.com/api/user/reset-password', {
        token: storedToken,
        newPassword,
      });

      setShowSuccessNotification(true);

      setTimeout(() => {
        setShowSuccessNotification(false);
        router.push('/login');
      }, 3000);
    } catch (error) {
      setErrorMessage('No se pudo restablecer la contraseña. Verifica el enlace o intenta más tarde.');
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
    setNewPassword('');
    setNewPasswordConfirm('');
    setErrorMessage('');
  };

  return (
    <CardContainer>
      <Card>
        <FormTitle>Recuperar Contraseña</FormTitle>
        <form onSubmit={handleForgotPassword}>
          <div style={{ position: 'relative' }}>
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
          </div>

          <Button type="submit">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
            Enviar Enlace de Recuperación
          </Button>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </form>

        <LinkWrapper>
          <p>
            ¿Recuerdas tu contraseña?{' '}
            <Link href="/login">
              Iniciar sesión
            </Link>
          </p>
        </LinkWrapper>
      </Card>

      {modalVisible && (
        <Modal>
          <ModalContent>
            <FormTitle>Restablecer Contraseña</FormTitle>
            <form onSubmit={handleResetPassword}>
              <div style={{ position: 'relative' }}>
                <IconWrapper>
                  <FontAwesomeIcon icon={faLock} />
                </IconWrapper>
                <ModalInputField
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="Nueva Contraseña"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <PasswordIconWrapper onClick={() => setShowNewPassword(!showNewPassword)}>
                  <FontAwesomeIcon icon={showNewPassword ? faEye : faEyeSlash} />
                </PasswordIconWrapper>
              </div>

              <div style={{ position: 'relative', marginTop: '20px' }}>
                <IconWrapper>
                  <FontAwesomeIcon icon={faLock} />
                </IconWrapper>
                <ModalInputField
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirmar Nueva Contraseña"
                  value={newPasswordConfirm}
                  onChange={(e) => setNewPasswordConfirm(e.target.value)}
                  required
                />
                <PasswordIconWrapper onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
                </PasswordIconWrapper>
              </div>

              <ModalButton type="submit">
                <FontAwesomeIcon icon={faLock} style={{ marginRight: '8px' }} />
                Restablecer Contraseña
              </ModalButton>
              <CancelButton type="button" onClick={handleCancel}>
                <FontAwesomeIcon icon={faTimes} style={{ marginRight: '8px' }} />
                Cancelar
              </CancelButton>
            </form>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </ModalContent>
        </Modal>
      )}

      {showNotification && (
        <FloatingNotification>
          <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '10px' }} />
          Token generado con éxito
        </FloatingNotification>
      )}

      {showSuccessNotification && (
        <FloatingNotification>
          <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '10px' }} />
          Contraseña restablecida con éxito
        </FloatingNotification>
      )}
    </CardContainer>
  );
};

export default ForgotPassword;