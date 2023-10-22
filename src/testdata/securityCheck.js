const types = ['Scissor', 'Gun', 'Normal', 'ElectronicDevice', 'Laptop', 'Knife'];
const areas = ['HQ', 'AZ'];
const data = [];

for (let i = 0; i < 50; i++) {
  const type = types[Math.floor(Math.random() * types.length)];
  const area = areas[Math.floor(Math.random() * areas.length)];
  data.push({ type, area });
}

export default data;
