import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f7976f290b3170eef019d865b9183b94.jpeg?x-expires=1702609200&x-signature=lUvccO76tsWfpOyq2%2Fqo9LHoRZ4%3D"
        alt="condongnat"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>co dongnat_99</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>Co Dong Nat</span>
      </div>
    </div>
  );
}

export default AccountItem;
