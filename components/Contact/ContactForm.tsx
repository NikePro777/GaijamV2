import styles from '../../styles/contact.module.scss';
import ContactInput from './ContactInput';

const ContactForm = () => {
  return (
    <form className={styles.contact__form}>
      <ContactInput text="Ф.И.О.*" placeholder="Укажите ваши Ф.И.О." type="text" name="fullName" />
      <ContactInput
        text="Должность/компания"
        placeholder="Укажите вашу должность/компанию"
        type="text"
        name="company"
      />
      <ContactInput text="E-mail*" placeholder="Укажите ваш E-mail" type="email" name="email" />
      <ContactInput text="Телефон*" placeholder="Укажите ваш телефон" type="tel" name="phone" />
    </form>
  );
};

export default ContactForm;
