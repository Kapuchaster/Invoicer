import "./styles.css";

interface Props {
  src: string;
}

const Logo = ({ src }: Props) => <img src={src} className="logo" alt="logo" />;

export default Logo;
