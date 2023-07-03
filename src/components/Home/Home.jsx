import basket from '../../assets/image/basket.png';
import { HomeModal } from './HomeModal/HomeModal';
import { Image, ArrowIcon, Inner, Title } from './style';
import { useState } from 'react';
import { useMedia } from "react-use";



export const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const isMobile = useMedia('(max-width: 767px)');

  const openModal =() =>{
    setIsOpenModal(true)
  }

  const closeModal =() =>{
    setIsOpenModal(false)
  }

  return (
    <>
    <Title>Fill your basket</Title>
      <ArrowIcon/>
    <Inner onClick={openModal}>
      <Image src={basket} alt="basket" />
    </Inner>
  {isOpenModal && !isMobile && <HomeModal closeModal={closeModal}/>}
  {isOpenModal && isMobile && <HomeModal closeModal={closeModal}/>}
    </>
  );
};
