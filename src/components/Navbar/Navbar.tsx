import { useEffect, useState } from 'react';

function Navbar() {
  const [stars, setStars] = useState(0);
  useEffect(() => {
    try {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://api.github.com/repos/OpenLake/pixels/stargazers',
          );
          const data = await response.json();
          setStars(data.length);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    } catch (error) {}
  }, []);
  return (
    <div className="flex justify-between items-center px-8 bg-cyan-500	 shadow-md py-4">
      <div className="text-center">
        <span className="text-center text-[24px] font-semibold font-['Handjet']">
          Pixels
        </span>
      </div>
      <a href="https://github.com/JaeAeich/Pixels">
        <div className="flex gap-2 items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="yellow"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
          <div>{stars} Stars</div>
        </div>
      </a>
    </div>
  );
}

export default Navbar;
