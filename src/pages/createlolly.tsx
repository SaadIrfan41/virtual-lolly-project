import { Formik } from 'formik'
import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import Lolly from '../components/Lolly'
import * as yup from 'yup'
import { Link } from 'gatsby'
import { useMutation, gql } from '@apollo/client'
import { navigate } from 'gatsby-link'

const CREATE_LOLLY = gql`
  mutation (
    $sender: String!
    $reciever: String!
    $message: String!
    $lollyTop: String!
    $lollyMiddle: String!
    $lollyBottom: String!
  ) {
    createLolly(
      sender: $sender
      reciever: $reciever
      message: $message
      lollyTop: $lollyTop
      lollyMiddle: $lollyMiddle
      lollyBottom: $lollyBottom
    ) {
      id
      sender
      reciever
      message
      lollyTop
      lollyMiddle
      lollyBottom
    }
  }
`

const createlolly = () => {
  const [createLolly] = useMutation(CREATE_LOLLY)

  const [lollyTop, setLollyTop] = useState('#d52358')
  const [lollyMiddle, setLollyMiddle] = useState('#e95946')
  const [lollyBottom, setLollyBottom] = useState('#deaa43')
  return (
    <div
      className='h-screen grid place-items-center'
      style={{ backgroundColor: '#21212B' }}
    >
      <div className='flex items-center w-screen justify-center'>
        <div className='flex items-center'>
          <div>
            <Lolly
              lollyTop={lollyTop}
              lollyMiddle={lollyMiddle}
              lollyBottom={lollyBottom}
            />
          </div>
          <div className=''>
            <input
              type='color'
              value={lollyTop}
              className='rounded-full h-14 border-2 w-14 overflow-hidden cursor-pointer '
              onChange={(e) => {
                setLollyTop(e.target.value)
              }}
            />
            <br />
            <input
              type='color'
              value={lollyMiddle}
              className='rounded-full h-14 border-2 w-14 overflow-hidden cursor-pointer'
              onChange={(e) => {
                setLollyMiddle(e.target.value)
              }}
            />
            <br />
            <input
              type='color'
              name='lollyBottom'
              id='lollyBottom'
              value={lollyBottom}
              className='rounded-full h-14 border-2 w-14 overflow-hidden cursor-pointer'
              onChange={(e) => {
                setLollyBottom(e.target.value)
              }}
            />
          </div>
        </div>

        <div className='w-2/6'>
          <div className=''>
            <div className=' '>
              <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className=' py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                  <Formik
                    initialValues={{
                      reciever: '',
                      sender: '',
                      message: '',
                    }}
                    validationSchema={yup.object({
                      reciever: yup
                        .string()

                        .required('Reciever Name is Required'),
                      message: yup
                        .string()

                        .required('Message Field is Required'),
                      sender: yup
                        .string()

                        .required('Sender Name is Required'),
                    })}
                    onSubmit={async (values) => {
                      console.log(values)
                      try {
                        const data = await createLolly({
                          variables: {
                            sender: values.sender,
                            reciever: values.reciever,
                            message: values.message,
                            lollyTop: lollyTop,
                            lollyMiddle: lollyMiddle,
                            lollyBottom: lollyBottom,
                          },
                        })

                        navigate(
                          `/lolly?lollyid=${data?.data?.createLolly?.id}`
                        )
                      } catch (error) {
                        console.log(error)
                      }
                    }}
                  >
                    {({
                      errors,

                      touched,

                      handleChange,

                      handleBlur,

                      handleSubmit,

                      isSubmitting,
                    }) => (
                      <div className=''>
                        <form className='space-y-6' onSubmit={handleSubmit}>
                          <div>
                            <label
                              htmlFor='text'
                              className={`${
                                errors.reciever &&
                                touched.reciever &&
                                errors.reciever
                                  ? 'text-red-500 '
                                  : 'text-white '
                              } block text-sm font-medium `}
                            >
                              To
                            </label>
                            <div className='mt-1'>
                              <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='reciever'
                                name='reciever'
                                type='text'
                                required
                                className={`${
                                  errors.reciever &&
                                  touched.reciever &&
                                  errors.reciever
                                    ? 'border-2 border-red-500  focus:ring-red-500 '
                                    : 'border-2 focus:border-indigo-500  focus:ring-indigo-500 '
                                }appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm bg-gray-300 focus:bg-white `}
                              />
                            </div>
                            <span className=' text-red-500'>
                              {errors.reciever &&
                                touched.reciever &&
                                errors.reciever}
                            </span>
                          </div>

                          <div>
                            <label
                              htmlFor='text'
                              className={`${
                                errors.message &&
                                touched.message &&
                                errors.message
                                  ? 'text-red-500 '
                                  : 'text-white'
                              } block text-sm font-medium `}
                            >
                              Message
                            </label>
                            <div className='mt-1  '>
                              <textarea
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='message'
                                name='message'
                                required
                                className={`${
                                  errors.message &&
                                  touched.message &&
                                  errors.message
                                    ? 'border-2 border-red-500 border-opacity-100 focus:ring-red-500 '
                                    : 'border-2 focus:border-indigo-500 border-opacity-100 focus:ring-indigo-500 '
                                }appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm h-48 bg-gray-300 focus:bg-white`}
                              />
                            </div>
                            <span className=' text-red-500'>
                              {errors.message &&
                                touched.message &&
                                errors.message}
                            </span>
                          </div>

                          <div>
                            <label
                              htmlFor='text'
                              className={`${
                                errors.sender && touched.sender && errors.sender
                                  ? 'text-red-500 '
                                  : 'text-white'
                              } block text-sm font-medium `}
                            >
                              From
                            </label>
                            <div className='mt-1'>
                              <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='sender'
                                name='sender'
                                type='sender'
                                autoComplete='current-sender'
                                required
                                className={`${
                                  errors.sender &&
                                  touched.sender &&
                                  errors.sender
                                    ? 'border-2 border-red-500 border-opacity-100 focus:ring-red-500 '
                                    : 'border-2 focus:border-indigo-500 border-opacity-100 focus:ring-indigo-500  '
                                }appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm bg-gray-300 focus:bg-white`}
                              />
                            </div>
                            <span className=' text-red-500'>
                              {errors.sender && touched.sender && errors.sender}
                            </span>
                          </div>

                          <div>
                            <button
                              type='submit'
                              disabled={isSubmitting}
                              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              {isSubmitting
                                ? 'Loading...'
                                : 'Freeze this lolly to get your Link'}
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default createlolly
