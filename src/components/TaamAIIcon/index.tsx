import { Avatar } from '@lobehub/ui';
import { CSSProperties, memo } from 'react';

interface TaamAIIconProps {
  size?: number;
  style?: CSSProperties;
}

const TaamAIIcon = memo<TaamAIIconProps>(({ size = 24, style }) => {
  return (
    <Avatar
      avatar="https://taam.ai/assets/logo1-BNSJsh1W.svg"
      shape="square"
      size={size}
      style={{
        borderRadius: 6,
        ...style,
      }}
      title="Taam AI"
    />
  );
});

TaamAIIcon.displayName = 'TaamAIIcon';

export default TaamAIIcon;
