// Import & Initialize
import { initiateUserControlledWalletsClient } from '@circle-fin/user-controlled-wallets';
import env from './env';
const client = initiateUserControlledWalletsClient({
  apiKey: env.API_KEY,
});

const response = await client.createUser({
  userId: crypto.randomUUID(),
});

console.log(response);