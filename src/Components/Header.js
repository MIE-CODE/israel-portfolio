import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(async () => {
      const date = await new Date();
      const hour = await date.getHours();
      const mins = await date.getMinutes();

      const period = hour >= 12 ? "PM" : "AM";

      const hours12 = hour % 12 || 12;
      // const minuites
      const time12 = `${hours12}:${mins < 10 ? "0" + mins : mins} ${period}`;

      setTime((prevTime) => time12);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      data-aos="fade-down"
      className={`header flex place-content-between ease-in duration-500`}
    >
      <Link to="/" className="md:text-2xl font-medium cursor-pointer hover">
        Menyaga Israel
      </Link>
      <p className="text-xs items-center flex gap-2">
        {time}
        <img
          alt="🇳🇬"
          draggable="false"
          src="https://abs-0.twimg.com/emoji/v2/svg/1f1f3-1f1ec.svg"
          title="Flag of Nigeria"
          className="w-4 pb-1"
        ></img>
      </p>
    </header>
  );
};

export default Header;
