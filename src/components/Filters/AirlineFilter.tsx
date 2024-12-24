import "@/app/(default)/(ticket)/ticket-result/Filter.scss";
import { FilterProps, IAllianceChk } from "@/atoms/atoms";
import useAllChecked from "@/hook/useAllChecked";
import { AirlineData, CodeState } from "@/types";
import {
  ChangeEvent,
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const AirlineFilter = memo(
  ({
    airline,
    carrierCodes,
    allianceChk,
    selectedAirlines: initialSelectedAirlines,
    handleFilterChange,
  }: {
    airline: CodeState<AirlineData>;
    carrierCodes: string[];
    allianceChk: IAllianceChk[];
    selectedAirlines: string[];
    handleFilterChange: Dispatch<SetStateAction<FilterProps>>;
  }) => {
    const [selectedAirlines, setSelectedAirlines] = useState<string[]>(
      initialSelectedAirlines || carrierCodes,
    );

    /* -------------------------------------------------------------------------- */
    /*                                 항공사 선택                                   */
    /* -------------------------------------------------------------------------- */
    const allianceCont =
      allianceChk.length > 0
        ? allianceChk
        : [
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
    // 모두 선택, 해제
    const { setCheck } = useAllChecked(allianceCheck, setAllianceCheck);

    const handleSelectAll = () => {
      setAllianceCheck(
        allianceCheck.map((item) => ({ ...item, checked: true })),
      );
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

      // selectedAirlines만 업데이트
      setSelectedAirlines(updatedAirlines);

      // allianceChk 상태 변경
      handleFilterChange((prev) => ({ ...prev, allianceChk: allianceCheck }));
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

    // 항공사 선택
    const handleAirlineChk = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;

      setSelectedAirlines((prev) => {
        if (checked) {
          return [...prev, value];
        }
        return prev.filter((item) => item !== value);
      });
    }, []);

    useEffect(() => {
      handleFilterChange((prev) => ({ ...prev, airline: selectedAirlines }));
    }, [selectedAirlines]);

    const airlines = carrierCodes.map((item, idx) => {
      return (
        <li key={idx}>
          <input
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
      <div className="filter-contents airlines">
        <ul className="all-check">
          <li>
            <input
              type="checkbox"
              id="allChk"
              name="allChk"
              value="allChk"
              disabled={
                allianceCheck.filter((item) => item.checked !== true).length < 1
              }
              checked={
                allianceCheck.filter((item) => item.checked !== true).length >=
                1
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
                allianceCheck.filter((item) => item.checked !== true).length >=
                1
              }
              checked={
                allianceCheck.filter((item) => item.checked !== true).length < 1
              }
              onChange={handleUnselectAll}
            />
            <label htmlFor="allCancel">모두 해제</label>
          </li>
        </ul>
        <ul className="alliance">{alliances}</ul>
        <ul className="airline">{airlines}</ul>
      </div>
    );
  },
);

export default AirlineFilter;
