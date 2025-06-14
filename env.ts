import { config } from 'dotenv';
import process from 'process'
config({ path: '.env' });

const env = { ...process.env } as Record<string, string>;

export default env