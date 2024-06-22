// src/core/config/env.ts

import 'dotenv/config';
import { get } from 'env-var';

interface ENV {
    PORT : number,
    API_PREFIX : string,
    NODE_ENV : string
}

export const envs:ENV = {
 PORT: get('PORT').required().asPortNumber(),
 API_PREFIX: get('DEFAULT_API_PREFIX').default('/api/v1').asString(),
 NODE_ENV: get('NODE_ENV').default('development').asString()
};