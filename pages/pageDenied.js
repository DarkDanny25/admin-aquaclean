import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { 
  Container, 
  Header, 
  Message, 
  NotificationContainer, 
  NotificationIconWrapper, 
  NotificationMessage, 
  Footer
} from '../frontend/styles/pageDenied.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const AccessDenied = () => {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      {showNotification && (
        <NotificationContainer onClick={() => setShowNotification(false)}>
          <NotificationIconWrapper>
            <FontAwesomeIcon icon={faExclamationTriangle} size="2x" color="#f0a500" />
          </NotificationIconWrapper>
          <NotificationMessage>
            Recuerda usar un correo con dominio <strong>@aquaclean.io</strong> para acceder al área administrativa.
          </NotificationMessage>
        </NotificationContainer>
      )}
      <Container>
        <Header>
          <FontAwesomeIcon icon={faBan} size="5x" color="#d32f2f" />
          <h1>Acceso Denegado</h1>
        </Header>
        <Message>
          <p>Lo sentimos, no tienes acceso al área administrativa.</p>
          <p>
            Para acceder, por favor regístrate con un correo que tenga el dominio <strong>@aquaclean.io</strong>.
          </p>
        </Message>
        <Footer>
          <p>Serás redirigido a la página principal en <strong>unos segundos</strong>...</p>
        </Footer>
      </Container>
    </>
  );
};

export default AccessDenied;