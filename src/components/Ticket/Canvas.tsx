"use client";

import saveAs from "file-saver";
import html2canvas from "html2canvas";
import {
  ChangeEvent,
  createRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

const Canvas = ({ ticketRef }: { ticketRef: RefObject<HTMLDivElement> }) => {
  const canvasBoxRef = useRef<HTMLDivElement>(null);
  const colorList = ["#F94141", "#F18657", "#FFA93A", "#82A571", "#527198"];
  const [color, setColor] = useState("#F94141");
  const [brushSize, setBrushSize] = useState(4);
  const [image, setImage] = useState<string | ArrayBuffer | null>("");
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [history, setHistory] = useState<string[]>([]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return false;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleDownload = async () => {
    if (!ticketRef.current) return;
    try {
      const div = ticketRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => blob !== null && saveAs(blob, "result.png"));
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  let canvas: HTMLCanvasElement;
  let canvasRef = createRef<HTMLCanvasElement>();
  let pos = { drawable: false, X: -1, Y: -1 };
  let ctx: CanvasRenderingContext2D;

  const saveState = () => {
    const dataUrl = canvas.toDataURL();
    setHistory((prevHistory) => [...prevHistory, dataUrl]);
  };

  const getPosition = (e: MouseEvent | TouchEvent) => {
    if ("touches" in e) {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      return {
        X: touch.clientX - rect.left,
        Y: touch.clientY - rect.top,
      };
    } else return { X: e.offsetX, Y: e.offsetY };
  };

  const initDraw = (e: MouseEvent | TouchEvent) => {
    if (history.length === 0) saveState();

    ctx.beginPath();
    pos = { drawable: true, ...getPosition(e) };
    ctx.moveTo(pos.X, pos.Y);

    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  };

  const draw = (e: MouseEvent | TouchEvent) => {
    if (pos.drawable) {
      pos = { ...pos, ...getPosition(e) };
      ctx.lineTo(pos.X, pos.Y);
      ctx.stroke();
    }
  };

  const finishDraw = () => {
    if (!pos.drawable) return;
    pos = { drawable: false, X: -1, Y: -1 };
    saveState();
  };

  const handleUndo = () => {
    history.pop();
    setHistory([...history]);
    redrawCanvas();
  };

  const redrawCanvas = () => {
    const previousState = history[history.length - 1];
    const img = new Image();
    img.src = previousState;
    img.onload = () => {
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
      ctx.drawImage(img, 0, 0);
    };
  };

  const handleClear = () => {
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
    setHistory([]);
  };

  useEffect(() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext("2d")!;

    const handleMouseDown = (e: MouseEvent | TouchEvent) => initDraw(e);
    const handleMouseMove = (e: MouseEvent | TouchEvent) => draw(e);
    const handleMouseUp = () => finishDraw();
    const handleMouseOut = () => finishDraw();

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseout", handleMouseOut);
    canvas.addEventListener("touchstart", handleMouseDown);
    canvas.addEventListener("touchmove", handleMouseMove);
    canvas.addEventListener("touchend", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseout", handleMouseOut);
      canvas.removeEventListener("touchstart", handleMouseDown);
      canvas.removeEventListener("touchmove", handleMouseMove);
      canvas.removeEventListener("touchend", handleMouseUp);
    };
  });

  useEffect(() => {
    const { clientWidth, clientHeight } = canvasBoxRef.current!;
    setCanvasSize({ width: clientWidth, height: clientHeight });
  }, []);

  return (
    <div className="canvas-inner">
      <div
        className="canvas-box"
        ref={canvasBoxRef}
        style={{
          background: `url(${image}) no-repeat center / cover`,
        }}
      >
        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
        ></canvas>
      </div>
      <div className="tool-box">
        <div className="tool-inner">
          <div className="tool-top">
            <section className="tool color-box">
              <h3 className="hidden">컬러 선택</h3>
              {colorList.map((item) => (
                <label
                  className={item === color ? "act" : ""}
                  key={item}
                  style={{ background: item }}
                >
                  <input
                    type="radio"
                    name="color"
                    value={item}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </label>
              ))}
            </section>
            <section className="tool size-box">
              <h3 className="hidden">사이즈 조절</h3>
              <input
                type="range"
                className="input-range"
                min={1}
                max={10}
                value={brushSize}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const { value, attributes, style } = e.target;
                  setBrushSize(+value);
                  const percent = 90 / attributes.max.value;
                  style.background = `linear-gradient(to bottom, var(--color-primary) 0%, var(--color-primary) ${percent * +value}%, var(--color-gray-50) ${percent * +value}%, var(--color-gray-50) 100%`;
                }}
              />
            </section>
          </div>
          <div className="tool-middel">
            <button type="button" className="undo" onClick={() => handleUndo()}>
              <span className="hidden">한 단계 이전으로</span>
            </button>
            <button
              type="button"
              className="clear"
              onClick={() => handleClear()}
            >
              <span className="hidden">전체 지우기</span>
            </button>
          </div>
        </div>
        <div className="btn-box">
          <button>이전으로</button>
          <div className="file-box">
            <label htmlFor="file" className="secondary-ver">
              이미지 첨부
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e)}
              hidden
            />
          </div>
          <button className="primary-ver" onClick={handleDownload}>
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
