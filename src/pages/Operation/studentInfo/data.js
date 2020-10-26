// 1 男
// 0 女
const childInfo = [{
    name: "小明",
    sex: '1',
    nation: "汉",
    address: "xxxx",
    oldAddress: "xxxx", // 户籍
    birs: "2001-10-34",
    // 学校信息
    schollNumber: "202007000001", // 2020 07年级 000 班  001号
    grade: "七年级",
    teacher: "老张",
    des: "xxxxxx",
}]
const tableTitle = [{
    titile: '姓名',
    dataIndex: "name",
    key: "name"
}, {
    title: "性别",
    dataIndex: "sex",
    key: "sex"
}, {
    titile: "民族",
    dataIndex: "nation",
    key: "nation"
}]
module.exports ={tableTitle, childInfo}