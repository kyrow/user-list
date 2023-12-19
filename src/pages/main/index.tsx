import { Flex } from 'antd';
import UserListWidget from '../../widgets/userList';

function MainPage() {

	const boxStyle: React.CSSProperties = {
		width: '1024px',
		height: '100vh',
		margin: '0 auto'
	};

	return (
		<Flex style={boxStyle} justify='center' align='center'>
			<UserListWidget />
		</Flex>
	)

}

export default MainPage