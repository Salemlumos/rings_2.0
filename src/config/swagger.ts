import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';
import * as fs from 'fs';
import * as path from 'path';

const setupSwagger = (app: Application) => {
  const swaggerDocument = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../dist/swagger.json'), 'utf8'));
  if(swaggerDocument != undefined) app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default setupSwagger;