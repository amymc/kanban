import React from 'react';
import { css } from 'emotion';
import { useModal } from './Modal.context';
import Button from './Button';

const column = css({
  width: 240,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
  backgroundColor: '#fff',
  borderRadius: 16,
  margin: '0 8px',
});

const h2 = css({
  margin: '30px 22px',
});

const Column = ({ canCreateTask, heading }) => {
  const { toggleModal } = useModal();

    return (
      <div className={column}>
        <h2 className={h2}>{heading}</h2>
        {canCreateTask && <Button label="Create Task" onClick={toggleModal} type='large' />}
      </div>
    );
  }

export default Column;
