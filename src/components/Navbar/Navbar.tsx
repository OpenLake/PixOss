import styled from 'styled-components';
import { useEffect, useState } from 'react';

const PixelText = styled.span`
  font-family: 'Press Start 2P', cursive;
  font-size: 24px;
`;

function Navbar() {
  const [stars, setStars] = useState(0);
  useEffect(() => {
    try {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://api.github.com/repos/JaeAeich/Chaty/stargazers',
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
    <div className="flex justify-between items-center px-8 bg-[#CFC7E9] shadow-md py-4">
      <div className="text-center">
        <PixelText className="text-center">Pixels</PixelText>
      </div>
      <a href="https://github.com/JaeAeich/Pixels">
        <div className="flex gap-2 items-center">
          <div>⭐</div>
          <div>{stars} Stars</div>
        </div>
      </a>
    </div>
  );
}

export default Navbar;
