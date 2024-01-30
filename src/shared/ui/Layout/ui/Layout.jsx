import {useState, memo, Suspense, useEffect} from 'react';
import {Link, Outlet} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';
import {useTranslation} from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import headerMenu from './headermenu';
import Container from 'shared/ui/container';
import ToggleLang from 'shared/ui/toggle-lang/ToggleLang';
import Loader from 'shared/ui/loader/Loader';
import Footer from 'shared/ui/footer/Footer';
import '../../../config/i18n/i18next';
import logo from 'shared/assets/icon/logo/full-logo.PNG';
import Contact from 'widgets/Contact/ui/Contact';
import ScrollUp from 'shared/ui//ScrollUp/ScrollUp';
import s from './Layout.module.scss';
import TopBanner from 'widgets/TopBanner/ui/TopBanner/TopBanner';

const Layout = () => {
	const {t} = useTranslation();
	const isDesktop = useMediaQuery({query: '(min-width: 1280px)'});
	const isShowBurgerMenu = useMediaQuery({query: '(max-width: 1279px)'});
	const [isShowMenu, setIsShowMenu] = useState(false);
	const [isActive, setIsActive] = useState('');

	const linkTo = (to) => {
		setIsActive(to);
		window.location.href = to;
	};

	const onHandleShow = () => {
		setIsShowMenu(!isShowMenu);
	};

	const mobileShow = (to) => {
		setIsShowMenu(!isShowMenu);
		setIsActive(to);
		window.location.href = to;
	};

	const onClickBackground = (e) => {
		if (e.target === e.currentTarget) {
			setIsShowMenu(!isShowMenu);
		}
	};

	useEffect(() => {
		if (isShowMenu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	}, [isShowMenu]);

	return (
		<div className={s.body}>
			<TopBanner />
			<div className={s.flexWrapper}>
				<header className={s.header} id="home">
					<Container>
						<div className={s.wrapper}>
							<Link to="/">
								<img src={logo} className={s.logo} alt="Logo" />
							</Link>
							<nav className={s.nav}>
								{isShowBurgerMenu && (
									<button
										type="button"
										className={s.btn_open}
										onClick={onHandleShow}>
										<MenuIcon
											color="black"
											fontSize="large"
										/>
									</button>
								)}
								{isDesktop &&
									headerMenu.map(({name, to}) => {
										return (
											<Link
												key={name}
												to={to}
												className={
													isActive === to
														? `${s.item} ${s.active}`
														: `${s.item}`
												}
												onClick={() => {
													return to !== '/'
														? linkTo(to)
														: null;
												}}>
												{t(name)}
											</Link>
										);
									})}
							</nav>
							{isDesktop && <ToggleLang className={s.lang} />}
							{isShowBurgerMenu && (
								<nav
									onClick={onClickBackground}
									className={
										isShowMenu
											? `${s.nav_mobile} ${s.showMob}`
											: s.nav_mobile
									}>
									<div
										className={
											isShowMenu
												? `${s.nav_mobile_wrapper} ${s.show}`
												: s.nav_mobile_wrapper
										}>
										{
											<button
												type="button"
												className={s.btn_close}
												onClick={onHandleShow}>
												<CloseIcon
													color="inherit"
													fontSize="large"
												/>
											</button>
										}
										<div
											style={{
												marginBottom: 40,
												paddingTop: 20,
											}}>
											<ToggleLang />
										</div>

										{headerMenu.map(({name, to}) => {
											return (
												<div
													key={name}
													className={s.link_items}>
													<Link
														to={to}
														end
														className={
															isActive === to
																? `${s.item} ${s.active}`
																: `${s.item}`
														}
														onClick={() => {
															return to !== '/'
																? mobileShow(to)
																: null;
														}}>
														{t(name)}
													</Link>

													<Link
														to="/"
														className={
															s.mobileLogo
														}>
														<img
															src={logo}
															className={s.logo}
															alt="Logo"
														/>
													</Link>
												</div>
											);
										})}
									</div>
								</nav>
							)}
						</div>
					</Container>
				</header>
			</div>
			<main className={s.main}>
				<Suspense fallback={<Loader />}>{<Outlet />}</Suspense>
			</main>
			<Contact />
			<Footer />
			<ScrollUp />
		</div>
	);
};

export default memo(Layout);
