import "./PassengersModal.scss";

interface PassengersModalProps {
  handleClose: (a: boolean) => void;
}

const PassengersModal = ({ handleClose }: PassengersModalProps) => {
  return (
    <div className="passengers-modal search-modal-contents">
      <button type="button" onClick={() => handleClose(false)}>
        <img src="/img/icon-close-black.svg" alt="닫기" />
        <span className="hidden">닫기</span>
      </button>
    </div>
  );
};

export default PassengersModal;
