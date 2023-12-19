import { Table } from "antd"
import { fieldsData } from "../../features/tableData"
import { fieldsTitle } from "../../features/fieldsControl"


function UserListWidget() {
	return (
		<Table
			columns={fieldsTitle}
			dataSource={fieldsData}
			pagination={{ pageSize: 50, position: ['topRight'] }}
			scroll={{ y: "80vh" }}
		/>
	)
}

export default UserListWidget