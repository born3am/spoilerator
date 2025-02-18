declare module 'react-slick' {

  export interface Settings {
  children?: React.ReactNode;
  className?: string;
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    // you can add more settings if needed
      }

  export default class Slider extends React.Component<Settings> {}
}
