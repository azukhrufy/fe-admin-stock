import { TagShape, TagType } from '../../../types/Tag';


export const getClasNameByTagType = (tagClassName: string, tagType: TagType) => {
  const className = `${tagClassName}__type--${tagType}`;
  return className;
};

export const buildTagClassName = (
  tagClassName = 'pina-tag',
  tagType: TagType = 'default',
  tagShape: TagShape = 'default',
  additionalClassname? :string,
): string => {
  const _additionalClassname = additionalClassname ?? '';
  const classNameByTagType = getClasNameByTagType(tagClassName, tagType);
  const classNameByTagShape = `${tagClassName}__shape--${tagShape}`;
  return `${tagClassName} ${classNameByTagType} ${classNameByTagShape} ${_additionalClassname}`;
};

