import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Layout from 'shared/ui/Layout/ui/Layout';
import {HomePage} from '../pages/Home';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
