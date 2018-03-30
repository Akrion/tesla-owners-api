const apiHost = 'https://owner-api.teslamotors.com'

module.exports = {
  apiHost:       apiHost,
  apiUrl:        `${apiHost}/api/1`, 
  apiOath:       '/oauth/token',
  clientId:      'e4a9949fcfa04068f59abb5a658f2bac0a3428e4652315490b659d5ab3f35a9e', 
  clientSecret:  'c75f14bbadc8bee3a7594412c31416f8300256d7668ea7e6e7f06727bfb9d220',
  userAgents: {
    default: 'android',
    android: {
      name:       'Android',
      version:    '2.1.79',
      model:      'SM-G900V',
      codename:   'REL',
      release:    '4.4.4',
      locale:     'en_US'
    }
  }
}
