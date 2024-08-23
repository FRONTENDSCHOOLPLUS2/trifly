import Image from "next/image";
import SeatmapGrid from "./SeatmapGrid";
import "./seatmapSelect.scss";

const Page = () => {
  return (
    <div className="seat-select-box">
      <div className="seat-select-left-box">
        <SeatmapGrid />
      </div>
      <div className="seat-select-right-box">
        <div className="seat-map-guid">
          <h3>이코노미</h3>
          <div className="icon-box">
            <div className="seat-title-flex">
              <div className="seat-title-box">
                <div className="seat-title">
                  <Image
                    src="/img/icon-seat-select.svg"
                    alt="일반좌석"
                    className="seat-icon"
                    sizes="100%"
                    width={0}
                    height={0}
                  />
                  <p>일반석</p>
                </div>

                <div className="seat-title">
                  <Image
                    src="/img/icon-seat-unselect.svg"
                    alt="선택 불가좌석"
                    className="seat-icon"
                    sizes="100%"
                    width={0}
                    height={0}
                  />
                  <p>선택 불가</p>
                </div>
              </div>

              <div className="seat-title-box">
                <div className="seat-title">
                  <Image
                    src="/img/icon-seat-selected.svg"
                    alt="선택불가 좌석"
                    className="seat-icon"
                    sizes="100%"
                    width={0}
                    height={0}
                  />
                  <p>선택된 일반좌석</p>
                </div>

                <div className="seat-title">
                  <Image
                    src="/img/icon-seat-dog.svg"
                    alt="반려동물 동반 좌석"
                    className="seat-icon"
                    sizes="100%"
                    width={0}
                    height={0}
                  />
                  <p>반려동물 동반</p>
                </div>
              </div>
            </div>
            <p className="line" />
            <div className="facility-box-flex">
              <div className="facility-box">
                <div className="facility">
                  <Image
                    src="/img/icon-seat-exit.svg"
                    alt="비상구"
                    className="facility-icon"
                    sizes="100%"
                    width={0}
                    height={0}
                  />
                  <p>비상구</p>
                </div>

                <div className="facility">
                  <Image
                    src="/img/icon-seat-galley.svg"
                    alt="갤리"
                    className="facility-icon"
                    sizes="100%"
                    width={0}
                    height={0}
                  />
                  <p>갤리</p>
                </div>
              </div>
              <div className="facility-box">
                <div className="facility">
                  <Image
                    src="/img/icon-seat-toilet.svg"
                    alt="화장실"
                    className="facility-icon"
                    sizes="100%"
                    width={0}
                    height={0}
                  />
                  <p>화장실</p>
                </div>

                <div className="facility">
                  <Image
                    src="/img/icon-seat-wing.svg"
                    alt="날개"
                    className="facility-icon"
                    sizes="100%"
                    width={0}
                    height={0}
                  />
                  <p>날개</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
