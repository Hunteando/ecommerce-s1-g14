const box = require.context('./assets',true)

export const sliderItems = [
    {
        id: 1,
        img: box('./cpu3.png'),
        title: 'GAMING PC',
        desc:"DON'T COMPROMISE ON PERFORMANCE, GET FLAT 30% OFF FOR NEW GAMING RIGS",
    },
    {
        id: 2,
        img: box('./cpu2.png'),
        title: 'GAMING PC',
        desc:"DON'T COMPROMISE ON PERFORMANCE, GET FLAT 30% OFF FOR NEW GAMING RIGS",
    }
]

export const categories = [
    {
      id: 1,
      img: box('./cpu.png'),
      title: "CPU",
      cat:"cpu",
    },
    {
      id: 2,
      img:box('./monitorCategory.png'),
      title: "MONITOR",
      cat: "monitor",
    },
  ];

  export const popularProducts = [
    {
      id:1,
      img:box(`./cpu1.png`),
    },
    
    {
      id:2,
      img:box(`./cpu2.png`),
    },
    {
      id:3,
      img:box(`./cpu3.png`),
    },
    {
      id:4,
      img:box(`./cpu4.png`),
    },
    {
      id:5,
      img:box(`./monitor1.png`),
    },
    {
      id:6,
      img:box(`./monitor3.png`),
    },
  ]