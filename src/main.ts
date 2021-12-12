import './global.css';

// import App from './App.svelte';
import Index from '@src/layout/Index.svelte';

const app = new Index({
	target: document.body,
});
// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });

export default app;
