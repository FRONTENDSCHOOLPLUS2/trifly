"use client";

import Accordion from "@/components/Accordion/Accordion";
import AccordionBody from "@/components/Accordion/AccordionBody";
import AccordionHeader from "@/components/Accordion/AccordionHeader";
import AccordionItem from "@/components/Accordion/AccordionItem";
import Badge from "@/components/Badge/Badge";
import { ChangeEvent, useEffect, useState } from "react";
import "./Filter.scss";
import { IFilterProps } from "./Result";

const Filter = ({
  tripType,
  nonStop,
  handleFilterChange,
}: {
  tripType: string;
  nonStop: boolean;
  handleFilterChange: (filter: IFilterProps) => void;
}) => {
  const [isNonStop, setIsNonStop] = useState(false);
  const [maxPrice, setMaxPrice] = useState(5000000);

  useEffect(() => {
    setIsNonStop(nonStop);
  }, []);

  const handleNonStopChange = () => {
    setIsNonStop(!isNonStop);
    handleFilterChange({ nonStop: !isNonStop });
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, style, max } = e.target;
    setMaxPrice(parseInt(value, 10));
    const percent = 100 / +max;
    style.background = `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percent * +value}%, var(--color-gray-50) ${percent * +value}%, var(--color-gray-50) 100%`;
  };

  return (
    <div className="filter">
      {/* 직항 경유 필터링 */}
      <Accordion type="small">
        <AccordionItem eventKey={1}>
          <AccordionHeader>
            <p className="filter-title">경유</p>
          </AccordionHeader>
          <AccordionBody>
            <div className="filter-contents nonstop">
              <input
                type="checkbox"
                id="nonstop"
                name="nonstop"
                checked={isNonStop}
                onChange={handleNonStopChange}
              />
              <label htmlFor="nonstop">
                <Badge selected={isNonStop}>직항</Badge>
              </label>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      {/* 출발 시간 필터링 */}
      <Accordion type="small">
        <AccordionItem eventKey={1}>
          <AccordionHeader>
            <p className="filter-title">출발시간</p>
          </AccordionHeader>
          <AccordionBody>
            <div>
              <p className="filter-subtitle">가는 날</p>
              <ul className="filter-contents time">
                <li className="time-selection">
                  <input type="checkbox" id="origin-depTime-0006" />
                  <label htmlFor="origin-depTime-0006">
                    <span />
                  </label>
                  <p className="time-legend first">0시</p>
                </li>
                <li className="time-selection">
                  <input type="checkbox" id="origin-depTime-0612" />
                  <label htmlFor="origin-depTime-0612">
                    <span />
                  </label>
                  <p className="time-legend">6시</p>
                </li>
                <li className="time-selection">
                  <input type="checkbox" id="origin-depTime-1218" />
                  <label htmlFor="origin-depTime-1218">
                    <span />
                  </label>
                  <p className="time-legend">12시</p>
                </li>
                <li className="time-selection">
                  <input type="checkbox" id="origin-depTime-1824" />
                  <label htmlFor="origin-depTime-1824">
                    <span />
                  </label>
                  <p className="time-legend">18시</p>
                  <p className="time-legend last">24시</p>
                </li>
              </ul>
            </div>
            {tripType === "round" && (
              <div>
                <p className="filter-subtitle">오는 날</p>
                <ul className="filter-contents time">
                  <li className="time-selection">
                    <input type="checkbox" id="return-depTime-0006" />
                    <label htmlFor="return-depTime-0006">
                      <span />
                      <p className="time-legend first">0시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input type="checkbox" id="return-depTime-0612" />
                    <label htmlFor="return-depTime-0612">
                      <span />
                      <p className="time-legend">6시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input type="checkbox" id="return-depTime-1218" />
                    <label htmlFor="return-depTime-1218">
                      <span />
                      <p className="time-legend">12시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input type="checkbox" id="return-depTime-1824" />
                    <label htmlFor="return-depTime-1824">
                      <span />
                      <p className="time-legend">18시</p>
                      <p className="time-legend last">24시</p>
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      {/* 도착 시간 필터링 */}
      <Accordion type="small">
        <AccordionItem eventKey={1}>
          <AccordionHeader>
            <p className="filter-title">도착시간</p>
          </AccordionHeader>
          <AccordionBody>
            <div>
              <p className="filter-subtitle">가는 날</p>
              <ul className="filter-contents time">
                <li className="time-selection">
                  <input type="checkbox" id="origin-arrTime-0006" />
                  <label htmlFor="origin-arrTime-0006">
                    <span />
                    <p className="time-legend first">0시</p>
                  </label>
                </li>
                <li className="time-selection">
                  <input type="checkbox" id="origin-arrTime-0612" />
                  <label htmlFor="origin-arrTime-0612">
                    <span />
                    <p className="time-legend">6시</p>
                  </label>
                </li>
                <li className="time-selection">
                  <input type="checkbox" id="origin-arrTime-1218" />
                  <label htmlFor="origin-arrTime-1218">
                    <span />
                    <p className="time-legend">12시</p>
                  </label>
                </li>
                <li className="time-selection">
                  <input type="checkbox" id="origin-arrTime-1824" />
                  <label htmlFor="origin-arrTime-1824">
                    <span />
                    <p className="time-legend">18시</p>
                    <p className="time-legend last">24시</p>
                  </label>
                </li>
              </ul>
            </div>
            {tripType === "round" && (
              <div>
                <p className="filter-subtitle">오는 날</p>
                <ul className="filter-contents time">
                  <li className="time-selection">
                    <input type="checkbox" id="return-arrTime-0006" />
                    <label htmlFor="return-arrTime-0006">
                      <span />
                      <p className="time-legend first">0시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input type="checkbox" id="return-arrTime-0612" />
                    <label htmlFor="return-arrTime-0612">
                      <span />
                      <p className="time-legend">6시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input type="checkbox" id="return-arrTime-1218" />
                    <label htmlFor="return-arrTime-1218">
                      <span />
                      <p className="time-legend">12시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input type="checkbox" id="return-arrTime-1824" />
                    <label htmlFor="return-arrTime-1824">
                      <span />
                      <p className="time-legend">18시</p>
                      <p className="time-legend last">24시</p>
                    </label>
                  </li>
                </ul>
              </div>
            )}
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      {/* 항공사 필터링 */}
      <Accordion type="small">
        <AccordionItem eventKey={1}>
          <AccordionHeader>
            <p className="filter-title">항공사 선택</p>
          </AccordionHeader>
          <AccordionBody>
            <div className="filter-contents airlines">
              <ul className="all-check">
                <li>
                  <input
                    type="radio"
                    id="allChk"
                    name="allChk"
                    value="allChk"
                  />
                  <label htmlFor="allChk">모두 선택</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="allCancel"
                    name="allChk"
                    value="allCancel"
                  />
                  <label htmlFor="allCancel">모두 해제</label>
                </li>
              </ul>
              <ul className="alliance">
                <li>
                  <input type="checkbox" id="skyteam" value="Skyteam" />
                  <label htmlFor="skyteam">스카이팀</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="starAlliance"
                    value="Star Alliance"
                  />
                  <label htmlFor="starAlliance">스타얼라이언스</label>
                </li>
                <li>
                  <input type="checkbox" id="oneworld" value="oneworld" />
                  <label htmlFor="oneworld">원월드</label>
                </li>
                <li>
                  <input type="checkbox" id="allianceEtc" value="" />
                  <label htmlFor="allianceEtc">기타</label>
                </li>
              </ul>
              <ul className="airline">
                <li>
                  <input type="checkbox" id="KE" value="KE" />
                  <label htmlFor="KE">대한항공</label>
                </li>
                <li>
                  <input type="checkbox" id="OZ" value="OZ" />
                  <label htmlFor="OZ">아시아나항공</label>
                </li>
                <li>
                  <input type="checkbox" id="BX" value="BX" />
                  <label htmlFor="BX">에어부산</label>
                </li>
                <li>
                  <input type="checkbox" id="RS" value="RS" />
                  <label htmlFor="RS">에어서울</label>
                </li>
                <li>
                  <input type="checkbox" id="YP" value="YP" />
                  <label htmlFor="YP">에어프레미아</label>
                </li>
                <li>
                  <input type="checkbox" id="ZE" value="ZE" />
                  <label htmlFor="ZE">이스타항공</label>
                </li>
                <li>
                  <input type="checkbox" id="7C" value="7C" />
                  <label htmlFor="7C">제주항공</label>
                </li>
                <li>
                  <input type="checkbox" id="LJ" value="LJ" />
                  <label htmlFor="LJ">진에어</label>
                </li>
                <li>
                  <input type="checkbox" id="TW" value="TW" />
                  <label htmlFor="TW">티웨이항공</label>
                </li>
              </ul>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      {/* 최대 가격 필터링 */}
      <Accordion type="small">
        <AccordionItem eventKey={1}>
          <AccordionHeader>
            <p className="filter-title">가격대</p>
          </AccordionHeader>
          <AccordionBody>
            <div className="filter-contents maxPrice">
              <label htmlFor="max-price">
                {maxPrice.toLocaleString()}원 미만
              </label>
              <input
                type="range"
                className="input-range horizontal"
                id="max-price"
                min={100000}
                max={5000000}
                value={maxPrice}
                step={100000}
                onChange={handlePriceChange}
              />
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
