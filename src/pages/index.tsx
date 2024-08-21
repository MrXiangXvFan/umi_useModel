import { useModel } from "umi";

export default function HomePage() {
  //useModel相关
  const { add } = useModel("initialState", (model: any) => ({
    add: model.increment,
  }));

  return (
    <div>
      <button onClick={() => add()}>点击计数，修改公共状态</button>
    </div>
  );
}
