import { useState } from "react";
import "./ItineraryModal.scss";
import Calendar from "react-calendar";

interface ItineraryModalProps {
  handleClose: (a: boolean) => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const ItineraryModal = ({ handleClose }: ItineraryModalProps) => {
  const [date, setDate] = useState<Value>(new Date());

  console.log(date);

  return (
    <div className="itinerary-modal search-modal-contents">
      <button type="button" onClick={() => handleClose(false)}>
        <img src="/img/icon-close-black.svg" alt="닫기" />
        <span className="hidden">닫기</span>
      </button>

      <div className="calendar">
        <Calendar
          onChange={setDate}
          value={date}
          locale="ko-KR"
          calendarType="gregory"
          prev2Label={null}
          next2Label={null}
          minDate={new Date()}
          showDoubleView={true}
          // selectRange={true}
        />
      </div>
    </div>
  );
};

export default ItineraryModal;
