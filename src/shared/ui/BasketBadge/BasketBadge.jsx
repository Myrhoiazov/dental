import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import s from './BasketBadge.module.scss'

function BasketBadge() {
  return (
    <button 
		data-aos-id="super-duper" 
		type='button' className={s.wrapper} 
		data-aos="zoom-in"
		data-aos-delay="50"
		data-aos-duration="900"
		data-aos-easing="ease-in-out-back"
		>
      <ShoppingBasketIcon className={s.icon}/>
    </button>
  );
}


export default BasketBadge;
