import "./progress.scss";

const Progress = ({
  textArr,
  status = 4,
}: {
  textArr: string[];
  status: number;
}) => {
  const li = textArr.map((item, idx) => {
    return (
      <li key={idx} className={idx + 1 <= status ? "act" : ""}>
        {item}
      </li>
    );
  });
  return (
    <div className="progress">
      <ul>{li}</ul>
    </div>
  );
};

export default Progress;
