interface ImageProps {
  src: string;
  alt: string;
}

export function Image({ alt, src }: ImageProps) {
  return (
    <img className="w-full object-cover" src={src} alt={` ${alt}cover page`} />
  );
}
