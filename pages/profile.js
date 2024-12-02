import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faSave, faCheckCircle, faTimesCircle, faEye, faEyeSlash, faTrash, faExclamationTriangle, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, InputWrapper, IconWrapper, Input, ButtonWrapper, Notification, NotificationIcon, PasswordToggleIcon, DeleteButton, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, CancelButton, ConfirmDeleteButton, WarningIcon } from '@/frontend/styles/profile.styles';

const Profile = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [notification, setNotification] = useState(null);
  const [tokenError, setTokenError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [originalData, setOriginalData] = useState({ name: '', email: '', password: '' });
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          if (!tokenError) {
            setTokenError(true);
          }
          router.push('/login');
          return;
        }

        const response = await axios.get('https://backend-aquaclean.onrender.com/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData({
          name: response.data.user.name,
          email: response.data.user.email,
          password: ''
        });

        setOriginalData({
          name: response.data.user.name,
          email: response.data.user.email,
          password: ''
        });
      } catch (error) {
        router.push('/login');
      }
    };

    fetchUserProfile();
  }, [router, tokenError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isProfileUpdated =
      userData.name !== originalData.name ||
      userData.email !== originalData.email ||
      userData.password !== originalData.password;

    if (!isProfileUpdated) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        if (!tokenError) {
          setTokenError(true);
        }
        router.push('/login');
        return;
      }

      await axios.put('https://backend-aquaclean.onrender.com/api/user/profile',{ ...userData },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setNotification({
        type: 'success',
        message: 'Perfil actualizado exitosamente',
        icon: faCheckCircle,
      });

      setTimeout(() => {
        setNotification(null);
      }, 3000);

      if (userData.password !== '' && userData.password !== originalData.password) {
        setTimeout(() => {
          localStorage.removeItem('token');
          router.push('/login');
        }, 3000);
      }

    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Ocurrió un error al actualizar tu perfil. Intenta nuevamente.',
        icon: faTimesCircle,
      });

      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleDeleteAccount = () => {
    setShowModal(true);
  };

  const deleteAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      await axios.delete('https://backend-aquaclean.onrender.com/api/user/delete-account', {
        headers: { Authorization: `Bearer ${token}` },
      });

      localStorage.removeItem('token');
      setShowModal(false);
      router.push('/login');
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Ocurrió un error al eliminar la cuenta. Intenta nuevamente.',
        icon: faTimesCircle,
      });

      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <>
      {notification && (
        <Notification type={notification.type}>
          <NotificationIcon>
            <FontAwesomeIcon icon={notification.icon} />
          </NotificationIcon>
          {notification.message}
        </Notification>
      )}

      <Form onSubmit={handleSubmit}>
        <h2 style={{ fontSize: '30px' }}>Editar Perfil</h2>

        <InputWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faUser} />
          </IconWrapper>
          <Input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faEnvelope} />
          </IconWrapper>
          <Input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faLock} />
          </IconWrapper>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <PasswordToggleIcon onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </PasswordToggleIcon>
        </InputWrapper>

        <ButtonWrapper>
          <Button type="submit">
            <FontAwesomeIcon icon={faSave} /> Guardar Cambios
          </Button>

          <DeleteButton type="button" onClick={handleDeleteAccount}>
            <FontAwesomeIcon icon={faTrash} /> Eliminar Cuenta
          </DeleteButton>
        </ButtonWrapper>
      </Form>

      {showModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>¿Estás seguro?</ModalHeader>
            <WarningIcon>
                <FontAwesomeIcon icon={faExclamationTriangle} />
            </WarningIcon>
            <ModalBody>
              Esta acción eliminará permanentemente tu cuenta. ¿Quieres continuar?
            </ModalBody>
            <ModalFooter>
              <ConfirmDeleteButton onClick={deleteAccount}>
                <FontAwesomeIcon icon={faCheck} /> Confirmar eliminación
              </ConfirmDeleteButton>
              <CancelButton onClick={cancelDelete}>
                <FontAwesomeIcon icon={faTimes} /> Cancelar
              </CancelButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Profile;