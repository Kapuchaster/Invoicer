import { SyntheticEvent, useState } from "react";
import { LineItem } from "../../../types";

import styles from "./styles.module.css";

interface Props {
  description: LineItem["description"];
  price: LineItem["price"];
  onChange: (
    description: LineItem["description"],
    price: LineItem["price"]
  ) => void;
}

const LineItemEditForm = ({ description, price, onChange }: Props) => {
  const [descriptionValue, setDescriptionValue] = useState<string>(description);
  const [priceValue, setPriceValue] = useState<number>(price);

  const handleSubmit = (event: SyntheticEvent) => {
    onChange(descriptionValue, priceValue);
    event.preventDefault();
  };

  return (
    <form className={styles["form"]} onSubmit={handleSubmit}>
      <div className={styles["form__field"]}>
        <label className={styles["form__label"]}>
          description:
          <input
            className={styles["form_input"]}
            type="text"
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
          />
        </label>
      </div>
      <div className={styles["form__field"]}>
        <label className={styles["form__label"]}>
          price:
          <input
            className={styles["form_input"]}
            type="number"
            step="0.01"
            value={priceValue}
            onChange={(e) => {
              setPriceValue(e.target.valueAsNumber);
            }}
          />
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LineItemEditForm;
