
const useBroadcasterID = async (username) => {
  const twitchLogin = username;
  console.log(twitchLogin)
  const getBroadcasterID = async (twitchLogin) => {
    const response = await fetch(`https://api.twitch.tv/helix/users?login=${twitchLogin}`, {
      headers: {
        'mode': 'no-cors',
        'credentials': 'include',
        'Client-ID': process.env.TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`
      }});
    const data = await response.json();
    console.log(data);
    return data.data[0].id;
    }
  const broadcasterID = await getBroadcasterID(twitchLogin)
  return broadcasterID;
};

export default useBroadcasterID;
