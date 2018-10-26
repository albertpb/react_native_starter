module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
	},
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:jest/recommended',
		'jest-enzyme',
		'airbnb',
		'prettier',
		'prettier/react',
	],
	plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
	rules: {
		'linebreak-style': 'off', // Don't play nicely with Windows.
		'arrow-parens': 'off', // Incompatible with prettier
		'object-curly-newline': 'off', // Incompatible with prettier
		'no-mixed-operators': 'off', // Incompatible with prettier
		'arrow-body-style': 'off', // Not our taste?
		'function-paren-newline': 'off', // Incompatible with prettier
		'no-plusplus': 'off',
		'space-before-function-paren': 0, // Incompatible with prettier
		'max-len': ['error', 80, 2, { ignoreUrls: true }], // airbnb is allowing some edge cases
		'no-alert': 'error', // airbnb is using warn

		'no-param-reassign': 'off', // Not our taste?
		radix: 'off', // parseInt, parseFloat radix turned off. Not my taste.
		'react/require-default-props': 'off', // airbnb use error
		'react/forbid-prop-types': 'off', // airbnb use error
		'prefer-destructuring': 'off',

		'react/no-find-dom-node': 'off', // I don't know
		'react/no-did-mount-set-state': 'off',
		'react/no-unused-prop-types': 'off', // Is still buggy
		'react/jsx-one-expression-per-line': 'off',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{ components: ['Link'], specialLink: ['to'] },
		],
		'no-console': 'off',
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'prettier/prettier': ['error'],
	},
};
