"use client";

import { FilterProps } from "@/atoms/atoms";
import Accordion from "@/components/Accordion/Accordion";
import AccordionBody from "@/components/Accordion/AccordionBody";
import AccordionHeader from "@/components/Accordion/AccordionHeader";
import AccordionItem from "@/components/Accordion/AccordionItem";
import Badge from "@/components/Badge/Badge";
import useAllChecked from "@/hook/useAllChecked";
import { AirlineData, CodeState } from "@/types";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import "./Filter.scss";

const Filter = ({
  airline,
  carrierCodes,
  tripType,
  nonStop,
  prices,
  handleFilterChange,
}: {
  airline: CodeState<AirlineData>;
  carrierCodes: string[];
  tripType: string;
  nonStop: boolean;
  prices: number[];
  handleFilterChange: (filter: FilterProps) => void;
}) => {
  const [isNonStop, setIsNonStop] = useState(false);
  const [originDepTime, setOriginDepTime] = useState<number[]>([6, 12, 18, 24]);
  const [originArrTime, setOriginArrTime] = useState<number[]>([6, 12, 18, 24]);
  const [returnDepTime, setReturnDepTime] = useState<number[]>([6, 12, 18, 24]);
  const [returnArrTime, setReturnArrTime] = useState<number[]>([6, 12, 18, 24]);
  const [maxPrice, setMaxPrice] = useState(Math.max(...prices));
  const [selectedAirlines, setSelectedAirlines] =
    useState<string[]>(carrierCodes);
  const airlineRef = useRef(null);

  useEffect(() => {
    console.log("필터 렌더링");
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                          경유 선택 시 직항 경유 변경 처리                         */
  /* -------------------------------------------------------------------------- */
  const handleNonStopChange = () => {
    console.log("직항/경유 변경");
    setIsNonStop(!isNonStop);
    handleFilterChange({ nonStop: !isNonStop });
  };

  /* -------------------------------------------------------------------------- */
  /*                             출도착 시간 변경 처리                               */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    handleFilterChange({ originDepTime });
  }, [originDepTime, handleFilterChange]);

  const handleOriginDepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    console.log("출발 출발시간 변경");
    setOriginDepTime((prev) => {
      if (!prev) {
        return [value];
      }

      if (e.target.checked) {
        return [...prev, value];
      }
      return prev.filter((time) => time !== value);
    });
  };

  useEffect(() => {
    console.log("도착 출발시간 변경");
    handleFilterChange({ returnDepTime });
  }, [returnDepTime, handleFilterChange]);

  const handleReturnDepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    setReturnDepTime((prev) => {
      if (!prev) {
        return [value];
      }

      if (e.target.checked) {
        return [...prev, value];
      }
      return prev.filter((time) => time !== value);
    });
  };

  useEffect(() => {
    console.log("출발 도착시간 변경");
    handleFilterChange({ originArrTime });
  }, [originArrTime, handleFilterChange]);

  const handleOriginArrChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    setOriginArrTime((prev) => {
      if (!prev) {
        return [value];
      }

      if (e.target.checked) {
        return [...prev, value];
      }
      return prev.filter((time) => time !== value);
    });
  };

  useEffect(() => {
    console.log("도착 도착시간 변경");
    handleFilterChange({ returnArrTime });
  }, [returnArrTime, handleFilterChange]);

  const handleReturnArrChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    setReturnArrTime((prev) => {
      if (!prev) {
        return [value];
      }

      if (e.target.checked) {
        return [...prev, value];
      }
      return prev.filter((time) => time !== value);
    });
  };

  /* -------------------------------------------------------------------------- */
  /*                                   가격 설정                                  */
  /* -------------------------------------------------------------------------- */
  const handlePriceChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, style, max } = e.target;
      const newMaxPrice = Number(value);
      setMaxPrice(newMaxPrice);
      console.log("가격 변경");
      handleFilterChange({ maxPrice: newMaxPrice });
      const percent = 100 / +max;
      style.background = `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percent * +value}%, var(--color-gray-50) ${percent * +value}%, var(--color-gray-50) 100%`;
    },
    [handleFilterChange],
  );
  /* -------------------------------------------------------------------------- */
  /*                                 항공사 선택                                   */
  /* -------------------------------------------------------------------------- */
  const allianceCont = [
    {
      name: "Skyteam",
      title: "스카이팀",
      content: "",
      checked: true,
    },
    {
      name: "Star Alliance",
      title: "스타얼라이언스",
      content: "",
      checked: true,
    },
    {
      name: "oneworld",
      title: "원월드",
      content: "",
      checked: true,
    },
    {
      name: "others",
      title: "기타",
      content: "",
      checked: true,
    },
  ];

  const [allianceCheck, setAllianceCheck] = useState(allianceCont);
  const { setCheck } = useAllChecked(allianceCheck, setAllianceCheck);

  const handleSelectAll = () => {
    setAllianceCheck(allianceCheck.map((item) => ({ ...item, checked: true })));
  };

  const handleUnselectAll = () => {
    setAllianceCheck(
      allianceCheck.map((item) => ({ ...item, checked: false })),
    );
  };

  /* -------------------------------------------------------------------------- */
  /*                                  동맹체 체크 여부                              */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const updatedAirlines: string[] = [];

    allianceCheck.forEach((alliance) => {
      if (alliance.checked) {
        carrierCodes.forEach((carrierCode) => {
          if (airline[carrierCode].allianceEng === alliance.name) {
            updatedAirlines.push(carrierCode);
          } else if (
            airline[carrierCode].allianceEng === "" &&
            alliance.name === "others"
          ) {
            updatedAirlines.push(carrierCode);
          }
        });
      }
    });

    console.log("동맹체 변경");
    setSelectedAirlines(updatedAirlines);
  }, [allianceCheck]);

  const handleAllianceChk = (e: ChangeEvent<HTMLInputElement>) => {
    setCheck(e);
  };

  const alliances = allianceCheck.map((item) => (
    <li key={item.title}>
      <input
        type="checkbox"
        name={item.name}
        id={item.name}
        value={item.title}
        checked={item.checked}
        onChange={handleAllianceChk}
      />
      <label htmlFor={item.name}>{item.title}</label>
    </li>
  ));

  useEffect(() => {
    console.log("항공사 변경");
    handleFilterChange({ airline: selectedAirlines });
  }, [selectedAirlines]);

  const handleAirlineChk = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSelectedAirlines((prev) => {
      if (!prev) {
        return [value];
      }

      if (e.target.checked) {
        return [...prev, value];
      }
      return prev.filter((time) => time !== value);
    });
  };

  const airlines = carrierCodes.map((item, idx) => {
    return (
      <li key={idx}>
        <input
          ref={airlineRef}
          type="checkbox"
          id={item}
          value={item}
          checked={selectedAirlines.includes(item)}
          onChange={handleAirlineChk}
        />
        <label htmlFor={item}>{airline[item].nameKor}</label>
      </li>
    );
  });

  return (
    <div className="filter">
      {/* 경유 포함 검색했을 시 필터링 */}
      {!nonStop && (
        <Accordion type="small">
          <AccordionItem eventKey={1}>
            <AccordionHeader>
              <p className="filter-title">경유</p>
            </AccordionHeader>
            <AccordionBody>
              <div className="filter-contents nonstop">
                <input
                  type="checkbox"
                  id="nonstop-filter"
                  name="nonstop"
                  checked={isNonStop}
                  onChange={handleNonStopChange}
                />
                <label htmlFor="nonstop-filter">
                  <Badge selected={isNonStop}>직항</Badge>
                </label>
              </div>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      )}

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
                  <input
                    type="checkbox"
                    id="origin-depTime-0006"
                    value={6}
                    onChange={handleOriginDepChange}
                    checked={originDepTime.includes(6)}
                  />
                  <label htmlFor="origin-depTime-0006">
                    <span />
                  </label>
                  <p className="time-legend first">0시</p>
                </li>
                <li className="time-selection">
                  <input
                    type="checkbox"
                    id="origin-depTime-0612"
                    value={12}
                    onChange={handleOriginDepChange}
                    checked={originDepTime.includes(12)}
                  />
                  <label htmlFor="origin-depTime-0612">
                    <span />
                  </label>
                  <p className="time-legend">6시</p>
                </li>
                <li className="time-selection">
                  <input
                    type="checkbox"
                    id="origin-depTime-1218"
                    value={18}
                    onChange={handleOriginDepChange}
                    checked={originDepTime.includes(18)}
                  />
                  <label htmlFor="origin-depTime-1218">
                    <span />
                  </label>
                  <p className="time-legend">12시</p>
                </li>
                <li className="time-selection">
                  <input
                    type="checkbox"
                    id="origin-depTime-1824"
                    value={24}
                    onChange={handleOriginDepChange}
                    checked={originDepTime.includes(24)}
                  />
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
                    <input
                      type="checkbox"
                      id="return-depTime-0006"
                      value={6}
                      checked={returnDepTime.includes(6)}
                      onChange={handleReturnDepChange}
                    />
                    <label htmlFor="return-depTime-0006">
                      <span />
                      <p className="time-legend first">0시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input
                      type="checkbox"
                      id="return-depTime-0612"
                      value={12}
                      checked={returnDepTime.includes(12)}
                      onChange={handleReturnDepChange}
                    />
                    <label htmlFor="return-depTime-0612">
                      <span />
                      <p className="time-legend">6시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input
                      type="checkbox"
                      id="return-depTime-1218"
                      value={18}
                      checked={returnDepTime.includes(18)}
                      onChange={handleReturnDepChange}
                    />
                    <label htmlFor="return-depTime-1218">
                      <span />
                      <p className="time-legend">12시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input
                      type="checkbox"
                      id="return-depTime-1824"
                      value={24}
                      checked={returnDepTime.includes(24)}
                      onChange={handleReturnDepChange}
                    />
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
                  <input
                    type="checkbox"
                    id="origin-arrTime-0006"
                    value={6}
                    checked={originArrTime.includes(6)}
                    onChange={handleOriginArrChange}
                  />
                  <label htmlFor="origin-arrTime-0006">
                    <span />
                    <p className="time-legend first">0시</p>
                  </label>
                </li>
                <li className="time-selection">
                  <input
                    type="checkbox"
                    id="origin-arrTime-0612"
                    value={12}
                    checked={originArrTime.includes(12)}
                    onChange={handleOriginArrChange}
                  />
                  <label htmlFor="origin-arrTime-0612">
                    <span />
                    <p className="time-legend">6시</p>
                  </label>
                </li>
                <li className="time-selection">
                  <input
                    type="checkbox"
                    id="origin-arrTime-1218"
                    value={18}
                    checked={originArrTime.includes(18)}
                    onChange={handleOriginArrChange}
                  />
                  <label htmlFor="origin-arrTime-1218">
                    <span />
                    <p className="time-legend">12시</p>
                  </label>
                </li>
                <li className="time-selection">
                  <input
                    type="checkbox"
                    id="origin-arrTime-1824"
                    value={24}
                    checked={originArrTime.includes(24)}
                    onChange={handleOriginArrChange}
                  />
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
                    <input
                      type="checkbox"
                      id="return-arrTime-0006"
                      value={6}
                      checked={returnArrTime.includes(6)}
                      onChange={handleReturnArrChange}
                    />
                    <label htmlFor="return-arrTime-0006">
                      <span />
                      <p className="time-legend first">0시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input
                      type="checkbox"
                      id="return-arrTime-0612"
                      value={12}
                      checked={returnArrTime.includes(12)}
                      onChange={handleReturnArrChange}
                    />
                    <label htmlFor="return-arrTime-0612">
                      <span />
                      <p className="time-legend">6시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input
                      type="checkbox"
                      id="return-arrTime-1218"
                      value={18}
                      checked={returnArrTime.includes(18)}
                      onChange={handleReturnArrChange}
                    />
                    <label htmlFor="return-arrTime-1218">
                      <span />
                      <p className="time-legend">12시</p>
                    </label>
                  </li>
                  <li className="time-selection">
                    <input
                      type="checkbox"
                      id="return-arrTime-1824"
                      value={24}
                      checked={returnArrTime.includes(24)}
                      onChange={handleReturnArrChange}
                    />
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
                    type="checkbox"
                    id="allChk"
                    name="allChk"
                    value="allChk"
                    disabled={
                      allianceCheck.filter((item) => item.checked !== true)
                        .length < 1
                    }
                    checked={
                      allianceCheck.filter((item) => item.checked !== true)
                        .length >= 1
                    }
                    onChange={handleSelectAll}
                  />
                  <label htmlFor="allChk">모두 선택</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="allCancel"
                    name="allChk"
                    value="allCancel"
                    disabled={
                      allianceCheck.filter((item) => item.checked !== true)
                        .length >= 1
                    }
                    checked={
                      allianceCheck.filter((item) => item.checked !== true)
                        .length < 1
                    }
                    onChange={handleUnselectAll}
                  />
                  <label htmlFor="allCancel">모두 해제</label>
                </li>
              </ul>
              <ul className="alliance">{alliances}</ul>
              <ul className="airline">{airlines}</ul>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      {/* 최대 가격 필터링 */}
      <Accordion type="small">
        <AccordionItem eventKey={1}>
          <AccordionHeader>
            <p className="filter-title">가격대 (탑승객 전체)</p>
          </AccordionHeader>
          <AccordionBody>
            <div className="filter-contents maxPrice">
              <label htmlFor="max-price">
                {`${maxPrice?.toLocaleString()}원 미만`}
              </label>
              <input
                type="range"
                className="input-range horizontal"
                id="max-price"
                min={0}
                max={Math.max(...prices)}
                value={maxPrice}
                step={100}
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
