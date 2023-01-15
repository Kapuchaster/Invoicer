interface Props {
  isHeaderCell?: boolean;
  alignRight?: boolean;
  children: string | JSX.Element;
}
/**
 * @param isHeaderCell will wrap content in <th>, else <td>
 * @param alignRight will align content to the right of the cell, default left
 */
const Cell = ({ isHeaderCell, alignRight, children }: Props) => {
  const aligment = alignRight ? "right" : "left";
  return isHeaderCell ? (
    <th style={{ textAlign: aligment }}>{children}</th>
  ) : (
    <td style={{ textAlign: aligment }}>{children}</td>
  );
};

export default Cell;
