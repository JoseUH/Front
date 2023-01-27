// export interface HomeInterface {
//   title:string;
//   hero: HeroInterface
// }
// export interface HeroInterface {
//   subtitulo: string;
//   image: ImageInterface
// }
// export interface ImageInterface {
//   src: string;
//   alt: string;
// }

// esto es lo mismo pero sin crear varias interfaces

export interface HomeInterface {
  title:string ;
  hero: {
    subtitulo:string;
    image: {
      src: string;
      alt: string;
    }
  }
  body :number[]
}

