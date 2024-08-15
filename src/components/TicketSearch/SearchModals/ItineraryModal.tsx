import { useState } from "react";
import "./ItineraryModal.scss";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import Button from "@/components/Button/Button";

interface ISchedule {
  departureDate: string;
  returnDate: string;
  departureFormattedDate: string;
  returnFormattedDate: string;
}

interface ItineraryModalProps {
  tripType: string;
  handleClose: (a: boolean) => void;
  schedule: ISchedule;
  setSchedule: (obj: ISchedule) => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const ItineraryModal = ({
  tripType,
  handleClose,
  schedule,
  setSchedule,
}: ItineraryModalProps) => {
  const [date, setDate] = useState<Value>(null);
  // const [isSelectingRange, setIsSelectingRange] = useState(
  //   tripType === "round"
  // );

  const formatDates = (data: [Date, Date]) => {
    let formattedDates: string[] = [];
    let selectedDates: string[] = [];

    data.forEach((item) => {
      const { formattedDate, selectedDate } = formatDate(item);
      formattedDates.push(formattedDate);
      selectedDates.push(selectedDate);
    });

    return { formattedDates, selectedDates };
  };

  const formatDate = (data: Date) => {
    const date = new Date(data);
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const year = date.getFullYear();
    const month1 = date.getMonth() + 1;
    const month2 = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];

    const formattedDate = `${month1}월 ${day}일 (${dayOfWeek})`;
    const selectedDate = `${year}-${month2}-${day}`;

    return { formattedDate, selectedDate };
  };

  // const handleDone = () => {
  //   if (date) {
  //     if (date instanceof Array) {
  //       const result = formatDates(date as [Date, Date]);
  //       setSchedule({
  //         departureDate: result.selectedDates[0],
  //         departureFormattedDate: result.formattedDates[0],
  //         returnDate: result.selectedDates[1],
  //         returnFormattedDate: result.formattedDates[1],
  //       });
  //     } else {
  //       const result = formatDate(date);
  //       setSchedule({
  //         departureDate: result.selectedDate,
  //         departureFormattedDate: result.formattedDate,
  //         returnDate: "",
  //         returnFormattedDate: "",
  //       });
  //     }

  //     handleClose(false);
  //   } else if (!schedule.departureDate) {
  //     alert("날짜를 선택하세요!");
  //   } else {
  //     handleClose(false);
  //   }
  // };

  return (
    <div className="itinerary-modal search-modal-contents">
      <button
        className="close-button"
        type="button"
        onClick={() => handleClose(false)}
      >
        <img src="/img/icon-close-black.svg" alt="닫기" />
        <span className="hidden">닫기</span>
      </button>

      <div className="calendar"></div>

      {/* <Button onClick={handleDone}>완료</Button> */}
    </div>
  );
};

export default ItineraryModal;
