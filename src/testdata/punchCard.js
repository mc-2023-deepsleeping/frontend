const punchCardData = [];

const pool = ['2023/09/27 14:03', '2023/09/28 18:00', '2023/09/29 18:00', '2023/09/30 18:00', '2023/10/01 18:00', '2023/10/02 18:00', '2023/10/03 18:00'];

for (let i = 0; i < 5000; i++) {
  const random = Math.random();
  const date = pool[Math.floor(Math.random() * pool.length)];
  const status = random < 0.333 ? "early" : random < 0.666 ? 'normal' : 'late' ; // randomly assign true or false
  const area = Math.random() < 0.5 ? "AZ" : "HQ"; // randomly assign "AZ" or "HQ"
  punchCardData.push({ status, area, date });
}

export default punchCardData;
