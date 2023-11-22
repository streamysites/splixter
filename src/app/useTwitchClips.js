import useBroadcasterID from './useBroadcasterID';  


const useTwitchClips = async (username) => {
  const broadcasterID = await useBroadcasterID(username);
  const twitchClips = async (broadcasterID) => {
    const response = await fetch(`https://api.twitch.tv/helix/clips?broadcaster_id=${broadcasterID}&first=12`, {
      headers: {
        'mode': 'no-cors',
        'credentials': 'include',
        'Client-ID': process.env.TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`
      }});
    const data = await response.json();
    return data;
  }
  // console.log(broadcasterID)
  const twitchClipsData = await twitchClips(broadcasterID);
  // console.log(twitchClipsData);
  return twitchClipsData.data;
}

export default useTwitchClips;