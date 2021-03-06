import React, { FunctionComponent, useState } from 'react';
import { PositionProps } from 'helpers';
import RenderIf from 'components/base-components/RenderIf';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import CalendarModal from './CalendarModal';
import { AbsoluteContent, Label, StyledDateTimePicker } from './styled/container';
import Content from './Content';

interface Props extends PositionProps {
  id?: string;
  label?: string;
  value: Date | Date[];
  onChange: (event) => void;
  type?: 'date' | 'date-range' | 'date-time' | 'time' | 'time-range';
  showOptions?: boolean;
  showClear?: boolean;
}

const DateTimePicker: FunctionComponent<Props> = (props) => {
  const {
    id,
    label,
    type,
    value,
    onChange,
    showOptions,
    showClear,
    ...rest
  } = props;

  const [showBackdrop, setShowBackdrop] = useState(false);

  const openDatePickerModal = () => setShowBackdrop(true);
  const closeDatePickerModal = (event?) => {
    if (event) {
      event.preventDefault();
    }
    setShowBackdrop(false);
  };

  const handleDateSelected = (date) => {
    setShowBackdrop(false);
    onChange({ value: date });
  };

  const handleClear = () => onChange({ value: undefined });

  return (
    <>
      <StyledDateTimePicker id={id} {...rest}>
        <Label>{label}</Label>
        <Content
          type={type}
          value={value}
          padRight={showClear}
          onClick={openDatePickerModal}
        />
        <RenderIf condition={showClear && !!value}>
          <AbsoluteContent floatRight>
            <IconButton
              onClick={handleClear}
              icon={Icons.CLOSE}
              buttonColor="dark"
              sm
            />
          </AbsoluteContent>
        </RenderIf>
      </StyledDateTimePicker>
      <CalendarModal
        isOpen={showBackdrop}
        type={type}
        value={value}
        showOptions={showOptions}
        onChange={handleDateSelected}
        onClose={closeDatePickerModal}
      />
    </>
  );
};

DateTimePicker.defaultProps = {
  type: 'date',
  showOptions: false,
  showClear: false,
};

export default DateTimePicker;
