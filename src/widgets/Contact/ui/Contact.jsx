/* eslint-disable jsx-a11y/anchor-is-valid */
import {memo} from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {useTranslation} from 'react-i18next';
import Container from 'shared/ui/container/Container';
import {ReactComponent as Location} from 'shared/assets/icon/location.svg';
import {ReactComponent as Fb} from 'shared/assets/icon/facebook.svg';
import {ReactComponent as Phone} from 'shared/assets/icon/phone.svg';
import 'shared/config/i18n/i18next';
import s from './Contact.module.scss';
import Map from 'shared/ui/Map/Map';

const Contact = () => {
	const {t} = useTranslation();

	return (
		<section id="contact" className={s.section}>
			<Container>
				<div className={s.inner_wrapper}>
					<h1 className={s.title}>{t('contacts.title')}</h1>
					<ul className={s.items}>
						<li className={s.item}>
							<h3 className={s.subtitle}>
								{t('contacts.block_1')}
							</h3>
							<ul className={s.contactList}>
								<li className={s.contactItem}>
									<a href="/">
										<AccessTimeIcon className={s.icon} />
										{t('shedule.text')}
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="tel:+481785015599">
										<Phone
											className={`${s.icon} ${s.phone}`}
										/>
										+48 17 850 15599
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="tel:+48669380380">
										<Phone
											className={`${s.icon} ${s.phone}`}
										/>
										+48 669 380 380
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="tel:+48667580380">
										<Phone
											className={`${s.icon} ${s.phone}`}
										/>
										+48 667 580 380
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="mailto:innovdentlab@icloud.com">
										<LocalPostOfficeIcon
											className={s.icon}
										/>
										innovdentlab@icloud.com
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="/">
										<Location className={s.icon} />
										<span>
											ul. Lewakowskiego 10 <br />
											35-119 Rzeszów | Polska
										</span>
									</a>
								</li>
							</ul>
						</li>
						<li className={s.item}>
							<h3 className={s.subtitle}>
								{t('contacts.block_2')}
							</h3>
							<ul className={s.contactList}>
								<li className={s.contactItem}>
									<a
										href="https://instagram.com/idc_innovationdentalclinik"
										rel="noreferrer"
										target="_blank">
										<InstagramIcon className={s.icon} />
										Instagram
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="/">
										<Fb className={s.icon} />
										Telegram
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="/">
										<WhatsAppIcon className={s.icon} />
										WhatsApp
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<Map />
				</div>
			</Container>
		</section>
	);
};

export default memo(Contact);
