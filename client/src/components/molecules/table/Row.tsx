interface Props {
  children: JSX.Element | JSX.Element[];
}

const Row = ({ children }: Props) => {
  return <tr>{children}</tr>;
};

export default Row;
