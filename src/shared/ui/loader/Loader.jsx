import style from './Loader.module.scss';
import {ThreeDots} from 'react-loader-spinner';

function Loader() {
	return (
		<div className={style.wrapper}>
			<ThreeDots color="#e8408a" />
		</div>
	);
}

export default Loader;
