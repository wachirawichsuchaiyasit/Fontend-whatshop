import React from 'react'
import Container from '../components/Container'
import { Button, DatePicker, Image, Spacer } from '@nextui-org/react'


function ScanPage() {
  return (
    <>
      <Container className='mt-12 p-5 md:p-0'>
        <p className=' text-4xl md:text-5xl font-bold text-center'>Upload Your Slip</p>
        <Spacer y={10} />
        <div className="z-10 flex items-center justify-center w-full">
          <label className="z-10 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="z-10 flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="z-10 w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div className=" z-0 absolute bottom-0 right-0">
          <Image
            src='https://i.pinimg.com/564x/6b/35/f7/6b35f7eee1ff06e04ce624386a3ffba0.jpg'
          />
        </div>
        <div className="hidden md:block z-0 absolute top-0  left-0">
          <Image
            src='https://i.pinimg.com/564x/21/5b/f2/215bf2ad433690a0cd4d3dd9e42c92d8.jpg'
          />
        </div>
      </Container>
    </>
  )
}


export default ScanPage