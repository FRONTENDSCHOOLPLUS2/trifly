import Calendar from "react-calendar";
import "./ScheduleModal.scss";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

interface ISchedule {
  departureDate: string;
  returnDate: string;
  departureFormattedDate: string;
  returnFormattedDate: string;
}

interface ScheduleModalProps {
  tripType: string;
  handleClose: (a: boolean) => void;
  schedule: ISchedule;
  setSchedule: (obj: ISchedule) => void;
}

type ValuePiece = Date | null;

const ScheduleModal = ({ handleClose }: ScheduleModalProps) => {
  const [firstCalendarDate, setFirstCalendarDate] = useState<Date>(new Date());
  const [secondCalendarDate, setSecondCalendarDate] = useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
  );

  const handlePrevClick = () => {
    if (firstCalendarDate) {
      const prevMonthDate = new Date(
        firstCalendarDate.getFullYear(),
        firstCalendarDate.getMonth() - 1,
        1
      );

      if (
        prevMonthDate >=
        new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      ) {
        setFirstCalendarDate(prevMonthDate);
        setSecondCalendarDate(
          new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth() + 1, 1)
        );
      }
    }
  };

  const handleNextClick = () => {
    if (secondCalendarDate) {
      const nextMonthDate = new Date(
        secondCalendarDate.getFullYear(),
        secondCalendarDate.getMonth() + 1,
        1
      );
      setFirstCalendarDate(
        new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth() - 1, 1)
      );
      setSecondCalendarDate(nextMonthDate);
    }
  };

  return (
    <div className="schedule-modal">
      <button
        className="close-button"
        type="button"
        onClick={() => handleClose(false)}
      >
        <img src="/img/icon-close-black.svg" alt="닫기" />
        <span className="hidden">닫기</span>
      </button>
      <div className="calendars">
        <div className="calendar">
          <div className="month-navigation">
            <button
              type="button"
              className="prev-month"
              onClick={handlePrevClick}
            >
              <img src="/img/icon-arrow.svg" alt="이전" />
              <span className="hidden">이전 달로</span>
            </button>
            <p className="month">
              {firstCalendarDate.getFullYear()}년
              {firstCalendarDate.getMonth() + 1}월
            </p>
            <button
              type="button"
              className="next-month"
              onClick={handleNextClick}
            >
              <img src="/img/icon-arrow.svg" alt="다음" />
              <span className="hidden">다음 달로</span>
            </button>
          </div>
          <Calendar
            locale="ko-KR"
            calendarType="gregory"
            activeStartDate={firstCalendarDate || undefined}
            onActiveStartDateChange={({ activeStartDate }) => {
              if (activeStartDate) {
                setFirstCalendarDate(activeStartDate);
              }
            }}
            minDate={new Date()}
            formatDay={(locale, date) =>
              date.toLocaleString("en", { day: "numeric" })
            }
            showNavigation={false}
            view="month"
          />
        </div>
        <div className="calendar">
          <div className="month-navigation">
            <button
              type="button"
              className="prev-month"
              onClick={handlePrevClick}
            >
              <img src="/img/icon-arrow.svg" alt="이전" />
              <span className="hidden">이전 달로</span>
            </button>
            <p className="month">
              {secondCalendarDate.getFullYear()}년
              {secondCalendarDate.getMonth() + 1}월
            </p>
            <button
              type="button"
              className="next-month"
              onClick={handleNextClick}
            >
              <img src="/img/icon-arrow.svg" alt="다음" />
              <span className="hidden">다음 달로</span>
            </button>
          </div>
          <Calendar
            locale="ko-KR"
            calendarType="gregory"
            activeStartDate={secondCalendarDate || undefined}
            onActiveStartDateChange={({ activeStartDate }) => {
              if (activeStartDate) {
                setSecondCalendarDate(activeStartDate);
              }
            }}
            minDate={new Date()}
            formatDay={(locale, date) =>
              date.toLocaleString("en", { day: "numeric" })
            }
            showNavigation={false}
            view="month"
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
