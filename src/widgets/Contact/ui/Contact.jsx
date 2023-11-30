/* eslint-disable jsx-a11y/anchor-is-valid */
import {memo} from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {useTranslation} from 'react-i18next';
import Container from 'shared/ui/container/Container';
import mastercard from 'shared/assets/images/pay-method/mastercard.png';
import paypal from 'shared/assets/images/pay-method/paypal.png';
import visa from 'shared/assets/images/pay-method/visa_new.png';
import {ReactComponent as Location} from 'shared/assets/icon/location.svg';
import {Link} from 'react-router-dom';
import 'shared/config/i18n/i18next';
import s from './Contact.module.scss';

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
										<PermPhoneMsgIcon className={s.icon} />
										+48 17 850 15599
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="tel:+48669380380">
										<PermPhoneMsgIcon className={s.icon} />
										+48 669 380 380
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="tel:+48667580380">
										<PermPhoneMsgIcon className={s.icon} />
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
										href="https://www.instagram.com/viter_hair/"
										rel="noreferrer"
										target="_blank">
										<InstagramIcon className={s.icon} />
										Instagram
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="tel:+380997438404">
										<TelegramIcon className={s.icon} />
										Telegram
									</a>
								</li>
								<li className={s.contactItem}>
									<a href="tel:+380997438404">
										<WhatsAppIcon className={s.icon} />
										WhatsApp
									</a>
								</li>
							</ul>
						</li>
						<li className={s.item}>
							<h3 className={s.subtitle}>
								{t('contacts.block_3')}
							</h3>
							<ul className={s.contactList}>
								<li className={s.contactItem}>
									<Link to="/policy">
										{t('policy.policy')}
									</Link>
								</li>
								<li className={s.contactItem}>
									<Link to="/rules">{t('policy.confi')}</Link>
								</li>
							</ul>
						</li>
					</ul>

					<div className={s.payment_container}>
						<h3 className={s.subtitle}>{t('contacts.payment')}</h3>
						<ul className={s.payment}>
							<li className={s.pay}>
								<img
									src={`${mastercard}`}
									width="70"
									alt="mastercard"
									loading="lazy"
								/>
							</li>
							<li className={s.pay}>
								<img
									src={`${visa}`}
									width="70"
									alt="mastercard"
									loading="lazy"
								/>
							</li>
							<li className={s.pay}>
								<img
									src={`${paypal}`}
									width="70"
									alt="mastercard"
									loading="lazy"
								/>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default memo(Contact);
