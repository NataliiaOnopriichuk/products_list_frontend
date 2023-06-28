import basket from '../../assets/image/basket.png';
import { AnimatedImage, Inner, Title } from './style';


export const Home = () => {
  return (
    <>
    <Title>Fill your basket</Title>
    <Inner>
      <AnimatedImage src={basket} alt="basket" />
    </Inner>
    </>
  );
};
