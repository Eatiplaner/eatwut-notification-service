export const env = {
  KAFKA: {
    KAFKA_BOOTSTRAP_SERVER: process.env.KAFKA_BOOTSTRAP_SERVER,
  },
  SEND_GRID: {
    API_KEY: process.env.SEND_GRID_KEY,
    FROM_EMAIL: process.env.SEND_GRID_FROM_EMAIL,
  },
};
