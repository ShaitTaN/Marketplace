import classes from './styles.module.scss';
import {Flex, Typography} from 'antd';
import {Avatar} from '../../../../ui/Avatar/Avatar';
import ArrowLeft from '../../../../assets/icons/ArrowLeft.svg';
import ArrowRight from '../../../../assets/icons/ArrowRight.svg';
import {IconButton} from '../../../../ui/IconButton/IconButton';
import clsx from 'clsx';

const stories = [
	{
		avatar:
			'https://s3-alpha-sig.figma.com/img/1485/4c27/1bf68fb2f678ae8f274b06ed92b0ef70?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TOZooYvYue9QHL0l4pmXPOvPvFIPjq9YmpkzBrScfUaWcnrtTrbS4SA512YSqGdxZK39UjIi4qeyRiCV03~GRSDc72qp4N7GQo~kTTy9kpHxJ2dpDc8kM7HVDJyW855KQe4~4Wa1GfIjTU9BmA~8vhwS54rhranBp080WpBcMNYXmVH~MTrHhOF4l8Gm097atjzxKVE6stqq88TRo9ot5sIyWpnQSDCRxeHg5ouvrmFmIzqmn5Rhj0wBQMaJO0Aq~N06Wl0QUim-1Z0ndTaT2sHk3I5JRgBvrM3y80gF-lMSU7Y0a5u9tvRU4-DRz2r1j38x7MOyYvgUOTgepmfC-Q__',
		title: 'SHINY BAND',
	},
	{
		avatar:
			'https://s3-alpha-sig.figma.com/img/7f8f/fda5/0977dbef6fd8aed9cb37828792c34eb5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfIptL1xX478vE8QesopDHK48NsZBgF~2nur4C9VXg8ItbHjrGgPXEEuqj4ZMUR2xBO9dmCYkUiziixTuL7ErqvtJWke~u-g-3JfgpHcNwYliUk4qONVcFvd11EtAYe5NF-1LSqOqBxTgxKQ3OopfkbLavNSa3L1hx0GJe4j7CxmDfRvmTKaZjA-XxOTGiZyiA0GcEq~eRlZDwpPEdiTo31tc2qqtBkO-hHjd~jl8Qz3LL7qkJNWwU19dvHEQRIJOBsDy01Aagz6ehHoXqVEH-wmSqkmgpxU9UrTJR2LMX5LTwXDlGoSlnQNSSLXEzQvUp7naibfciJgMb7Anu7ylw__',
		title: 'Arnika',
	},
	{
		avatar:
			'https://s3-alpha-sig.figma.com/img/21b6/df99/8b6e30a1582e8114d53a2abd5e7ab1fe?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iGj~eNxy6uBzI3TmnFZzTu~LZj8GMtMCnH85f5eBzQFz-Dun8OZQ8XfzWEnsHd5lTGuarnOu9bNZGcdBa-S2gJbWa6aXs6lb1Zqkxc12~h4Tw2zUsQ0OX2KSpBHkN4L2ZFpyU5k9kaSw-SnPOvS-Y60owlbRak9aCXKzsOlXRpaIl6qKCj6n17pWzsFESyo2GQ0s4WIPWgC~JD4cx3OF14HPuPXt0PEj0YEqrET6-GaLRQHlfHY9lIlk1Y7cjzw28UvnSAlkgCWqydIYkV-EOH2sjFCsqY2OX2yzmgj0oeyiwUMwLkZ4Kt71Z2dzM5dKuZBVWTyueqbpvda1Nc0cUg__',
		title: 'Juicccees',
	},
	{
		avatar:
			'https://s3-alpha-sig.figma.com/img/d810/934b/f76b9d67f665193fcb7221f92b00efeb?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ooOBU4abAj-8aKIE531xD6PMhrdAKZ6Uo5-CBkELeTKcsnQJ1GsOHBHvsCTzlLaA63W4wz8s0zlg5Ej1h9hCX5mheJLZUDXVrPOaQyq8QRkfc4NCvA6eOBiwDuworna9GCx7TLcZlSR2guhr8j8qp5Ifqy~OfgM4kfqOj1utCHULWF7IhtQcfL2~b3iEg~8FdgzDq3hEmKiglLFt6BdclmByDafeKMXeB~YpKtpr0Vyyx1h6rsXB17mEH3KaPpJJHeq-nxV2S8vAysmz3Efps00meEkDyB3QJiBqt3S-Ldx-KNIE-NU6u78zfqZ6xsE-b8Z~njUjekofg336AXwAMw__',
		title: 'Eterlique',
	},
	{
		avatar:
			'https://s3-alpha-sig.figma.com/img/45fa/c494/7171062a57794e5ce1257655a3914182?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tbg62pm32FYjqcLWNyzbrvsXQd5ZeioSculEoRXAjSLcj132~fCu-RV8Tpj1ArRh0k8lwHM2gdZl~SjUgyvfGjCh40T-~D2pUI34TrgXJuSLjWDCa5qzPxUW66jVzy1AClUmTsUbh1c25wSUehcET74ZBAHKIDZmUAcnERHIA6jYn9Tb~Mw372UeBG0mcgCJelG9txXdN288JjAJZMuLxmFqFg52bfU3f~7LczihU19gkHkrFPbi4sQRMHpwteSP7fGX-jJR2ztGj2JJUjXRImQv~KsUObuoTbp76sCsdxqld6kWEzK278dS14M0HIxgrly8SYCcKCesWJVujrivug__',
		title: 'Nastya Buryan',
	},
	{
		avatar:
			'https://s3-alpha-sig.figma.com/img/4f69/ea30/793d2ce41e6c68d74ee807131a3345ab?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4qLZMPxrc9EhxOpgqAAKfsBBdwG7-cuh5RAI7UBFY1CTCFF4AvxtInb-VtkI~gILKf2bCAR-9VDulMXqrxqG59v53yhHRVDaNCCh3VLaGZOEqOp5Yw5eJDs8YW-oYB-bUvVd-K0hz2mWxsXPbye0WH0aVgP1tSi3uTUQMfdcAAogNmS3pQ3GyMfW3NGAax0Zvm~0hu8J-S1gRk3rUo8lov8PKHSUOfhYfsfjMambUvC58LGLYa653pm~lVbkVvbj9SRgPgB8EU7jb0SJ9maTvR7iNCCVHJUBWR0orTSeezlmJ9Ln4E4hRASxW8WhEzplYpQ83jOhoZ~QYQ8nbXCag__',
		title: 'mr.Knitster',
	},
	{
		avatar:
			'https://s3-alpha-sig.figma.com/img/738a/1d90/9daa0f8cfe8c87a9020d4483173cd904?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aQifUobrNlHkjNFRW34iiskJ9O8NQ5rz3Bxq-wMvTrSfruF0xEdXDBWUORz4srJptAbEBbQQx4T0-ZqYYAzBTsq4avFpFKQadFYxQrUPEayKQ7nAxMiI99RptNF9DNntiMM4M~L8bLm1uqWVVPdUzc7P86M0yq0hJsh~acwhxZrWEYBHfmvn2Xb9hkUrpJS4J6P4xw1kOA0JRvNZsvgd8vN0r9U4VVv3CWWfZkrqsRoMALG4RYNMkMAuFv5wr-fb-yeBMfc9au9JPmxuKK9spBMhlEWKbJ8xag9853DydKBZawGNFs6kcwE59w81ZBvlqKsf9a2QcvkiKZTFTqXFUQ__',
		title: 'Iz bumagi rukami',
	},
	{
		avatar:
			'https://s3-alpha-sig.figma.com/img/c710/468b/c7ec889b3918fd455680b3aeb7f746ef?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8bGKzcpcdUWXEe0vHRD9Xi6x~hGZCq3i0hIHja3k9LyMI07D7~mHK1uwHgw~o6RscjAj7~9r-azUthxWiMnp441AU4kTJNP70XnWFCvSctJ-uB2rkeAWfdgXX0JgUvyh3Mx47kGe-Q4RndldekVfeqLiFAIrcGjPDn0EVG7g1hAI1aQCgbqvYQUJtxQ8lvklTP4U1jLj6W-LJf51Q43aEhDXUR6P3ud4LrCIrdlCUA6FY72PR6u3D2VksQigkmDafwdJ5P6A1f0RtcApYx0hC11-KqK2iHavnIdPK5Q6af9XMqbybc8hM6qEzrq-h33eDJMst5haTQ1DgVx6nxYcA__',
		title: 'ola',
	},
	{
		title: 'Brand Name',
	},
];

export const MainStories = () => {
	return (
		<Flex className={classes.stories} gap={26} align='center' justify='space-between'>
			<IconButton icon={<ArrowLeft />} className={classes.btn} />
			<Flex gap={16} style={{width: '100%'}}>
				{stories.map((story) => (
					<Flex
						key={Math.random()}
						vertical
						align='center'
						gap={8}
						style={{maxWidth: '86px', width: '100%'}}
						className={classes.item}
					>
						<Avatar avatarSize='medium' src={story.avatar} />
						<Typography.Paragraph ellipsis={{rows: 1}} className={clsx(classes.title, 'titleNotCopy')}>
							{story.title}
						</Typography.Paragraph>
					</Flex>
				))}
			</Flex>
			<IconButton icon={<ArrowRight />} className={classes.btn} />
		</Flex>
	);
};
