const env = process.env;

export const nodeEnv = env.nodeEnv || 'development'

export default {
    port: env.port || 8080
};