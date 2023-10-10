import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Spinner from 'react-bootstrap/Spinner'

import { AiOutlineSearch } from "react-icons/ai"

import Card from '../components/Card'
import schema2 from '../schemas/schema2'

import { useDispatch, useSelector } from "react-redux"
import { getAddPackage } from "../actions/AddPackage"

export default function Home() {
  const [page, setPage] = useState(1)
  let navigate = useNavigate()

  const {
    getValues,
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema2.contact)
  })

  // const onSubmit = (values) => {
  //   console.log(values);

  // }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAddPackage({ page: page }));
  }, [])

  const filter = (text) => {
    setPage(1)
    dispatch(getAddPackage({ page: 1, search: text }));
  }
  const list = useSelector((state) => state?.AddPackage?.data);

  return list != null ? (
    <>
      <Container className="pb-4">
        <Row>
          <Col className="text-center pb-3">
            <h2 className="text-primary">
              Available Packages
            </h2>
          </Col>
        </Row>

        <Form className="px-5 ez-contact-form" onSubmit={() => navigate('/add')}>

          <Row>
            <Form.Group
              className="mt-1"
              as={Col}
              md
              controlId="formGridEmail"
            >
              <div className="row btn-list mb-4">
                <div className="col-12 text-center">
                  <Button
                    type="submit"
                    className="btn btn-primary px-4 text-capitalize font-weight-normal"
                  >
                    Add Package
                  </Button>
                </div>
              </div>
              <InputGroup>
                <InputGroup.Text>
                  <AiOutlineSearch />
                </InputGroup.Text>
                <Form.Control
                  className="bg-light"
                  type="text"
                  placeholder='Search by ID, destination address and return address'

                  {...register('search', {
                    onChange: (event) => { filter(event.target.value) }
                  })}
                />
              </InputGroup>
              {errors.search && (
                <div className="invalid-feedback d-block">
                  {errors.search.message}
                </div>
              )}
            </Form.Group>
          </Row>

        </Form>

        <Row className="px-xl-21 position-relative doctor-signup-form">

          {list?.packages.map((val, i) => (
            <Col xs="12" lg="4" md="6" className="mt-5" key={i}>
              <Card data={val} />
            </Col>
          ))}

        </Row>
        {
          list?.packages.length < list?.total && (
            <>
              <div className="pt-4">
                <Button
                  onClick={() => {
                    setPage(page + 1);
                    dispatch(getAddPackage({ page: page + 1, search: getValues('search') }));
                  }}
                  type="submit"
                  className="btn btn-primary text-capitalize px-4"
                >
                  Load More
                </Button>
              </div>
            </>
          )
        }


      </Container>
    </>
  ) : (
    null
  )
}
