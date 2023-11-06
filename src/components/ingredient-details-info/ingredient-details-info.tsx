import styles from "./ingredient-details-info.module.css";

type TProps = {
  title: string;
  value: string | number;
};

export default function IngredientDetailsInfo({ title, value }: TProps) {
  return (
    <div className={`${styles.infoBlock}`}>
      <div>{title}</div>
      <div className="text text_type_digits-default">{value}</div>
    </div>
  );
}
