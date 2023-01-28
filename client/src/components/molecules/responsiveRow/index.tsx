import styles from "./styles.module.css";

interface Props {
  leftElement: JSX.Element;
  rightElement: JSX.Element;
}

const ResponsiveRow = ({ leftElement, rightElement }: Props) => {
  return (
    <section className={styles["responsive-row"]}>
      <div
        className={`${styles["responsive-row__block"]} ${styles["responsive-row__block--left"]} ${styles["responsive-row__logo"]}`}
      >
        {leftElement}
      </div>
      <div
        className={`${styles["responsive-row__block"]} ${styles["responsive-row__block--right"]}`}
      >
        {rightElement}
      </div>
    </section>
  );
};

export default ResponsiveRow;
