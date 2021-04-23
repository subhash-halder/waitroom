let api = 'http://localhost:8888';

if (process.env.NODE_ENV === 'production') {
  api = 'https://waitroom.subhash.info/api/';
}

const exportObj = {
  serverBaseURL: api,
};

export default exportObj;
