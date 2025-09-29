import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
	globalIgnores(["dist", ".eslintrc.cjs"]),
	{
		files: ["**/*.{js,jsx}"],
		extends: [
			js.configs.recommended,
			reactHooks.configs["recommended-latest"],
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: "latest",
				ecmaFeatures: { jsx: true },
				sourceType: "module",
			},
		},
		plugins: {
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		settings: {
			react: {
				version: "18.2",
			},
		},
		rules: {
			// From your old config
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			"react/prop-types": "off",

			// From your current config
			"no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],

			// Additional React rules equivalent to 'plugin:react/recommended'
			"react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",
			"react/react-in-jsx-scope": "off", // Not needed with new JSX transform
		},
	},
]);
