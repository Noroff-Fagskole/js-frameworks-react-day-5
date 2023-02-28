import styles from './FormButton.module.css';
import dangerStyles from './Danger.module.css';

const FormButton = (props) => {
  let extraClass = null;

  if (props.variant === 'danger') {
    extraClass = dangerStyles.danger;
  }

  return (
    <button className={`${styles.button} ${extraClass}`}>
      {props.children}
    </button>
  );
};

export default FormButton;
