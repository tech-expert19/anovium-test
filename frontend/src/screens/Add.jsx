import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
// Components imports
import ToastComponent from '../components/ToastComponent/ToastComponent'
import schema1 from '../schemas/schema1'
// redux imports
import { useDispatch } from "react-redux";
import { createAddPackage } from "../actions/AddPackage"

export default function Add() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema1.schema)
  })

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(
      createAddPackage(
        {
          id: values.id,
          destination_address: values.destinationAddress,
          return_address: values.returnAddress,
        }
      )
    )

  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (

    <>
      <Container className="pb-5">

        <Row>
          <Col className="p-5 text-center">
            <h1 className="text-primary">
              Add New Package
            </h1>
          </Col>
        </Row>
        <Form
          className="px-5 ez-contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* ID */}
          <Row>
            <Form.Group
              className="mt-4"
              as={Col}
              md
              controlId="formGridEmail"
            >
              <Form.Control
                className="bg-light"
                type="number"
                min="1"
                placeholder='ID*'
                {...register('id')}
              />
              {errors.id && (
                <div className="invalid-feedback d-block">
                  {errors.id.message}
                </div>
              )}
            </Form.Group>
          </Row>
          {/* Destination Address */}
          <Row>
            <Form.Group
              className="mt-4"
              as={Col}
              controlId="formGridPassword"
            >
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                className="bg-light"
                type="text"
                placeholder="Destination Address*"
                {...register('destinationAddress')}
              />
              {errors.destinationAddress && (
                <div className="invalid-feedback d-block">
                  {errors.destinationAddress.message}
                </div>
              )}
            </Form.Group>
          </Row>
          {/* Return Address */}
          <Row>
            <Form.Group
              className="mt-4"
              as={Col}
              md
              controlId="formGridEmail"
            >

              <Form.Control
                className="bg-light"
                type="text"
                placeholder='Return Address*'
                {...register('returnAddress')}
              />
              {errors.returnAddress && (
                <div className="invalid-feedback d-block">
                  {errors.returnAddress.message}
                </div>
              )}
            </Form.Group>
          </Row>
          {/* Submit Button */}
          <Row>
            <Col>
              <div className="form-group text-center">
                <div className="pt-4 mb-3">
                  <Button
                    type="submit"
                    className="btn btn-md btn-primary text-capitalize fw-bolder px-4"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

        </Form>

      </Container>
    </>
  )
}
