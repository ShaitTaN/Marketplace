import {Layout} from 'antd';
import {Content} from 'antd/es/layout/layout';
import {Outlet} from 'react-router-dom';
import {Header} from '../../modules/Header';
import {Footer} from '../../modules/Footer';
import {useModals} from '../store/useModals';
import {CatalogMenuModal} from '../../components/CatalogMenu/components/CatalogMenuModal/CatalogMenuModal';
import {menuItems} from '../data/menuItems';
import {Modals} from '../models/Modals';

export const AppLayout = () => {
	const catlogModal = useModals((state) => state.modals.Catalog);
	const closeModalByName = useModals((state) => state.closeModalByName);

	return (
		<Layout style={{minHeight: '100vh'}}>
			<Header />
			<Content style={{backgroundColor: '#F2F3F7', position: 'relative'}} id='main'>
				<Outlet />
				{catlogModal.isOpen && (
					<CatalogMenuModal
						open={catlogModal.isOpen}
						closeModal={() => closeModalByName(Modals.Catalog)}
						menuItems={menuItems}
					/>
				)}
			</Content>
			<Footer />
		</Layout>
	);
};
