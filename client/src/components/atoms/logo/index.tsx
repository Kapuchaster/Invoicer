import styles from "./styles.module.css";

interface Props {
  src: string;
}

const Logo = ({ src }: Props) => (
  <img src={src} className={styles.logo} alt="logo" />
);

export default Logo;
