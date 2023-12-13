// This function generates random data for your heatmap chart
export const generateData = (count:any, options:any) => {
    const { min, max } = options;
    const data = [];
  
    for (let i = 0; i < count; i++) {
      data.push({
        x: `X${i}`,
        y: `Y${i}`,
        value: Math.floor(Math.random() * (max - min + 1) + min),
      });
    }
  
    return data;
  };
  