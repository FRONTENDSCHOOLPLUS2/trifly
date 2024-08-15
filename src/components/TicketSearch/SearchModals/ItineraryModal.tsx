import "./ItineraryModal.scss";

interface ItineraryModalProps {
  handleClose: (a: boolean) => void;
}

const ItineraryModal = ({ handleClose }: ItineraryModalProps) => {
  return (
    <div className="itinerary-modal search-modal-contents">
      <button type="button" onClick={() => handleClose(false)}>
        <img src="/img/icon-close-black.svg" alt="닫기" />
        <span className="hidden">닫기</span>
      </button>
    </div>
  );
};

export default ItineraryModal;
