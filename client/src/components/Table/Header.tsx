interface Props {
  children: JSX.Element;
}

const Header = ({ children }: Props) => {
  return <thead>{children}</thead>;
};

export default Header;
