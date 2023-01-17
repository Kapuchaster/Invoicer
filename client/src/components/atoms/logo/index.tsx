interface Props {
  src: string;
}

const Logo = ({ src }: Props) => {
  const logoStyle = {
    width: "100%",
    maxWidth: "300px",
  };

  return <img src={src} style={logoStyle} alt="logo" />;
};

export default Logo;
