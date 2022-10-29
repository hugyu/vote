import { View, Image } from "@tarojs/components";
import { OsButton } from "ossaui";
import {
  drinksReq,
  drinksVote,
  mineralReq,
  mineralVote,
  pureReq,
  pureVote,
  yoghurtReq,
  yoghurtVote
} from "../../../common/api";
import "./area1.scss";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
const method = { 0: mineralReq, 1: pureReq, 2: drinksReq, 3: yoghurtReq };
const defineCss = {
  0: "width:150rpx",
  2: "width:150rpx",
  1: "width:300rpx",
  3: "width:300rpx"
};
const VoteInfo = { 0: mineralVote, 1: pureVote, 2: drinksVote, 3: yoghurtVote };
interface Props {
  index: number;
}
function Area1(props: Props) {
  const { index } = props;
  const [voteCount, setVoteCount] = useState(2);
  const [listData, setListData] = useState<
    Array<{ id: number; label: string; imgUrl: string; ticket_count: number }>
  >([]);
  const [disabled, setDisabled] = useState({
    0: false,
    1: false,
    2: false,
    3: false
  });
  useEffect(() => {
    setVoteCount(2);
    method[index]().then(res => {
      const { result } = res;
      setListData(result);
    });
  }, [index]);
  const vote = (label, ticket_count, index) => {
    if (voteCount > 0) {
      VoteInfo[index]({ label, ticket_count }).then(res => {
        const { result } = res;
        setListData(result);
        setVoteCount(pre => pre - 1);
      });
    } else {
      const newDisabled = { ...disabled, [index]: true };
      setDisabled(newDisabled);
      Taro.showToast({ title: "次数达到上限", icon: "error", duration: 1000 });
    }
  };
  return (
    <View className="area1">
      {listData.map((data, index2) => {
        return (
          <View className="area-item" key={index2}>
            <View className="area-image-container">
              <Image
                className="area-image"
                src={data?.imgUrl}
                style={defineCss[index]}
              ></Image>
            </View>
            <View className="ticket-count">{data?.ticket_count}票</View>
            <OsButton
              className="button"
              disabled={disabled[index]}
              onClick={() => vote(data?.label, data?.ticket_count, index)}
            >
              我喜欢
            </OsButton>
          </View>
        );
      })}
    </View>
  );
}
export default Area1;
