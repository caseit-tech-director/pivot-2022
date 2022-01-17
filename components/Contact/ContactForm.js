import style from '../../styles/modules/_contact.module.scss';

export default function ContactForm() {
  return (
    <div className={style['container']}>
      <h4 className={style['contact--form--title']}>SEND A MESSAGE</h4>
      <form action="action_page.php">
        <div className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="fname">
            FULL NAME
          </label>
          <input
            className={style['form--input']}
            type="text"
            id="fname"
            name="name"
            placeholder="Your Full Name"
          />
        </div>
        <div className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="email">
            EMAIL ADDRESS
          </label>
          <input
            className={style['form--input']}
            type="text"
            id="email"
            name="email"
            placeholder="Your Email Address"
          />
        </div>
        <div className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="subject">
            MESSAGE
          </label>
          <textarea
            rows="4"
            className={[
              style['form--input'],
              style['form--message--input'],
            ].join('')}
            id="subject"
            name="subject"
            placeholder="Message"
          ></textarea>
        </div>

        <button type="submit" value="Your Message">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}
