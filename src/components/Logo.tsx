import './Logo.css';
import imgLogo from '../assets/logo-spoilerator.png';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={imgLogo} alt="Spoilerator Logo" />
    </div>
  );
};

export default Logo;
