"use client";
import Badge from "@/components/Badge/Badge";

const TicketLink = ({ id }: { id: string }) => {
  const handleClick = () => {
    const popupW = 412;
    const popupH = 972;
    const left = Math.ceil((window.screen.width - popupW) / 2);
    const top = Math.ceil((window.screen.height - popupH) / 2);

    window.open(
      `/e-ticket/${id}`,
      "_blank",
      "width=" +
        popupW +
        ",height=" +
        popupH +
        ",left=" +
        left +
        ",top=" +
        top +
        ""
    );
  };
  return (
    <div onClick={() => handleClick()}>
      <Badge>티켓 확인하기</Badge>
    </div>
  );
};

export default TicketLink;
