import { envs } from './core/config/env';
import app from './server';

app.listen(envs.PORT, () => {
	console.log(`Server running on port http://localhost:${envs.PORT}/`);
});
