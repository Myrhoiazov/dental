import s from './Button.module.scss';

const Button = ({ children, onClick }) => {
  return (
    <button type="button" className={s.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
