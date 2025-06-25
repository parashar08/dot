import { useState, useEffect } from "react";

const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedData =
        now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();

      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedData} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold text-white mt-4">{dateTime}</h2>
    </div>
  );
};

export default TodoDateTime;
