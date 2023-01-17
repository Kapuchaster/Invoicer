interface Props {
  src: string;
}

const Logo = ({ src }: Props) => {
  const logoStyle = {
    width: "100%",
    maxWidth: "18.75rem",
  };

  return <img src={src} style={logoStyle} alt="logo" />;
};

export default Logo;
