import React, {
  useState,
  forwardRef,
  createRef,
  useEffect
} from 'react';
import { Tag, Input, Icon } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';

type Props = {
  value?: string[];
  onChange?: (tagList: string[]) => void;
};

const EditableTagsRef: React.FC<Props> = ({ value = [], onChange}, _ref) => {
  let inputRef = createRef<Input>();
  const [tags, setTags] = useState(value);

  const [input, setInput] = useState({
    visible: false,
    value: ''
  });

  const handleClose = (tag: string) => {
    const newTags = tags.filter((t: string) => t !== tag);
    setTags(newTags);
    triggerChange(newTags);
  };

  const showInput = async () => {
    await setInput({
      visible: true,
      value: ''
    });
  };

  useEffect(() => {
    const tagInput = inputRef.current;
    if (input.visible && tagInput) {
      tagInput.focus();
    }
  }, [input.visible, inputRef]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      visible: true,
      value: e.target.value
    });
  };

  const handleInputConfirm = () => {
    if (input.value && tags.indexOf(input.value) === -1) {
      const newTags = [...tags, input.value];
      setTags(newTags);
      triggerChange(newTags);
    }
    setInput({
      visible: false,
      value: ''
    });
  };

  const triggerChange = (_tags: string[]) => {
    if (onChange) {
      onChange(_tags);
    }
  };

  const forMap = (tag: string) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  const tagChild = tags.map(forMap);
  return (
    <div>
      {input.visible && (
        <Input
          ref={inputRef}
          value={input.value}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!input.visible && (
        <Tag
          onClick={showInput}
          style={{ background: '#fff', borderStyle: 'dashed' }}
        >
          <Icon type="plus" /> New Tag
        </Tag>
      )}
      <div style={{ marginTop: 16 }}>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
    </div>
  );
};

export const EditableTags = forwardRef(EditableTagsRef);
