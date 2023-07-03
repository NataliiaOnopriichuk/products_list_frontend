import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';
import { Backdrop, Image, Modal, Text, TextContent } from './style';
import PropTypes from 'prop-types'
import { routes } from 'utils/routes';
import { useMedia } from 'react-use';
import logo from '../../../assets/image/logo.png'
import { Box } from '@mui/material';

const modalRoot = document.querySelector('#modal-root');

export const HomeModal = ({closeModal}) => {
  const isMobile = useMedia('(max-width: 479px)');
    
    useEffect(() => {
        const closeModalOnEscape = event => {
          if (event.code === 'Escape') {
            closeModal();
          }
        };
        window.addEventListener('keydown', closeModalOnEscape);
    
        return () => {
          window.removeEventListener('keydown', closeModalOnEscape);
        };
      }, [closeModal]);
    
      const closeModalOnBackdropClick = event => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      };

      return createPortal(
        <Backdrop onClick={closeModalOnBackdropClick}>
      <Modal>
        {isMobile &&   <Box><Image src={logo} alt="logo"/></Box>}
        <TextContent>
        If you want to fill your basket, you need to
        </TextContent><Text to={routes.REGISTER}>register</Text>
      </Modal>
    </Backdrop>,
        modalRoot
      );
      }


      HomeModal.propTypes = {
        closeModal: PropTypes.func.isRequired,
      }
