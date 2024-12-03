import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Footer, FooterText, SocialIcons, SocialButton } from '@/frontend/styles/footer.styles';

const FooterComponent = () => {
  return (
    <Footer>
      <FooterText>
        © 2024 AquaClean. Todos los derechos reservados.
      </FooterText>
      <SocialIcons>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <SocialButton>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialButton>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <SocialButton>
            <FontAwesomeIcon icon={faXTwitter} />
          </SocialButton>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <SocialButton>
            <FontAwesomeIcon icon={faInstagram} />
          </SocialButton>
        </a>
      </SocialIcons>
    </Footer>
  );
};

export default FooterComponent;