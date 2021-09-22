import React, { useState } from 'react'

import { Button, Form } from 'react-bootstrap'
import { Icon, Grid } from '@material-ui/core'

function FormikComponent({ formik, name, label }) {
    console.log({ formik })
    return (
        <Form.Group controlId="formBlog">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type="text"
                name="firstName"
                placeholder={label}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[{ name }]}
                className={
                    formik.touched[{ name }] && formik.errors[{ name }]
                        ? 'error'
                        : null
                }
            />
            {formik.touched[{ name }] && formik.errors[{ name }] ? (
                <div className="error-message">{formik.errors[{ name }]}</div>
            ) : null}
        </Form.Group>
    )
}

export default FormikComponent
