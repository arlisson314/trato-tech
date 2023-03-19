import { forwardRef } from 'react';
import styles from './Input.module.scss'

function Input({value, onChange, ...outrasProps}, ref) {
  return (
    <input
      ref={ref}
      value={value}
      {...outrasProps}
      onChange={onChange}
      className={styles.input}
    />
  );
}

export default forwardRef(Input);