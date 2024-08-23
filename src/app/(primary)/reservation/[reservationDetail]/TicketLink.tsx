"use client";

import Badge from "@/components/Badge/Badge";

const TicketLink = ({
  id,
  passengerId,
}: {
  id: string;
  passengerId: number;
}) => {
  const handleClick = () => {
    const popupW = 412;
    const popupH = 972;
    const left = Math.ceil((window.screen.width - popupW) / 2);
    const top = Math.ceil((window.screen.height - popupH) / 2);

    window.open(
      `/e-ticket/${id}/${passengerId}`,
      "_blank",
      `width=${popupW},height=${popupH},left=${left},top=${top}`,
    );
  };
  return (
    <>
      <button
        className="web-button"
        type="button"
        onClick={() => handleClick()}
      >
        <Badge>티켓 확인</Badge>
      </button>
    </>
  );
};

export default TicketLink;
