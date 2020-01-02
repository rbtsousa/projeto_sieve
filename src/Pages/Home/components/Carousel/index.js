import React from 'react';
import {Gallery, GalleryImage} from 'react-gesture-gallery'
import {StyledCarousel,Hr} from './styles';


const index_Inicial = 0;

export default function Carousel() {

  const[index,setIndex] = React.useState(index_Inicial);

  const images = [


    "https://i.imgur.com/uj6zeJ1.png",

    "https://i.imgur.com/7NkE0NL.jpg",

    "https://i.imgur.com/55Eh1e9.jpg"



];

  React.useEffect(() =>{
    const interval = setInterval (() => {

      if(index === images.length - 1){
        setIndex (index_Inicial)
      }else{
        setIndex(index + 1)
      }
    }, 5000)
  return () => clearInterval (interval)
  }, [index])



  return (
  <>
    <StyledCarousel>
      <Gallery
      style = {{
        height: '100vh',
        widht: '100vw',
        background: 'black'
      }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(img => (
          <GalleryImage objectFit="contain" key={img} src={img} />
        ))}
      </Gallery>
    </StyledCarousel>
    <Hr color= "#c4c4c4"/>
    </>
  );
}
