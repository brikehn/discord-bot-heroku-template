export const validateEnv = () => {
  if (!process.env.TOKEN) {
    console.warn("Missing TOKEN environment variable.");
    process.exit(1);
  }

  if (!process.env.CLIENT_ID) {
    console.warn("Missing CLIENT_ID environment variable.");
    process.exit(1);
  }
};
