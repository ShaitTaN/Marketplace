import {Flex} from 'antd';
import {useEffect, useState} from 'react';
import {BrandProfileCard} from '../../components/BrandProfileCard/BrandProfileCard';
import {Wrapper} from '../../ui/Wrapper/Wrapper';
import {BrandProfileTabs} from './components/BrandProfileTabs/BrandProfileTabs';
import {ImgPresentationList} from './components/ImgPresentationList/ImgPresentationList';
import {PersonalOrderModal} from './components/PersonalOrderModal/PersonalOrderModal';
import {useBrandProfile} from './store/useBrandProfile';
import {selectBrandInfo, selectGetBrandInfo} from './store/useBrandProfile.selectors';
import {useParams} from 'react-router-dom';

export const BrandProfilePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const {brandId} = useParams();

	const brandInfo = useBrandProfile(selectBrandInfo);
	const getBrandInfo = useBrandProfile(selectGetBrandInfo);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		getBrandInfo(brandId || '');
	}, [getBrandInfo, brandId]);

	return (
		<Wrapper withCookies vertical gap={12} style={{padding: '12px 0'}}>
			<ImgPresentationList />
			<Flex justify='space-between'>
				<BrandProfileCard
					title={brandInfo?.name || 'Нет названия'}
					locationDescription='Кострома'
					description={brandInfo?.description || 'Нет описания'}
					rate={brandInfo?.rating}
					comments={brandInfo?.amountFeedback}
					subscribers={brandInfo?.subscribers}
					posts={brandInfo?.amountPublications}
					avatarSrc={brandInfo?.profilePicture?.filePath}
					openModal={openModal}
				/>
				<BrandProfileTabs />
				<PersonalOrderModal isModalOpen={isModalOpen} closeModal={closeModal} />
			</Flex>
		</Wrapper>
	);
};
