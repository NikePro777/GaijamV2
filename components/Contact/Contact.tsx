import MainTitle from '../MainTitle/MainTitle';
import styles from '../../styles/contact.module.scss';
import ContactForm from './ContactForm';

const Contact = () => {
  // const isMobile485 = useMediaQuery(485);

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <MainTitle text="напишите нам" />
      </div>
      <div className="sub-container">
        <div className={styles.contact__inner}>
          <div className={styles.contact__left}>
            <p className={styles.contact__text}>
              Нужна помощь с ремонтом авто? Или хотели бы приобрести новый?
            </p>
            <p className={styles.contact__text}>
              Напишите нам и мы подберем для вас лучшие варианты и перезвоним
            </p>

            <h3 className={styles.contact__title}>
              <span className={styles.contact__title__text}>Мы в соцсетях:</span>
              {/* <span className={styles.contact__title__arrow}><ArrowSvg /></span> */}
              <span className={styles.contact__title__border} />
            </h3>
            {/* <SocialList /> */}
          </div>
          <div className={styles.contact__right}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
