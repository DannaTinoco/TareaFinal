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
  htmlReporter: {
    enabled: true
  },
  allure: {
    enabled: true,
    require: '@codeceptjs/allure-legacy',
    outputDir: 'output/allure-results',
    screenshots: true,
    fullPageScreenshots: true,
    screenshotOnFail: true,
    stepByStepReport: true
  }
},
  name: 'TareaFinal'
}
