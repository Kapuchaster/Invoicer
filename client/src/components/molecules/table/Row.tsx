interface Props {
  onClick?: () => void;
  children: JSX.Element | JSX.Element[];
}

const Row = ({ onClick, children }: Props) => {
  return <tr className={onClick ? "clickable" : ""}>{children}</tr>;
};

export default Row;
