import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">当前页面</Link>
        </li>
        <li>
          <Link to="/docs">点击进入另一个页面</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}



