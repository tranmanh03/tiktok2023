import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faEarthAsia, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/images';
import {
  faBookmark,
  faCircleQuestion,
  faKeyboard,
  faLightbulb,
  faMoon,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { MailboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

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
  const currentUser = true;

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

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button upload icon={<FontAwesomeIcon icon={faPlus} />}>
                Tải lên
              </Button>

              <Tippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                <button className={cx('message-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Hộp thư" placement="bottom">
                <button className={cx('mailbox-btn')}>
                  <MailboxIcon />
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
              <Image
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
