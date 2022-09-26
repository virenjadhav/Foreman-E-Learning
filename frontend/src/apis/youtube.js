import axios from "axios";

// const KEY = "AIzaSyCI09pcuSpEFEeU-F7eaB0BJY_BcgFfaWI";
const KEY = "AIzaSyCvmyXz5SXkCwMTpu3Kx5QkGnPQ1vvuf4U";
// const KEY = "";
// const KEY = "AIzaSyDqoYHJVo0-LpqMrNwpXaAWzroNGOspBUM";
// const KEY = "AIzaSyA7r6CakcdwQmIcBv2EdclhOMg5639LArw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
