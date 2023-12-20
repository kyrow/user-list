import { Button, Flex } from 'antd';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../shared/store/store';
import Search from "antd/es/input/Search"
import { searchUser } from "../../shared/store/slices/usersList-slice"
import { getUserList } from '../../shared/store/slices/getUserList';


function FieldsControl({ loaderOn, loaderOff }: { loaderOn: () => void, loaderOff: () => void }) {

	const dispatch = useDispatch<AppDispatch>()
	const [isSearchMode, setSearchMode] = useState(false)

	return (
		<Flex style={{ position: 'absolute', top: 16, left: 0, width: 300, zIndex: 5 }} gap='small'>
			<Search
				placeholder="find a user"
				onSearch={(value: string) => {
					loaderOn()
					dispatch(searchUser(value.toLowerCase()))
					loaderOff()
					setSearchMode(true)
				}}
				enterButton
			/>
			{isSearchMode &&
				<Button onClick={() => {
					loaderOn()
					dispatch(getUserList())
					loaderOff()
					setSearchMode(false)
				}}>Reset</Button>}
		</Flex>
	)
}

export default FieldsControl