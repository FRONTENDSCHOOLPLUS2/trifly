import "./RouteModal.scss";

interface RouteModalProps {
  handleClose: (a: boolean) => void;
}

const RouteModal = ({ handleClose }: RouteModalProps) => {
  return (
    <div className="route-modal search-modal-contents">
      <button type="button" onClick={() => handleClose(false)}>
        <img src="/img/icon-close-black.svg" alt="닫기" />
        <span className="hidden">닫기</span>
      </button>
    </div>
  );
};

export default RouteModal;
