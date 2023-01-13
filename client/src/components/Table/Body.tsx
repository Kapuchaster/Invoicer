interface Props {
  children: JSX.Element | JSX.Element[];
}

const Body = ({ children }: Props) => {
  return <tbody>{children}</tbody>;
};

export default Body;
