const env = process.env;

export const nodeEnv = env.nodeEnv || 'development'

export default {
    port: env.port || 8080,
    mongoUri: "mongodb+srv://alexandraBalan:hercox-qunnuK-sosfy4@cluster0.czlqofd.mongodb.net/?retryWrites=true&w=majority",
    jwtSecret: "MyCalendarSecret",
};
