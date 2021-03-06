import React from 'react';
import style from './index.less'
import gradeInfo from "./data.js"
import gradeImg from "../../assets/timg.jpg"
// class AvailableComponent extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     componentWillMount(){
//         console.log("渲染之前调用，在客户端也在服务端")
//     }
//     componentDidMount(){
//         console.log("第一次渲染后调用，只在客户端。")
//     }
//     componentWillReceiveProps(){
//         console.log("在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用")
//     }
//     render(){
//         return(
//             <h1>aaaaaaa</h1>
//         )
//     }
// } 

const Operation = () => {
    return (
        <div>
            <div className={style.div_main}>
                {/*<AvailableComponent></AvailableComponent>*/}
                {
                    gradeInfo.data.map((item, index) => {
                        return (<div className={style.peration_div_main} key={item.id}>
                            <div className={style.peration_div_main_info}>
                                <img src={gradeImg} alt="" width="200px" />
                                <p className={style.p_tag}><span className={style.p_style}>班级：</span><span className={style.span_style}>{item.class}</span></p>
                                <div className={style.div_p_content}>
                                    <p><span className={style.p_style}>人数：</span><span className={style.span_style}>{item.muchPeople}</span></p>
                                    <p className={style.marginL20}><span className={style.p_style}>老师：</span><span className={style.span_style}>{item.teacherName}</span></p>
                                </div>
                                <div>
                                    <p>
                                        <span className={style.p_style}>班级名言：</span><span className={style.span_style}>
                                            {item.watchWord}
                                            {/*<div className={style.div_watchWord}>
                                      <div className={style.div_watchword_div}>{item.watchWord}</div>
                                    </div>*/}
                                        </span>
                                    </p>
                                </div>
                            </div>
                             <div className={style.operation_all}>
                                    <i className="icon_size iconfont web-4tianjiajiahaoyoutianjiapengyou"></i>
                                    <i className="icon_size iconfont web-4bianji"></i>
                                    <i className="icon_size iconfont web-4web-icon-"></i>
                                </div>
                        </div>)
                    })
                }
            </div>
            {/**/}
            <h1></h1>
        </div>
    )
}

export default Operation;