interface Props {
  isHeaderCell?: boolean;
  alignRight?: boolean;
  disableTextBreak?: boolean;
  children: string | JSX.Element;
}
/**
 * @param isHeaderCell will wrap content in <th>, else <td>
 * @param alignRight will align content to the right of the cell, default left
 * @param disableTextBreak disable text breaking 
 */
const Cell = ({
  isHeaderCell,
  alignRight,
  disableTextBreak,
  children,
}: Props) => {
  const aligment = alignRight ? "right" : "left";
  const whiteSpace = disableTextBreak ? "nowrap" : "normal";

  return isHeaderCell ? (
    <th style={{ textAlign: aligment, whiteSpace: whiteSpace }}>{children}</th>
  ) : (
    <td style={{ textAlign: aligment, whiteSpace: whiteSpace }}>{children}</td>
  );
};

export default Cell;
