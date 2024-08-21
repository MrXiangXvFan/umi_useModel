import {useModel} from 'umi';

const DocsPage = () => {
  const {counter} = useModel('initialState');
  return (
    <div>
      <p>计数值：{counter}</p>
    </div>
  );
};

export default DocsPage;
