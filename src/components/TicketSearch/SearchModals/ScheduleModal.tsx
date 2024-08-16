import "./ScheduleModal.scss";

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
type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleModal = ({ handleClose }: ScheduleModalProps) => {
  return (
    <div className="schedule-modal search-modal-contents">
      <button
        className="close-button"
        type="button"
        onClick={() => handleClose(false)}
      >
        <img src="/img/icon-close-black.svg" alt="닫기" />
        <span className="hidden">닫기</span>
      </button>
    </div>
  );
};

export default ScheduleModal;
