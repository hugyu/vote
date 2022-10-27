import { View, Image } from "@tarojs/components";
import { OsButton } from "ossaui";
import baisuishan from "../../../assets/baisuishan.jpg";
import "./area1.scss";
function Area1() {
  return (
    <View className="area1">
      <View className="area-item">
        <View className="area-image-container">
          <Image className="area-image" src={baisuishan}></Image>
        </View>
        <View className="ticket-count">5票</View>
        <OsButton className="button">我喜欢</OsButton>
      </View>
      <View className="area-item">
        <View className="area-image-container">
          <Image className="area-image" src={baisuishan}></Image>
        </View>
        <View className="ticket-count">5票</View>
        <OsButton className="button">我喜欢</OsButton>
      </View>
      <View className="area-item">
        <View className="area-image-container">
          <Image className="area-image" src={baisuishan}></Image>
        </View>
        <View className="ticket-count">5票</View>
        <OsButton className="button">我喜欢</OsButton>
      </View>
      <View className="area-item">
        <View className="area-image-container">
          <Image className="area-image" src={baisuishan}></Image>
        </View>
        <View className="ticket-count">5票</View>
        <OsButton className="button">我喜欢</OsButton>
      </View>
    </View>
  );
}
export default Area1;
