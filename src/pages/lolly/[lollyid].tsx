import { useQuery, gql } from '@apollo/client'
import React from 'react'
import Lolly from '../../components/Lolly'

const GET_LOLLIES = gql`
  query ($lollyid: ID!) {
    getLolly(lollyid: $lollyid) {
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

const lolly = ({ serverData }) => {
  console.log('Server data', serverData)
  const { loading, error, data } = useQuery(GET_LOLLIES, {
    variables: {
      lollyid: serverData,
    },
  })

  if (error) {
    return <h1>Error...</h1>
  }

  return (
    <div
      className='h-screen grid place-items-center'
      style={{ backgroundColor: '#21212B' }}
    >
      <div>
        {loading ? (
          <div
            style={{ textShadow: '#e0f 0 0 20px' }}
            className='font-custom font-extrabold text-white text-7xl text-center mt-7'
          >
            Loading...
          </div>
        ) : (
          <>
            <div className='flex flex-col'>
              <div
                style={{ textShadow: '#e0f 0 0 20px' }}
                className='font-custom font-extrabold text-white text-4xl text-center mt-7'
              >
                Enjoy your lolly! Share it with this link:
              </div>
              <div
                style={{ textShadow: '#e0f 0 0 20px' }}
                className='font-custom font-extrabold text-white text-4xl text-center mt-7'
              >{`https://serverless-virtual-lolly.netlify.app/lolly/${serverData}`}</div>
            </div>
            <div className='flex items-center w-screen justify-center'>
              <div className='flex items-center'>
                <div>
                  <Lolly
                    lollyTop={data?.getLolly?.lollyTop}
                    lollyMiddle={data?.getLolly?.lollyMiddle}
                    lollyBottom={data?.getLolly?.lollyBottom}
                  />
                </div>
              </div>

              <div className='w-2/6'>
                <div className=' sm:mx-auto sm:w-full sm:max-w-md'>
                  <div className=' py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <div>
                      <label
                        htmlFor='text'
                        className={` block text-sm font-medium text-white `}
                      >
                        To
                      </label>
                      <div className='mt-1'>
                        <input
                          id='reciever'
                          name='reciever'
                          type='text'
                          disabled
                          defaultValue={data?.getLolly?.reciever}
                          className={`appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm bg-gray-300 focus:bg-white `}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='text'
                        className={` block text-sm font-medium text-white`}
                      >
                        Message
                      </label>
                      <div className='mt-1  '>
                        <textarea
                          id='message'
                          name='message'
                          disabled
                          defaultValue={data?.getLolly?.message}
                          className={`appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm h-48 bg-gray-300 focus:bg-white`}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='text'
                        className={` block text-sm font-medium text-white `}
                      >
                        From
                      </label>
                      <div className='mt-1'>
                        <input
                          id='sender'
                          name='sender'
                          type='sender'
                          autoComplete='current-sender'
                          disabled
                          defaultValue={data?.getLolly?.sender}
                          className={`appearance-none block w-full px-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm bg-gray-300 focus:bg-white`}
                        />
                      </div>
                    </div>

                    {/* <div>
                            <button
                              type='submit'
                              disabled={isSubmitting}
                              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              {isSubmitting
                                ? 'Loading...'
                                : 'Freeze this lolly to get your Link'}
                            </button>
                          </div> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default lolly
export async function getServerData(context) {
  console.log(context.params.lollyid)
  const lollyid = context.params.lollyid
  return {
    props: lollyid,
  }
}
