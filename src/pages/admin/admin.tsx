import { View } from '@tarojs/components';
// import Echarts from 'taro-react-echarts'
// @ts-ignore
import  echarts from '../../assets/echarts'
import './admin.scss';
// const option = {
//     legend: {
//       top: 50,
//       left: 'center',
//       z: 100
//     },
//     tooltip: {
//       trigger: 'axis',
//       show: true,
//       confine: true
//     },
//     xAxis: {
//       type: 'category',
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     },
//     yAxis: {
//       type: 'value'
//     },
//     series: [
//       {
//         data: [150, 230, 224, 218, 135, 147, 260],
//         type: 'line'
//       }
//     ]
//   }
function Admin() {
    return (
        <View>
            {/* <Echarts echarts={echarts} option={option} ></Echarts> */}
        </View>
    )
}

export default Admin;