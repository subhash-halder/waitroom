import dotenv from 'dotenv';

dotenv.config();

export default {
  agora_app_id: process.env.AGORA_APP_ID,
  agora_app_secret: process.env.AGORA_APP_CERTIFICATE,
  port: process.env.PORT,
};
