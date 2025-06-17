import React, { useRef, useEffect, useState } from 'react';
import '../Styles/Signature.css';

function Signature() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 400;
    canvas.height = 200;
    canvas.style.border = '2px solid #ccc';
  
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctxRef.current = ctx;
  
    ctx.beginPath();
    ctx.moveTo(20, canvas.height - 30);
    ctx.lineTo(canvas.width - 20, canvas.height - 30);
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 1;
    ctx.stroke();
  }, []);
  

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
  
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(20, canvas.height - 30);
    ctxRef.current.lineTo(canvas.width - 20, canvas.height - 30);
    ctxRef.current.strokeStyle = '#999';
    ctxRef.current.lineWidth = 1;
    ctxRef.current.stroke();
  };
  

  return (
    <div className="signature-container">
      <label className="terms">
        <input type="checkbox" />
        <span>I accept the terms and conditions of <strong>Makhzny</strong></span>
      </label>

      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onMouseLeave={finishDrawing}
        className="signature-canvas"
      ></canvas>

      <div className="signature-buttons">
        <button className="clear-btn" onClick={clearCanvas}>Clear</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
}

export default Signature;
