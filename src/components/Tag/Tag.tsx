import React from 'react';
import { TagShape, TagType } from '../../types/Tag';
import { buildTagClassName } from './utils/tag_props_helper';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  tagType?: TagType;
  tagShape?: TagShape;
  withCloseButton?: boolean;
  onCloseButtonClicked?: (e: React.MouseEvent<HTMLElement>) => void;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  tagClassName?: string;
  children: React.ReactNode;
}

const Tag = ({
  tagClassName = 'pina-tag',
  tagType = 'default',
  tagShape = 'default',
  withCloseButton = false,
  onCloseButtonClicked,
  prefixIcon,
  suffixIcon,
  children,
  className,
  style,
  ...defaultProps
}: TagProps) => {
  const finalClassname = buildTagClassName(tagClassName, tagType, tagShape, className);
  const trailing =
    suffixIcon !== undefined ? (
      suffixIcon
    ) : (
      <button
        type='button'
        onClick={(e) => {
          e.stopPropagation();
          onCloseButtonClicked?.(e);

          if (e.defaultPrevented) {
            return;
          }
        }}
      >
        <svg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M6.69322 3.45566C6.69322 3.41269 6.65807 3.37753 6.6151 3.37753L5.97057 3.38046L4.99986 4.53769L4.03014 3.38144L3.38463 3.37851C3.34166 3.37851 3.3065 3.41269 3.3065 3.45663C3.3065 3.47519 3.31334 3.49277 3.32506 3.50742L4.59557 5.02109L3.32506 6.53378C3.31326 6.5481 3.30671 6.56602 3.3065 6.58456C3.3065 6.62753 3.34166 6.66269 3.38463 6.66269L4.03014 6.65976L4.99986 5.50253L5.96959 6.65878L6.61412 6.66171C6.65709 6.66171 6.69225 6.62753 6.69225 6.58359C6.69225 6.56503 6.68541 6.54745 6.67369 6.53281L5.40514 5.02011L6.67564 3.50644C6.68736 3.49277 6.69322 3.47421 6.69322 3.45566Z'
            className={`pina-tag__suffix-icon--${tagType}`}
          />
          <path
            d='M5 0.625C2.58398 0.625 0.625 2.58398 0.625 5C0.625 7.41602 2.58398 9.375 5 9.375C7.41602 9.375 9.375 7.41602 9.375 5C9.375 2.58398 7.41602 0.625 5 0.625ZM5 8.63281C2.99414 8.63281 1.36719 7.00586 1.36719 5C1.36719 2.99414 2.99414 1.36719 5 1.36719C7.00586 1.36719 8.63281 2.99414 8.63281 5C8.63281 7.00586 7.00586 8.63281 5 8.63281Z'
            className={`pina-tag__suffix-icon--${tagType}`}
          />
        </svg>
      </button>
    );
  return (
    <div className={finalClassname} {...defaultProps} style={{ ...style }}>
      <div className='pina-tag__prefix-icon'>{prefixIcon}</div>
      <div className={`pina-tag__children pina-tag__children--${tagType}`}>{children}</div>
      <div className='pina-tag__suffix-icon'>{withCloseButton && trailing}</div>
    </div>
  );
};
export default Tag;
