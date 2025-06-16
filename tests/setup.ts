import dotenv from 'dotenv';

// env setup
dotenv.config();

let requested_env = process.env.ENV || 'dev';

console.log(`********** Request_env es: ${requested_env}`);

let BASE_URL: string | undefined;

if(requested_env === 'dev'){
    console.log(`********** Entro en dev`);
    BASE_URL = process.env.ENV_DEV;
}
else if(requested_env === 'qa'){
    console.log(`********** Entro en qa`);
    BASE_URL = process.env.ENV_QA;

}
else if(requested_env === 'prd'){
    console.log(`********** Entro en prd`);
    BASE_URL = process.env.ENV_PRD;

}

console.log(`********** EL BASE_URL ES: ${BASE_URL}`);

if (BASE_URL === undefined) throw new Error(`BASE URL is not defined for requested environment: ${requested_env}`);

export {BASE_URL};

