import logoTitle from '../assets/logo-title.svg';
import './LogoTitle.css';

const LogoTitle: React.FC = () => {
  return (
    <div className="logo-title">
      <img src={logoTitle} title='Logo Title' alt="Logo Title" />
    </div>
  );
};

export default LogoTitle;
