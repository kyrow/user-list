import { Button, Flex, Table } from "antd"
import { fieldsTitle } from "../../features/fieldsControl"
import { useEffect, useState } from "react"
import { getUserList } from "../../shared/store/slices/getUserList"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../shared/store/store"
import Search from "antd/es/input/Search"
import { searchUser } from "../../shared/store/slices/usersList-slice"


function UserListWidget() {

	const dispatch = useDispatch<AppDispatch>()
	const { users } = useSelector((state: RootState) => state.userListReducer);
	const [isSearchMode, setSearchMode] = useState(false)
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await dispatch(getUserList());
			setLoading(false);
		}
		fetchData();
	}, [dispatch]);

	return (
		<div style={{ height: '100vh', position: 'relative' }}>
			<Flex style={{ position: 'absolute', top: 16, left: 0, width: 300, zIndex: 5 }} gap='small'>
				<Search
					placeholder="find a user"
					onSearch={(value: string) => {
						setLoading(true);
						dispatch(searchUser(value.toLowerCase()))
						setLoading(false);
						setSearchMode(true)
					}}
					enterButton
				/>
				{isSearchMode && <Button onClick={() => {
					setLoading(true);
					dispatch(getUserList())
					setLoading(false);
					setSearchMode(false)
				}}>Reset</Button>}
			</Flex>

			<Table
				columns={fieldsTitle}
				dataSource={users}
				pagination={{ pageSize: 50, position: ['topRight'] }}
				loading={loading}
				scroll={{ y: "80vh" }}
			/>
		</div>
	)
}

export default UserListWidget