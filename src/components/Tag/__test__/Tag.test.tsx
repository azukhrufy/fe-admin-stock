import { act, fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { TagShape, TagType } from '../../../types/Tag';
import Tag from '../Tag';
const TagWrapper: React.FC<{
  tagType?: TagType;
  tagShape?: TagShape;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  withCloseButton?: boolean;
  tagClassName?: string;
}> = ({ tagType, tagShape, prefixIcon, suffixIcon, withCloseButton, tagClassName }) => {
  return (
    <Tag
      role='tag'
      tagClassName={tagClassName}
      data-testid={tagType}
      suffixIcon={suffixIcon}
      tagType={tagType}
      tagShape={tagShape}
      prefixIcon={prefixIcon}
      withCloseButton={withCloseButton}
    >
      Tag
    </Tag>
  );
};

describe('Test Tag Component', () => {
  it('should render tag component', () => {
    render(<TagWrapper tagClassName='pina-test' />);
    const tagElement = screen.getByRole('tag');
    expect(tagElement).toBeInTheDocument();
    screen.getByText('Tag');
  });

  it('should render tag according to given tag type and shape', () => {
    render(<TagWrapper tagType='primary' tagShape='rounded' />);
    const tagElement = screen.getByTestId('primary');
    expect(tagElement).toBeInTheDocument();
  });

  it('should render tag  with closable icon', () => {
    render(<TagWrapper withCloseButton={true} />);
    const closeableIcon = screen.getByRole('closable-icon');
    expect(closeableIcon).toBeInTheDocument();
  });

  it('should render tag with custom icon', () => {
    render(
      <TagWrapper
        prefixIcon={<div>PrefixIcon</div>}
        suffixIcon={<div>CustomSuffixIcon</div>}
        withCloseButton={true}
      />,
    );
    screen.getByText('PrefixIcon');
    screen.getByText('CustomSuffixIcon');
  });
});

const TagFuncWrapper = () => {
  const [tags, setTags] = useState([
    {
      id: 1,
      text: 'Tag-1',
    },
    {
      id: 2,
      text: 'Tag-2',
    },
    {
      id: 3,
      text: 'Tag-3',
    },
  ]);

  const handleClose = (removedTag: number) => {
    const newTags = tags.filter((tag) => tag.id !== removedTag);
    setTags(newTags);
  };

  return (
    <div placeholder='tag-func'>
      {tags.map((tag) => (
        <Tag
          role={`tag-${tag.id}`}
          key={tag.id}
          withCloseButton={true}
          onCloseButtonClicked={() => handleClose(tag.id)}
        >
          {tag.text}
        </Tag>
      ))}
    </div>
  );
};
describe('Test Functionality of Tag', () => {
  
  it('should delete one of tags when close icon is clicked ', async () => {
    render(<TagFuncWrapper />);
    let tagElement = screen.getAllByRole('closable-icon');
    expect(tagElement[2]).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(tagElement[2]);
    });
    tagElement = screen.getAllByRole('closable-icon');
    expect(tagElement).toHaveLength(2);
    const deletedTagElement = screen.queryByText('Tag-3');
    expect(deletedTagElement).toBeNull();
    screen.getByText('Tag-1');
    screen.getByText('Tag-2');
  });
});
