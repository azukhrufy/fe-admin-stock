import { PillType } from '../../../types/PillTypes';


export const getClasNameByPillType = (pillClassName: string, pillType: PillType) => {
  const className = `${pillClassName}__type--${pillType}`;
  return className;
};

export const buildPillClassName = (
  pillClassName = 'pina-pill',
  pillType : PillType,
  additionalClassname? :string,
): string => {
  const _additionalClassname = additionalClassname ?? '';
  const classNameByPillType = getClasNameByPillType(pillClassName, pillType);
  return `${pillClassName} ${classNameByPillType} ${_additionalClassname}`;
};

