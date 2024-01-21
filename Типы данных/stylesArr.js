let styles = ['Джаз', 'Блюз']
styles.push('RnR')

styles[Math.floor((styles.length -1)/2)] = 'Classic'

console.log(styles.shift())
styles.unshift('Рэп','Peгги')

console.log(styles)