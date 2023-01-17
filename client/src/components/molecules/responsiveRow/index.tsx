import "./styles.css";

interface Props {
  leftElement: JSX.Element;
  rightElement: JSX.Element;
}

const ResponsiveRow = ({ leftElement, rightElement }: Props) => {
  return (
    <section className="responsive-row">
      <div className="responsive-row__block responsive-row__block--left responsive-row__logo">
        {leftElement}
      </div>
      <div className="responsive-row__block responsive-row__block--right">
        {rightElement}
      </div>
    </section>
  );
};

export default ResponsiveRow;
