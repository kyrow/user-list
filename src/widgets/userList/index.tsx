import { Table } from "antd"
import { fieldsTitle } from "../../features/fieldsControl"
import { useEffect } from "react"
import { getUserList } from "../../shared/store/slices/getUserList"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../shared/store/store"



function UserListWidget() {

	const dispatch = useDispatch<AppDispatch>()
	const { users } = useSelector((state: RootState) => state.userListReducer);


	useEffect(() => {
		const fetchData = async () => {
			await dispatch(getUserList());
		}
		fetchData();
	}, [dispatch]);

	return (
		<Table
			columns={fieldsTitle}
			dataSource={users}
			pagination={{ pageSize: 50, position: ['topRight'] }}
			scroll={{ y: "80vh" }}
		/>
	)
}

export default UserListWidget