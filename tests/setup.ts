import dotenv from 'dotenv';

// env setup
dotenv.config();

let requested_env = process.env.ENV || 'dev';

console.log(`My requested_env: ${requested_env}`);

let BASE_URL: string | undefined;

if(requested_env === 'dev'){

    BASE_URL = process.env.ENV_DEV;
}
else if(requested_env === 'qa'){

    BASE_URL = process.env.ENV_QA;

}
else if(requested_env === 'prd'){

    BASE_URL = process.env.ENV_PRD;

}

if (BASE_URL === undefined) throw new Error(`BASE URL is not defined for requested environment: ${requested_env}`);

export {BASE_URL};

