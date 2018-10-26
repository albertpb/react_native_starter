import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

// Add tron to console log to work with reactotron
console.tron = (...args) => {
	console.log(...args);
	Reactotron.display({
		name: 'TRON',
		value: args,
		preview: args.length > 1 ? JSON.stringify(args) : args[0],
	});
};

export default Reactotron.configure({
	name: 'iQ Management',
})
	.useReactNative({
		asyncStorage: false, // there are more options to the async storage.
		networking: {
			// optionally, you can turn it off with false.
			ignoreUrls: /symbolicate/,
		},
		editor: false, // there are more options to editor
		overlay: false, // just turning off overlay
	})
	.use(reactotronRedux())
	.connect();
