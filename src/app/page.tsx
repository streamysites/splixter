import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ImageCarousel from "./components/ImageCarousel";
import YoutubeVideos from "./components/YoutubeVideos";
import TwitchClips from "./components/TwitchClips";
import useBroadcasterID from "./useBroadcasterID";
import useTwitchClips from "./useTwitchClips";
// import useTwitchChannelInfo from "./useTwitchChannelInfo";
// import useGameInfo from "./useGameInfo";
import ContactForm from "./components/ContactForm";
import { channel } from "diagnostics_channel";



export default async function Home() {
  const imageArray = [
    {"src": "https://images.squarespace-cdn.com/content/v1/5bccd5717788971625e09ffc/1556577767604-8C9DRPVWF53XWNFX0DOR/v_franklin_chop_2048x1536.jpg?format=1500w", "name": "Grand Theft Auto V"},
    {"src": "https://i.pinimg.com/originals/38/fd/31/38fd316db422c192fc05fa75070488d5.jpg", "name": "Payday 2"},
    {"src": "https://cdn.dribbble.com/userupload/3742262/file/original-dd8447f8cb41947bd6afb95601e8e414.jpg", "name": "The Legend of Zelda"},
    {"src": "https://live.staticflickr.com/4090/5124977032_a37cf64a4b_b.jpg", "name": "World of Warcraft"},
    {"src": "https://live.staticflickr.com/4090/5124977032_a37cf64a4b_b.jpg", "name": "World of Warcraft"},
    {"src": "https://live.staticflickr.com/4090/5124977032_a37cf64a4b_b.jpg", "name": "World of Warcraft"},
  ];


  const res = await fetch(`https://dev.streamy.pro/api/get-site-info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "user_id": process.env.STREAMY_USER_ID,
      }),
      next: {
        revalidate: 1,
      },
  })
  const data = await res.json()
  const siteInfo = await data?.[0];
  const subDomain = await siteInfo?.subdomain;
  const twitchChannelName = await siteInfo?.twitch_channel_name;
  const youtubeChannelName = await siteInfo?.youtube_channel_name;
  const colors = JSON.parse(await siteInfo?.color_scheme);
  // const channelInfo = await useTwitchChannelInfo(twitchChannelName);
  // const gameID = channelInfo[0]?.game_id;
  // const gameInfo = await useGameInfo(gameID[0]);
  // const boxArtURL = gameInfo?.box_art_url;

  // console.log(gameID)
  // console.log(gameInfo)
  // console.log(boxArtURL)
  console.log("---")
  console.log(colors)
  console.log("---")
  console.log(siteInfo)
  console.log(subDomain)


    // const broadcasterID = await useBroadcasterID("splixter");
    const twitchClips = await useTwitchClips(twitchChannelName);
    // console.log(twitchClips);
    // console.log(broadcasterID)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection subDomain={subDomain} twitchChannelName={twitchChannelName} />
      <div className="flex flex-col w-full items-center max-w-6xl">
        <div className="flex flex-col w-full">
        <h3 className="font-quattrocento text-6xl py-8">About</h3>
        <div className="flex w-full">
          <div className="flex flex-col justify-center w-1/2 text-2xl">
            <p>{`Hey! I'm ${siteInfo?.display_name}, a variety streamer on Twitch and content creator on Youtube.`}</p>
            <p>{siteInfo?.bio}</p>

          </div>
          <div className="flex flex-col w-1/2 items-center">
            <img className="h-[400px] w-[400px] object-cover rounded-full" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2646&q=80" />
          </div>

          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-quattrocento text-6xl py-8">
            Some Games I Enjoy
          </h3>
          <ImageCarousel imageArray={imageArray} />
          <h3>{`Catch my latest stream to see what I'm playing!`}</h3>
          <a href="/" className="py-4 px-12 border-2 border-black self-start rounded-full">Visit Stream</a>
        </div>
        <div className="flex flex-col w-full">
          <h3 className="font-quattrocento text-6xl py-8">Latest Youtube Videos</h3>
          <iframe id="ytplayer"
          className="w-full h-[500px]"
            src={`https://www.youtube.com/embed?listType=user_uploads&list=GamersNexus`}
            >  
          </iframe>
          {/* <YoutubeVideos /> */}
          <h3>Catch my out my channel for even more great videos!</h3>
          <a href="/" className="py-4 px-12 border-2 border-black self-start rounded-full">Visit Stream</a>
        </div>
        <div className="flex flex-col w-full">
          <h3 className="font-quattrocento text-6xl py-8">Latest Twitch Clips</h3>
          <TwitchClips twitchClips={twitchClips} subdomain={subDomain} />





        </div>
        <div className="flex flex-col w-full mb-4">
          <h3 className="font-quattrocento text-6xl py-8">Support Me</h3>
          <div className="flex flex-col w-full items-center justify-center">
            <p className="text-6xl">{`If you'd like to support me here's how you can!`}</p>
            <div className="flex flex-col gap-2">
              <a href="https://donate-link" className="border-2 border-black py-4 px-12 rounded-full text-2xl text-center cursor-pointer hover:bg-black hover:border-white hover:text-white transition" target="_blank" rel="noopener noreferrer">Donate</a>
              <a href="https://merch-link" className="border-2 border-black py-4 px-12 rounded-full text-2xl text-center cursor-pointer hover:bg-black hover:border-white hover:text-white transition" target="_blank" rel="noopener noreferrer">Merch</a>
              <a href="https://patreon.com" className="border-2 border-black py-4 px-12 rounded-full text-2xl text-center cursor-pointer hover:bg-black hover:border-white hover:text-white transition" target="_blank" rel="noopener noreferrer">Patreon</a>
            </div>
            </div>
        </div>

        <div className="flex flex-col w-full mb-4">
          <h3 className="font-quattrocento text-6xl py-8">Contact Me</h3>
          <ContactForm /> 
        </div>



      </div>
    </main>
  );
}