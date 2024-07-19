import React, { useState } from 'eact';
import { Button, Grid, Typography } from '@material-ui/core';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@material-ui/core/Modal';
import { TextField, FormControl, FormHelperText } from '@material-ui/core/Form';
import { useForm } from 'eact-hook-form';

const ReferEarnLandingPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    // API call to submit referral form
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Refer & Earn
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" align="center">
          Refer your friends and earn rewards!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Refer Now
        </Button>
      </Grid>
      <Modal open={openModal} onClose={handleCloseModal}>
        <ModalHeader>
          <Typography variant="h5">Refer a Course</Typography>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl error={errors.referrerName}>
                  <TextField
                    label="Referrer Name"
                    name="referrerName"
                    inputRef={register({ required: true })}
                  />
                  {errors.referrerName && (
                    <FormHelperText error>
                      Please enter your name
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl error={errors.referrerEmail}>
                  <TextField
                    label="Referrer Email"
                    name="referrerEmail"
                    inputRef={register({ required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                  />
                  {errors.referrerEmail && (
                    <FormHelperText error>
                      Please enter a valid email address
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl error={errors.refereeName}>
                  <TextField
                    label="Referee Name"
                    name="refereeName"
                    inputRef={register({ required: true })}
                  />
                  {errors.refereeName && (
                    <FormHelperText error>
                      Please enter your friend's name
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl error={errors.refereeEmail}>
                  <TextField
                    label="Referee Email"
                    name="refereeEmail"
                    inputRef={register({ required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                  />
                  {errors.refereeEmail && (
                    <FormHelperText error>
                      Please enter a valid email address
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl error={errors.courseName}>
                  <TextField
                    label="Course Name"
                    name="courseName"
                    inputRef={register({ required: true })}
                  />
                  {errors.courseName && (
                    <FormHelperText error>
                      Please enter the course name
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <ModalFooter>
              <Button variant="contained" color="primary" type="submit">
                Refer Now
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </Grid>
  );
};