import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface DataType {
  name: string;
  title: string;
  content: string;
  checked: boolean;
}

const useAllChecked = (
  data: DataType[],
  setData: Dispatch<SetStateAction<DataType[]>>,
) => {
  const setCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === "allChk") {
      setData(data.map((item) => ({ ...item, checked })));
    } else {
      setData(
        data.map((item) => (item.name === name ? { ...item, checked } : item)),
      );
    }
  };
  return { setCheck };
};

export default useAllChecked;
