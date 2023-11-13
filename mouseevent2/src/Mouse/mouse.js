import { useState } from 'react';
import './mouse.css'

export const useMouseHandlers = () => {
  // Estado para almacenar mensajes
  const [messages, setMessages] = useState({});

  const handleClick = () => {
    setMessages({ click: 'Mouse clicked' });
  };

  const handleDoubleClick = () => {
    setMessages({ click: 'Mouse clicked two times' });
  };

  const handleMouseDown = () => {
    setMessages({ click: 'Mouse button pressed down' });
  };

  const handleMouseUp = () => {
    setMessages({ click: 'Mouse button released' });
  };

  const handleMouseMove = () => {
    setMessages({ click: 'Mouse moved over me' });
  };

  const handleMouseEnter = () => {
    setMessages({ click: 'Mouse entered' });
  };

  const handleMouseLeave = () => {
    setMessages({ click: 'Mouse left' });
  };

  const handleMouseOver = () => {
    setMessages({ click: 'Mouse over me' });
  };

  return {
    messages,
    handleClick,
    handleDoubleClick,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseOver,
  };
};
