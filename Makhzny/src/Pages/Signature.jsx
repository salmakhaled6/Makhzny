import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Signature.css';

function Signature() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  
  const location = useLocation();
  const { reservationId } = location.state || {}; 

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

    drawLine(ctx);
  }, []);

  const drawLine = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(20, canvasRef.current.height - 30);
    ctx.lineTo(canvasRef.current.width - 20, canvasRef.current.height - 30);
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 1;
    ctx.stroke();
  };

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
    drawLine(ctxRef.current);
  };

  const handleSave = async () => {
    if (!reservationId) {
      alert("Reservation ID is missing.");
      return;
    }
  
    const canvas = canvasRef.current;
    const base64Signature = canvas.toDataURL("image/png");
  
    try {
      const saveSignRes = await axios.post("https://makhzny.odoo.com/save_sign", {
        reservation_id: reservationId,
        sign: base64Signature,
      });
  
      const success = saveSignRes?.data?.result?.data?.success;
      if (!success) {
        alert(" Failed to save signature.");
        return;
      }
  
      const response = await fetch(`https://makhzny.odoo.com/generate_session/${reservationId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}), 
      });
  
      const result = await response.json();
      const sessionLink = result?.result?.data;
  
      if (sessionLink) {
        window.location.href = sessionLink;
      } else {
        alert(" Session link not found.");
      }
  
    } catch (error) {
      console.error("Error:", error);
      alert(" Something went wrong.");
    }
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
        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default Signature;
