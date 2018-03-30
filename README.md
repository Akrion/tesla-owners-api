Unofficial Promisified Tesla Owners API For NodeJS
===================================================
Influenced by [Guten Ye](https://github.com/gutenye) and his work on his [tesla-api](https://github.com/gutenye/tesla-api)

Install
-----------

```javascript
npm install tesla-owners-api
```

Getting started
---------------

```javascript
let Tesla = require('tesla-owners-api')

async function main() {
  try {
    var teslaApi = await Tesla.login({email: '<YOUR_EMAIL>', password: '<YOUR_PASSWORD>'})
    // teslaApi now contains the vehicles list as well as the auth info
    var auth = teslaApi.auth
    // Get first vehicle from the vehicles list decorated with all the functions
    var vehicle = teslaApi.vehicles[0]
    // Wake up the sleeping beauty first
    await vehicle.setWakeUp()
    // Now get stuff
    var state = await vehicle.getState()
    var chargeState = await vehicle.getChargeState()
    console.log(state, chargeState)
    // Or set stuff
    await vehicle.setHonkHorn()
    await vehicle.setRearTrunkOpen()
    console.log('Tesla Owners API FTW!')
  } catch (err) {
    console.error(err.stack)
  }
}

main()
```

**Note that responses follow JS camelCase convention**

Tesla Owners API response:
```
{
  response: {
    display_name: "Hello",
    remote_start_enabled: true
  }
}
```
Camel case conversion result:
```
{
  response: {
    displayName: "Hello",
    remoteStartEnabled: true
  }
}
```

Copyright
---------

The MIT License

Copyright (c) 2018 Akrion

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.