import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, Icon } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import './FormModal.css'
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        background: '#1976d2',
        color: 'white',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
})

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose } = props
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="Close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
})

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions)

function FormModal(props) {
    const { open, title, submitFormHandler, toggleModal, saveActionHandler } =
        props

    return (
        <div>
            <Dialog
                onClose={toggleModal}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={true}
                maxWidth="md"
            >
                <DialogTitle id="customized-dialog-title" onClose={toggleModal}>
                    {title}
                </DialogTitle>
                <DialogContent dividers>{props.children}</DialogContent>
                <DialogActions>
                    <Button onClick={toggleModal} className="bg-error">
                        <Icon>close</Icon>

                        <span className="pl-2 capitalize">Close</span>
                    </Button>
                    <Button
                        color="primary"
                        onClick={() => saveActionHandler()}
                        variant="contained"
                        type="submit"
                    >
                        <Icon>save</Icon>
                        <span className="pl-2 capitalize">Save</span>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FormModal
