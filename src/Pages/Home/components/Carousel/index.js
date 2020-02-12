import React,{useState,useEffect} from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery'
import { StyledCarousel, Hr } from './styles';


const index_Inicial = 0;

export default function Carousel() {

  const [index, setIndex] = useState(index_Inicial);

  const images = [


    "https://i.imgur.com/uj6zeJ1.png",

    "https://i.imgur.com/vDyzWQ8.jpg",

    "https://i.imgur.com/3ZMjnND.jpg"



  ];

  useEffect(() => {
    const interval = setInterval(() => {

      if (index === images.length - 1) {
        setIndex(index_Inicial)
      } else {
        setIndex(index + 1)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [index])



  return (
    <>
      <StyledCarousel>
      <div className="Ajuste"></div>
        <Gallery
          style={{
            widht: '100vw',
            background: 'white'
          }}
          index={index}
          onRequestChange={i => {
            setIndex(i);
          }}
        >
          {images.map(img => (
            <GalleryImage objectFit="cover" key={img} src={img} />
          ))}
        </Gallery>
      </StyledCarousel>
      <Hr color="#c4c4c4" />
    </>
  );
}
