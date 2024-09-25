import "@/app/(default)/(ticket)/ticket-result/Filter.scss";
import { FilterProps } from "@/atoms/atoms";
import useAllChecked from "@/hook/useAllChecked";
import { AirlineData, CodeState } from "@/types";
import {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const AirlineFilter = memo(
  ({
    airline,
    carrierCodes,
    handleFilterChange,
  }: {
    airline: CodeState<AirlineData>;
    carrierCodes: string[];
    handleFilterChange: (filter: FilterProps) => void;
  }) => {
    const [selectedAirlines, setSelectedAirlines] =
      useState<string[]>(carrierCodes);
    const airlineRef = useRef(null);

    console.log("항공사 필터 렌더링");

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
      handleFilterChange({ airline: selectedAirlines });
    }, [selectedAirlines]);
    //   const { value } = e.target;

    //   setSelectedAirlines((prev) => {
    //     if (!prev) {
    //       return [value];
    //     }

    //     if (e.target.checked) {
    //       return [...prev, value];
    //     }
    //     return prev.filter((time) => time !== value);
    //   });
    // };

    const handleAirlineChk = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;

      setSelectedAirlines((prev) => {
        if (checked) {
          return [...prev, value];
        }
        return prev.filter((item) => item !== value);
      });
    }, []);

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
