import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItem = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-poper')}>{renderItem()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
