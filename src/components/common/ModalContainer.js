import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import FormProvider from './FormProvider';
import { validateFields } from '../utils/Validation';
import { CloseIcon } from '../../assets/icon';
import './common.css';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '70%', sm: 400 },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const resolver = async (values) => {
  const fields = ['title', 'description', 'status'];
  const responseError = validateFields(fields, values);
  return {
    values: values.title ? values : {},
    errors: responseError,
  };
};

export default function BasicModal(props) {
    const {
        isModalOpen,
        setIsModalOpen,
        handleAddTask,
        handleUpdateTask,
        editingTask,
    } = props;
    const methods = useForm({
        resolver,
        defaultValues: {
        title: editingTask?.title || '',
        description: editingTask?.description || '',
        status: editingTask?.status || 'No Option',
        },
    });

    const { register, handleSubmit, formState: { errors }, reset } = methods;

    useEffect(() => {
        reset({
        title: editingTask?.title || '',
        description: editingTask?.description || '',
        status: editingTask?.status || 'No Option',
        });
    }, [editingTask, reset]);

    const onSubmit = handleSubmit((data) => {
        if (editingTask) {
        handleUpdateTask({ ...editingTask, ...data });
        } else {
        handleAddTask(data);
        }
        reset();
        setIsModalOpen(false);
    });

  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <span className="modal-close" onClick={() => setIsModalOpen(false)}>
            <CloseIcon />
          </span>
          <FormProvider style={{display: 'flex',flexDirection: 'column', gap: '5px'}}methods={methods} onSubmit={onSubmit}>
            <h3>{editingTask ? 'Edit Task' : 'Add Task'}</h3>
            <Box sx={{ '& .MuiTextField-root': { margin: 0, width:  {xs: '100% !important', md: '95% !important'} } }}>
              <TextField
                id="title"
                label="Title"
                placeholder="Title"
                type="text"
                multiline
                error={!!errors.title}
                {...register('title')}
                className={`title-input ${errors.title && 'input-error'}`}
              />
              {errors.title && <p className="errorMes">{errors.title.message}</p>}
            </Box>
            <textarea
              className={`description-input ${errors.description && 'input-error'}`}
              id="description"
              placeholder="Description"
              {...register('description')}
              style={{ width: '100%', minHeight: '150px' }}
            />
            {errors.description && <p className="errorMes">{errors.description.message}</p>}
            <select
              {...register('status')}
              className={`status-input ${errors.status && 'input-error'}`}
            >
              <option value="No Option">No Option</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            {errors.status && <p className="errorMes">{errors.status.message}</p>}
            <div className="modalbuttons">
              <button type="submit">
                {editingTask ? 'Update Task' : 'Add Task'}
              </button>
            </div>
          </FormProvider>
        </div>
      </Box>
    </Modal>
  );
}
