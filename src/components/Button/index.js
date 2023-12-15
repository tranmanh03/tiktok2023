import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  outline,
  disable,
  rounded,
  upload,
  icon,
  small,
  large,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  ///Remove event listener when button is disbale
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', {
    primary,
    outline,
    upload,
    disable,
    rounded,
    small,
    [className]: className,
    large,
  });

  return (
    <Comp className={classes} {...props}>
      {icon && <span className={cx('icon')}>{icon}</span>}
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
