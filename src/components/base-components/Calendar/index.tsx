import React, { FunctionComponent, useEffect, useState } from 'react';
import { addMonths, differenceInDays, isEqual, setMonth, setYear, subMonths } from 'date-fns';
import RenderIf from 'components/base-components/RenderIf';
import { DateSection, StyledCalendar } from './styled/calendar';
import Options from './Options';
import Header from './Header';
import Days from './Days';
import Months from './Months';
import Years from './Years';
import { DateElement } from './types';

export interface Props {
  value: Date | Date[];
  onChange: (nextValue: Date | Date[]) => void;
  useRange?: boolean;
  showOptions?: boolean;
}

const Calendar: FunctionComponent<Props> = (props) => {
  const { value, onChange, useRange, showOptions } = props;
  const startDate = useRange && value ? value[0] : value;
  const endDate = useRange && value ? value[1] : undefined;
  const [selectionMode, setSelectionMode] = useState<DateElement>(DateElement.Day);
  const [viewDate, setViewDate] = useState(startDate || new Date());

  useEffect(() => {
    if (!isEqual(startDate, viewDate)) {
      setViewDate(startDate);
    }
  }, [startDate]);

  const changeSelection = () => {
    const nextSelectionMode = selectionMode === DateElement.Day
      ? DateElement.Month
      : DateElement.Year;
    setSelectionMode(nextSelectionMode);
  };

  const setOptionDate = (nextDate: Date | Date[]) => {
    const firstDate = nextDate[0];
    const lastDate = useRange ? nextDate[1] : undefined;
    setSelectionMode(DateElement.Day);
    onChange(useRange ? [firstDate, lastDate] : firstDate);
  };

  const selectYear = (year: number) => {
    setViewDate(setYear(viewDate, year));
    setSelectionMode(DateElement.Month);
  };

  const selectMonth = (month: number) => {
    setViewDate(setMonth(viewDate, month));
    setSelectionMode(DateElement.Day);
  };

  const selectNextMonth = () => {
    setViewDate(addMonths(viewDate, 1));
  };

  const selectPreviousMonth = () => {
    setViewDate(subMonths(viewDate, 1));
  };

  const selectDay = (selectedDate: Date) => {
    if (!useRange) {
      onChange(selectedDate);
      return;
    }

    const differenceFromStart = differenceInDays(selectedDate, startDate);
    const isBeforeStartDate = differenceFromStart < 0;
    const isStartDate = differenceFromStart === 0;
    const isEndDate = differenceInDays(selectedDate, endDate) === 0;
    let nextValues = [startDate, selectedDate];

    if (!startDate || isBeforeStartDate) {
      nextValues = [selectedDate, endDate];
    }

    if (isStartDate || isEndDate) {
      nextValues = [selectedDate, undefined];
    }

    onChange(nextValues);
  };

  return (
    <StyledCalendar>
      <RenderIf condition={showOptions}>
        <Options value={viewDate} onSelect={setOptionDate} />
      </RenderIf>
      <DateSection padd={showOptions}>
        <Header
          currentDate={viewDate}
          selecting={selectionMode}
          onChangeSelection={changeSelection}
          onSelectNext={selectNextMonth}
          onSelectPrevious={selectPreviousMonth}
        />
        <RenderIf condition={selectionMode === DateElement.Day}>
          <Days
            viewDate={viewDate}
            startDate={startDate}
            endDate={endDate}
            onChange={selectDay}
          />
        </RenderIf>
        <RenderIf condition={selectionMode === DateElement.Month}>
          <Months currentDate={viewDate} onChange={selectMonth} />
        </RenderIf>
        <RenderIf condition={selectionMode === DateElement.Year}>
          <Years currentDate={viewDate} onChange={selectYear} />
        </RenderIf>
      </DateSection>
    </StyledCalendar>
  );
};

export default Calendar;
