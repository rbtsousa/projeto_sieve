import React from 'react';
import {Gallery, GalleryImage} from 'react-gesture-gallery'
import {StyledCarousel,Hr} from './styles'
export default function Carousel() {
  const[index,setIndex] = React.useState(0);  
  
  const images = [
    {
      src:
      "https://i.imgur.com/uj6zeJ1.png"
    },
  ];
  return (<>
    <StyledCarousel>
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(img => (
          <GalleryImage objectFit="contain" key={img.src} src={img.src} />
        ))}
      </Gallery>
    </StyledCarousel>
    <Hr color= "#c4c4c4"/>
    </>
  );
}