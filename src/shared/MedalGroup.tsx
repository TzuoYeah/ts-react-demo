import HandleMedal from 'hook/HandleMedal'
import {useMedal} from 'hook/HandleMedal'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal';

import DateEventEditor from 'feature/DateEventEditor'

// #region Props
// #endregion

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

export default function SnackbarGroup() {
  const medal = useMedal()
  return (
    <HandleMedal>

      <Modal
        open={medal.createOpen}
        onClose={medal.closeCreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DateEventEditor type='create'/>
        </Box>
      </Modal>
      
      <Modal
        open={medal.editOpen}
        onClose={medal.closeEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DateEventEditor type='edit' noteEvent={medal.noteEvent}/>
        </Box>
      </Modal>

    </HandleMedal>
  )
}