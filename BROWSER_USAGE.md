# Running Playwright Cucumber Tests with Different Browsers

This project supports running tests in Chromium, Firefox, and WebKit browsers using Playwright and Cucumber.

## Local Execution

You can run tests in a specific browser by setting the `BROWSER` environment variable before running your test command.

### Chromium (default)
```powershell
npm run smoke
npm run regression
```

### Firefox
```powershell
$env:BROWSER="firefox"; npm run smoke
$env:BROWSER="firefox"; npm run regression
```

### WebKit
```powershell
$env:BROWSER="webkit"; npm run smoke
$env:BROWSER="webkit"; npm run regression
```

## GitHub Actions

The CI workflows (`smoke.yml` and `regression.yml`) are configured to run tests in parallel for all three browsers:
- Chromium
- Firefox
- WebKit

Each job sets the `BROWSER` environment variable and uploads separate reports for each browser.

## Adding More Browsers
To add more browsers, update the workflow files and the browser selection logic in `features/hooks/world.ts`.

## Troubleshooting
- If a browser is not launching, ensure Playwright dependencies are installed:
  ```powershell
  npx playwright install --with-deps
  ```
- If you want to run all browsers locally, run each command with the appropriate `BROWSER` value.

---

**Tip:** You can also use tags (e.g., `@smoke`, `@regression`) to run specific suites in any browser.
