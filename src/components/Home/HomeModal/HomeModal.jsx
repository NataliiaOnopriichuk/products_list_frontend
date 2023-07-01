import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { createPortal } from 'react-dom';
import { Modal, Text, TextContent, style } from './style';
import PropTypes from 'prop-types'
import { routes } from 'utils/routes';

const modalRoot = document.querySelector('#modal-root');

export const HomeModal = ({closeModal}) => {
    
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
        <Modal onClick={closeModalOnBackdropClick}>
      <Box sx={{ ...style, width: 400 }}>
        <TextContent>
        If you want to fill your basket, you need to
        </TextContent><Text to={routes.REGISTER}>register</Text>
      </Box>
    </Modal>,
        modalRoot
      );
      }


      HomeModal.propTypes = {
        closeModal: PropTypes.func.isRequired,
      }
