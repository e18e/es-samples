/**
 * ECMAScript Code Samples Library
 * A comprehensive collection of executable code samples representing everything new in each edition of ECMAScript (ES5.1/2011 to ES2026).
 * Spec Reference: https://ecma-international.org/publications-and-standards/standards/ecma-262/
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const featuresPath = path.resolve(__dirname, '../features.json');

export const features = JSON.parse(fs.readFileSync(featuresPath, 'utf8'));

export * as es2011 from './es2011.js';
export * as es2015 from './es2015.js';
export * as es2016 from './es2016.js';
export * as es2017 from './es2017.js';
export * as es2018 from './es2018.js';
export * as es2019 from './es2019.js';
export * as es2020 from './es2020.js';
export * as es2021 from './es2021.js';
export * as es2022 from './es2022.js';
export * as es2023 from './es2023.js';
export * as es2024 from './es2024.js';
export * as es2025 from './es2025.js';
export * as es2026 from './es2026.js';
