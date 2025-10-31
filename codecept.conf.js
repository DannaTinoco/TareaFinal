/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',       // busca tests en la raíz
  output: './output',         // reportes y capturas
  helpers: {
    Playwright: {
      browser: 'chromium',    // navegador a usar
      url: 'https://www.mercadolibre.com.mx',
      show: true,             // ver la ejecución
      waitForTimeout: 5000    // tiempo máximo de espera por paso
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    htmlReporter: {
      enabled: true
    }
  },
  name: 'TareaFinal'
}
