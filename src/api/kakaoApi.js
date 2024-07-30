import axios from "axios";

const host = process.env.REACT_APP_API_SERVER_HOST;

const rest_api_key = "4fa0354bc9289db4b1283bf12b89823e";
const redirect_uri = "http://localhost:3000/member/kakao";
const auth_code_path = "https://kauth.kakao.com/oauth/authorize";

export const getKakaoLoginLink = () => {
  const kakaoUrl = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  return kakaoUrl;
};
