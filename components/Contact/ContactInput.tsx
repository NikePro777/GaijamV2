import styles from '../../styles/contact.module.scss';

interface ContactInput {
  type: string;
  text: string;
  placeholder: string;
  name: string;
}

const ContactInput = ({ type, text, placeholder, name }: ContactInput) => {
  return (
    <label className={styles.contact__form__label}>
      <span className={styles.contact__form__label__text}>{text}</span>
      <input
        className={styles.contact__form__label__input}
        type={type}
        placeholder={placeholder}
        name={name}
        required
      />
    </label>
  );
};

export default ContactInput;
