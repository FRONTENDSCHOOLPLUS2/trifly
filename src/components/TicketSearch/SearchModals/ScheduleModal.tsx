import "./ScheduleModal.scss";

interface ScheduleModalProps {
  handleClose: (a: boolean) => void;
}

const ScheduleModal = ({ handleClose }: ScheduleModalProps) => {
  return (
    <div className="schedule-modal search-modal-contents">
      <button type="button" onClick={() => handleClose(false)}>
        <img src="/img/icon-close-black.svg" alt="닫기" />
        <span className="hidden">닫기</span>
      </button>
    </div>
  );
};

export default ScheduleModal;
