declare module 'react-slick' {

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    // you can add more settings if needed
    [key: string]: any;
  }

  export default class Slider extends React.Component<Settings> {}
}