"use client"
import React from "react"
import NavbarComponent from "./components/Navbar/navbar"
import { Button, Image, Spacer } from "@nextui-org/react"
import Container from "./components/Container"
import { Bar } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart, ChartComponentLike, ChartItem, Chart as ChartJS, ChartOptions, LinearScale, defaults } from "chart.js"
import Link from "next/link"
import {motion} from "framer-motion"

ChartJS.register(
  BarElement,
  LinearScale,
  CategoryScale
)

const Initial_Base ={y : 50 ,opacity : 0}
const Animate_Base = {y : 0 , opacity : 1}
const  Trasition_Base = {ease : "easeInOut" , duration : 0.6}

export default function HomePage() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'My Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="grid gap-4 m-2">
        <Container
          className="flex flex-col md:flex-row "
        >

          <motion.div initial={Initial_Base} animate = {Animate_Base} transition={Trasition_Base} className="space-y-3 md:space-y-2 text-center md:text-start mt-10 md:mt-28">
            <p className="font-bold text-5xl md:text-6xl">WE CAN <span className="font-bold text-5xl md:text-6xl text-[#2CB373]">SAVE</span></p>
            <p className="font-bold text-5xl md:text-6xl text-[#2CB373]">YOUR MONEY</p>
            <p className="text-sm md:w-3/5">How long is it when you buy something? You will know which of your purchasing behaviors are most frequent and which are unnecessary. You can save your money.</p>
            <Button color="primary" className="w-1/3 mx-auto" size="sm">
              <Link href={"/"}>Start</Link>
            </Button>
          </motion.div>

          <Image

            className="bg-red-200 "
            width={1000}
            src="https://i.pinimg.com/564x/41/16/5c/41165cc9d59ef51f72e7f86eee07f33d.jpg"
          />

        </Container>
        
        <motion.p initial={Initial_Base} animate={Animate_Base} transition={Trasition_Base}  className="text-center text-4xl md:text-7xl mt-20 font-bold">WHAT ARE YOU TYPE</motion.p>

        <Spacer y={12} />

        <Container
          className=" m-5"
        >
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-10 ">
            <SelectTypesComponent />
          </div>

        </Container>

        <Spacer y={12} />

        <Container
          className=" gap-10 grid grid-cols-1 md:grid-cols-2"
        >
          <Image
            className="hidden md:block"
            width={500}
            src="https://i.pinimg.com/564x/f6/09/41/f6094121ae8689a84eebb990d664440a.jpg"
          />

          <BarComponent />

        </Container>

        <Spacer y={12} />

        <Container
          className=" grid justify-center">

          <Image
            width={500}
            src="https://i.pinimg.com/736x/33/5d/c5/335dc529dbb06aa72b878e998ce8fddf.jpg"
          />


          <p className="font-bold text-4xl md:text-5xl text-center mt-12 w-full">Easy to find history</p>
          <Spacer y={5} />
          <p className="text-sm text-center mx-auto w-96 text-maincolor  ">We have history your order . you can find with time or date . that so easy make you happy money </p>
          <Spacer y={10} />
          <Button color="primary" className="w-1/2 mx-auto" size="sm">
            <Link href={"/"}>Start</Link>
          </Button>


        </Container>
      </div>

    </>
  )
}

const BarComponent = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false

  }
  return <div className="w-full h-96 md:h-full ">
    <Bar
      className="h-full"
      options={options}
      data={{
        labels: ["One", "Two", "Tree", "Last"],
        datasets: [
          { label: "1", data: [25, 30, 15, 25], backgroundColor: "#D5F7E6", }

        ],
      }}
    />
  </div>
}

const SelectTypesComponent = () => {
  const Texts = [
    {
      name: "Spend money before thinking",
      value: 1
    },
    {
      name: "Spend all the money you have",
      value: 2
    },
    {
      name: "Think before you spend money",
      value: 3
    },
    {
      name: "Plan everything before receiving money",
      value: 4
    },
  ]
  return (
    <>
      {
        Texts.map((items, key) => (
          <React.Fragment key={key}>
            <div className="p-5 cursor-pointer rounded-lg text-center bg-seccolor">
              {items.name}
            </div>
          </React.Fragment>
        ))
      }
    </>
  )
}