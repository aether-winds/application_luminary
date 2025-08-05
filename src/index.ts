import express from 'express';
import { join } from 'node:path';
import HtmxFilterMiddlewareImpl from './middleware/htmx-filter';
import { router as indexRouter } from './routes/index';
import hbs from './utils/handlebars';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', join(__dirname, 'assets', 'views'));
app.engine('html', hbs.__express);
app.use('/static', express.static(join(__dirname, 'assets', 'public')));

app.use(HtmxFilterMiddlewareImpl());
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
