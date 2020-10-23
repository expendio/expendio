import React, { FunctionComponent } from 'react';
import Colors from 'styles/colors';
import { Vibrations } from 'helpers';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { StyledKeyboard, Key, KeyButton, KeySpace } from './styled/keyboard';

interface Props {
  onKeyStroke: (key: string) => void;
}

const disableClickStyle = { pointerEvents: 'none' };

const Keyboard: FunctionComponent<Props> = (props) => {
  const { onKeyStroke } = props;

  const handleKeyTouch = (event) => {
    Vibrations.buttonTouch();
    onKeyStroke(event.target.dataset.key);
  };

  return (
    <StyledKeyboard>
      <KeySpace>
        <tbody>
          <tr>
            <Key>
              <KeyButton data-key="1" onClick={handleKeyTouch}>1</KeyButton>
            </Key>
            <Key>
              <KeyButton data-key="2" onClick={handleKeyTouch}>2</KeyButton>
            </Key>
            <Key>
              <KeyButton data-key="3" onClick={handleKeyTouch}>3</KeyButton>
            </Key>
          </tr>
          <tr>
            <Key>
              <KeyButton data-key="4" onClick={handleKeyTouch}>4</KeyButton>
            </Key>
            <Key>
              <KeyButton data-key="5" onClick={handleKeyTouch}>5</KeyButton>
            </Key>
            <Key>
              <KeyButton data-key="6" onClick={handleKeyTouch}>6</KeyButton>
            </Key>
          </tr>
          <tr>
            <Key>
              <KeyButton data-key="7" onClick={handleKeyTouch}>7</KeyButton>
            </Key>
            <Key>
              <KeyButton data-key="8" onClick={handleKeyTouch}>8</KeyButton>
            </Key>
            <Key>
              <KeyButton data-key="9" onClick={handleKeyTouch}>9</KeyButton>
            </Key>
          </tr>
          <tr>
            <Key>
              <KeyButton data-key="." onClick={handleKeyTouch}>.</KeyButton>
            </Key>
            <Key>
              <KeyButton data-key="0" onClick={handleKeyTouch}>0</KeyButton>
            </Key>
            <Key>
              <KeyButton data-key="DELETE" onClick={handleKeyTouch}>
                <SvgIcon
                  style={disableClickStyle}
                  icon={Icons.CHEVRON_LEFT}
                  color={Colors.WHITE}
                />
              </KeyButton>
            </Key>
          </tr>
        </tbody>
      </KeySpace>
    </StyledKeyboard>
  );
};

export default Keyboard;
