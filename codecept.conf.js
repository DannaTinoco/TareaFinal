/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',      
  output: './output',        
  helpers: {
    Playwright: {
      browser: 'chromium',    
      url: 'https://www.mercadolibre.com.mx',
      show: true,            
      waitForTimeout: 5000  
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
