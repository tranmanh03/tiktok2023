import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, ...props }, ref) {
  const [fallback, setFallBack] = useState('');

  const handleOnError = () => {
    setFallBack(images.noImage);
  };
  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleOnError}
    />
  );
}

export default forwardRef(Image);
