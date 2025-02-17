import { ComponentType } from 'react';
import { Image, ImageProps } from '@chakra-ui/react';
import { motion, MotionProps } from 'framer-motion';

const ImageMotion = motion<MotionProps | ImageProps>(Image as ComponentType);
interface Props {
  srcUrl: string;
  size?: string | string[] | number[] | number;
  animation?: boolean;
  rounded?: string;
  shadow?: string;
  draggable?: boolean;
}
const ImageBox = ({ srcUrl, size, animation, draggable, rounded, shadow }: Props) => {
  return (
    <ImageMotion
      initial={{ scale: srcUrl === '/logos/venomid.png' ? 0.9 : 0.985 }}
      animate={animation ? { scale: 1 } : 'none'}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      drag={draggable ? draggable : false}
      dragDirectionLock
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.5}
      onDragEnd={(e, info) => {}}
      whileTap={{ cursor: draggable ? 'grabbing' : 'default' }}
      src={srcUrl}
      width={size ? size : ['xs','sm','sm','sm','md']}
      boxShadow={shadow ?? 
        (srcUrl.includes('.gif') || srcUrl.includes('.png') || srcUrl.includes('.svg'))
          ? 'none'
          : '0 0 3px #00000080'
      }
      zIndex={draggable ? 99 : 'inherit'}
      rounded={rounded ?? 'none'}
      alt="venomid"
    />
  );
};

export default ImageBox;
