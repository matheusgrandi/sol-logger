const express = require('express');
const puppeteer = require("puppeteer");

const app = express();

app.use(express.json());


app.post('/save', async (request, response) => {
  console.log(request.body);
  const { url, os } = request.body;

  console.log('funciona 1');

  const browser = await puppeteer.launch({    
    headless: true
  });

  const page = await browser.newPage();
  

  await page.goto(url, {   
    waitUntil:'networkidle2',
  });


  await page.setViewport({
    width: 1920,
    height: 2100
  }); 


    await page.evaluate(() => {
    document.querySelector('.grafana-app').style.height = `${document.querySelector('.dashboard-container .layout').clientHeight + 16*2}px`
  }
  )

  await page.goto('https://demo.huxx.io/d/h9SVG1p7k/relatorio?orgId=2&kiosk', {   
    waitUntil:'networkidle2',
  });



  await page.screenshot({
    path: `${os}.png`,
    fullPage: true
    
  //   clip: {
	// 		x: 0,
  //     y: 0,
  //     width: 1440,
  //     height: 3000,
  //  }
  });
  
  console.log('funciona 2');
  browser.close();


  return response.status(201).send();

});



app.listen(3000);
console.log('🚀 Server running!')