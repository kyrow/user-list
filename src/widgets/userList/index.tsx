import { Flex, Table, TablePaginationConfig } from "antd"
import { fieldsTitle } from "../../features/fieldsTitle"
import { useEffect, useState } from "react"
import { getUserList } from "../../shared/store/slices/getUserList"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../shared/store/store"
import FieldsControl from "../../features/fieldsControl"
import { changePage } from "../../shared/store/slices/usersList-slice"


function UserListWidget() {

	const dispatch = useDispatch<AppDispatch>()
	const { users, selectedPage } = useSelector((state: RootState) => state);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await dispatch(getUserList());
			setLoading(false);
		}
		fetchData();
	}, [dispatch]);

	const changeCurrentPage = (pagination: TablePaginationConfig) => {
		dispatch(changePage(pagination.current));
	};


	return (
		<Flex style={{ height: '100%', position: 'relative' }} >

			<FieldsControl
				loaderOn={() => setLoading(true)}
				loaderOff={() => setLoading(false)}
			/>

			<Table
				columns={fieldsTitle}
				dataSource={users}
				pagination={{
					defaultPageSize: 50,
					showSizeChanger: false,
					position: ['topRight'],
					current: selectedPage,
					hideOnSinglePage: false,
					total: 100,
				}}
				onChange={changeCurrentPage}
				loading={loading}
				scroll={{ y: "80vh" }}
				expandable={{
					expandedRowRender: (record) =>
						<Flex
							gap='small'
							vertical
						>
							<p style={{ margin: 0 }}>{record.firstName},</p>
							<p style={{ margin: 0 }}>{record.lastName},</p>
							<p style={{ margin: 0 }}>{record.email},</p>
							<p style={{ margin: 0 }}>{record.phone}</p>
						</Flex>
					,
				}}
			/>
		</Flex>
	)
}

export default UserListWidget