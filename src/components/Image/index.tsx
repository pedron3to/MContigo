interface ImageProps {
  src: string;
  alt: string;
}

export function Image({alt, src}: ImageProps) {
  
  return <img src={src} alt={` ${alt}cover page`}/>;
}
