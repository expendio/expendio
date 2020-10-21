import React, { FunctionComponent } from 'react';
import Colors from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { StyledKeyboard, Key, KeyButton, KeySpace } from './styled/keyboard';

interface Props {
  onKeyStroke: (key: string) => void;
}

const Keyboard: FunctionComponent<Props> = (props) => {
  const { onKeyStroke } = props;

  return (
    <StyledKeyboard>
      <KeySpace>
        <tbody>
          <tr>
            <Key>
              <KeyButton onClick={() => onKeyStroke('1')}>1</KeyButton>
            </Key>
            <Key>
              <KeyButton onClick={() => onKeyStroke('2')}>2</KeyButton>
            </Key>
            <Key>
              <KeyButton onClick={() => onKeyStroke('3')}>3</KeyButton>
            </Key>
          </tr>
          <tr>
            <Key>
              <KeyButton onClick={() => onKeyStroke('4')}>4</KeyButton>
            </Key>
            <Key>
              <KeyButton onClick={() => onKeyStroke('5')}>5</KeyButton>
            </Key>
            <Key>
              <KeyButton onClick={() => onKeyStroke('6')}>6</KeyButton>
            </Key>
          </tr>
          <tr>
            <Key>
              <KeyButton onClick={() => onKeyStroke('7')}>7</KeyButton>
            </Key>
            <Key>
              <KeyButton onClick={() => onKeyStroke('8')}>8</KeyButton>
            </Key>
            <Key>
              <KeyButton onClick={() => onKeyStroke('9')}>9</KeyButton>
            </Key>
          </tr>
          <tr>
            <Key>
              <KeyButton onClick={() => onKeyStroke('.')}>.</KeyButton>
            </Key>
            <Key>
              <KeyButton onClick={() => onKeyStroke('0')}>0</KeyButton>
            </Key>
            <Key>
              <KeyButton onClick={() => onKeyStroke('DELETE')}>
                <SvgIcon icon={Icons.CHEVRON_LEFT} color={Colors.WHITE} />
              </KeyButton>
            </Key>
          </tr>
        </tbody>
      </KeySpace>
    </StyledKeyboard>
  );
};

export default Keyboard;
