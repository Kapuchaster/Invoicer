interface Props {
  isHeaderCell?: boolean;
  children: string | JSX.Element;
}

const Cell = ({ isHeaderCell, children }: Props) => {
  return isHeaderCell ? <td>{children}</td> : <th>{children}</th>;
};

export default Cell;
