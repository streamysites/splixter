import Image from "next/image"


export default function ImageCarousel({imageArray}) {

  return (
    <div className="flex overflow-x-scroll max-w-6xl">
      {imageArray.map((image, index) => {
        return (
          <div className="flex shrink-0 flex-col items-center text-center justify-center relative bg-center bg-cover h-[700px] w-[500px]" style={{backgroundImage: `url('${image.src}')`}} key={index}>
            <div className='absolute inset-0 w-full h-full bg-black bg-opacity-40 z-0' />
            <p className="text-3xl uppercase text-white font-quattrocento z-10">{image.name}</p>
          </div>
        )
      })}
    </div>
  )

}