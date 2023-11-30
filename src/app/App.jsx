import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Suspense, lazy} from 'react';
import Layout from 'shared/ui/Layout/ui/Layout';
import {HomePage} from '../pages/Home';
import Loader from 'shared/ui/loader';

import ReactGA from 'react-ga';
ReactGA.initialize('G-3XPXLTKPY2');

function logPageView() {
	ReactGA.set({page: window.location.pathname + window.location.search});
	ReactGA.pageview(window.location.pathname + window.location.search);
}

const CoursePage = lazy(() => import('../pages/CoursePage'));
const Policy = lazy(() => import('../pages/Policy'));
const Rules = lazy(() => import('../pages/Rules'));

export const App = () => {
	return (
		<BrowserRouter basename="/dental">
			<Suspense fallback={<Loader />}>
				<Routes history={createBrowserHistory()} onUpdate={logPageView}>
					<Route element={<Layout />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/:id" element={<CoursePage />} />
						<Route path="/policy" element={<Policy />} />
						<Route path="/rules" element={<Rules />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};
