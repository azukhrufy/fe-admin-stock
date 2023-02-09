import React from 'react';
import { PillType } from '../../types/PillTypes';
import { buildPillClassName } from './utils/pill_props_helper';

interface PillProps extends React.HTMLAttributes<HTMLDivElement>{
    pillClassName?: string;
    pillType? : PillType;
    children: React.ReactNode;
}

const Pill = ({
    pillClassName = 'pina-pill',
    pillType = 'default',
    children,
    className,
    style,
    ...defaultProps
} : PillProps) => {
    const finalClassname = buildPillClassName(pillClassName, pillType, className);
    return(
        <div className={finalClassname} {...defaultProps}>
            <div className={`pina-pill__children pina-pill__children--${pillType}`}>
                {children}
            </div>
        </div>
    );
}

export default Pill;