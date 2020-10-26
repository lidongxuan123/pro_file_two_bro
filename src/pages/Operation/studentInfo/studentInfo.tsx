import React, { useState, useEffect } from "react"
// 班级数据
import { tableTitle, childInfo } from './data.js'
import { Table, Divider, Input, Button } from 'antd'
import Css from "./studentInfo.less"
const { Search } = Input;
const onSearch = (value) => {
    console.log('value')
    console.log("点击搜索")
}
export default (props) => {
    return (
        <div>
            <div className={Css.clearFloat}>
                <Search style={{ float: "left", width: "200px"}} placeholder="input search text" onSearch={onSearch} enterButton />
                <div style={{ float: "right" }}>
                    <Button type="primary">添加</Button>
                    <Button type="primary">删除</Button>
                </div>
            </div>
            <Divider />
            {/*<Table columns={tableTitle} dataSource={childInfo}></Table>*/}
        </div>
    )
}