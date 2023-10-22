const fetchAttd = async () => {
  const response = await fetch('http://192.168.50.110:5000/attd_rec').then(res => res.json());
  return response;
};

export default fetchAttd;