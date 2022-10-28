import { View, Image } from "@tarojs/components";
import { OsButton } from "ossaui";
import guozhi from '../../../assets/drinks/guozhi.png'
import caomei from '../../../assets/yoghurt/yeguo.png'
import "./area1.scss";
function Area1() {
  return (
    <View className="area1">
      <View className="area-item">
        <View className="area-image-container">
          <Image className="area-image" src={caomei}></Image>
        </View>
        <View className="ticket-count">5票</View>
        <OsButton className="button">我喜欢</OsButton>
      </View>
      <View className="area-item">
        <View className="area-image-container">
          <Image className="area-image" src={'https://serverless-project-static-files-hgy.oss-cn-hangzhou.aliyuncs.com/exsercise/Pure%20milk/gaogai.png'}></Image>
        </View>
        <View className="ticket-count">5票</View>
        <OsButton className="button">我喜欢</OsButton>
      </View>
      <View className="area-item">
        <View className="area-image-container">
          <Image className="area-image" src={guozhi}></Image>
        </View>
        <View className="ticket-count">5票</View>
        <OsButton className="button">我喜欢</OsButton>
      </View>
      <View className="area-item">
        <View className="area-image-container">
          <Image className="area-image" src={caomei}></Image>
        </View>
        <View className="ticket-count">5票</View>
        <OsButton className="button">我喜欢</OsButton>
      </View>
    </View>
  );
}
export default Area1;
