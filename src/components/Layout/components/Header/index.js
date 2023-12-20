import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import {
  faBookmark,
  faCircleQuestion,
  faKeyboard,
  faLightbulb,
  faMessage,
  faMoon,
  faPaperPlane,
  faUser,
} from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: 'Trung tâm Nhà sáng tạo LIVE',
  },
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng Việt',
    children: {
      title: 'Ngôn ngữ',
      data: [
        {
          code: '01',
          title: 'Tiếng Việt',
        },
        {
          code: '02',
          title: 'Tiếng Anh',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên bàm phím',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Chế độ tối',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Xem hồ sơ',
      to: '/@tranmanh1203',
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: 'Yêu thích',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Đăng xuất',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </div>
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <p className={cx('search-title')}>Tài khoản</p>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Tìm kiếm" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button upload icon={<FontAwesomeIcon icon={faPlus} />}>
                Tải lên
              </Button>

              <Tippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                <button className={cx('message-btn')}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Hộp thư" placement="bottom">
                <button className={cx('mailbox-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button upload icon={<FontAwesomeIcon icon={faPlus} />}>
                Tải lên
              </Button>
              <Button primary>Đăng nhập</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <img
                className={cx('avatar-user')}
                src="https://lh3.googleusercontent.com/ogw/ANLem4bwM1qdqYhyoASXoIOeWeCKIxrUqLRkRHChRHEBwQ=s32-c-mo"
                alt="tranduymanh"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
