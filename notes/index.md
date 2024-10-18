# Notes



### dirname typescript


In TypeScript, you can't directly use `__dirname` like you do in Node.js. However, you can achieve the same functionality using the `path` module and `import.meta.url`. Here's how:

1. **Install Node Types:**

```sh
npm install --save-dev @types/node
```

2. **Update `tsconfig.json`:**

Add `node` to the `types` array in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "types": ["node"]
  }
}
```

3. Use `path` and `import.meta.url`:

```ts
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
```

### Explanation

- `import.meta.url`: This property provides the URL of the current module.
- `fileURLToPath`: This function converts the URL to a file path.
- `path.dirname`: This function extracts the directory portion of the file path, giving you the equivalent of `__dirname`.

### The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'es2022', 'esnext', 'system', 'node16', or 'nodenext'.ts(1343)

- *add "type": "module" to package.json*
- *tsc --module=\"es2022\"*

```json
                    ...       
"scripts": {
    "build": "tsc --module \"es2022\"",
    "start": "concurrently npm:start:*"
}
                    ...    
```

## Supporting Resources

- [WebSockets Tutorial: Creating a Real-Time WebSocket Server](https://dzone.com/articles/websockets-tutorial-creating-a-real-time-websocket#:~:text=Step%201:%20Creating%20our%20Server.%20Let%27s%20start,to%20be%20using%20an%20express%20server%20with)

- [The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'esnext', or 'system'.ts(1343)](https://stackoverflow.com/questions/69716191/the-import-meta-meta-property-is-only-allowed-when-the-module-option-is-e)