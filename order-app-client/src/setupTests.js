// src/setupTests.js
import '@testing-library/jest-dom'; // volitelné, pokud chceš jest-dom matchery

// polyfill pro Node.js prostředí
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
