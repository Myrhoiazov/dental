import { ReactComponent as Phone } from 'shared/assets/icon/phone.svg';
import { ReactComponent as Email } from 'shared/assets/icon/email.svg';
import { ReactComponent as Insta } from 'shared/assets/icon/instagram.svg';
import { ReactComponent as Messaage } from 'shared/assets/icon/messanger.svg';
import { ReactComponent as Facebook } from 'shared/assets/icon/facebook.svg';

export const contactList = [
	{
		elem: '+48 669 380 380',
		link: 'tel:+48 669 380 380',
		Icon: <Phone />,
	},
	{
		elem: 'innovdentlab@icloud.com',
		link: 'mailto:innovdentlab@icloud.com',
		Icon: <Email />,
	},
];

export const socialList = [
	{
		link: 'https://instagram.com/idc_innovationdentalclinik',
		Icon: <Insta />,
	},
	{
		link: 'https://instagram.com/idc_innovationdentalclinik',
		Icon: <Messaage />,
	},
	{
		link: 'https://instagram.com/idc_innovationdentalclinik',
		Icon: <Facebook />,
	},
];
